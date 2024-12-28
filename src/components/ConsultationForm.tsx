import React, { useState } from 'react';
import { Plus, X, AlertCircle } from 'lucide-react';

type Symptom = {
  id: string;
  name: string;
  severity: string;
};

export function ConsultationForm() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [currentSeverity, setCurrentSeverity] = useState('متوسط');

  const handleAddSymptom = () => {
    if (currentSymptom) {
      setSymptoms([
        ...symptoms,
        { id: Date.now().toString(), name: currentSymptom, severity: currentSeverity }
      ]);
      setCurrentSymptom('');
    }
  };

  const handleRemoveSymptom = (id: string) => {
    setSymptoms(symptoms.filter(s => s.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API integration placeholder
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">سن حیوان</label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="سن را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">وزن (کیلوگرم)</label>
            <input
              type="number"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="وزن را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نوع حیوان</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
              <option value="dog">سگ</option>
              <option value="cat">گربه</option>
              <option value="bird">پرنده</option>
              <option value="rabbit">خرگوش</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">جنسیت</label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
              <option value="male">نر</option>
              <option value="female">ماده</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">علائم</label>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <input
              type="text"
              value={currentSymptom}
              onChange={(e) => setCurrentSymptom(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="علائم را وارد کنید"
            />
            <select
              value={currentSeverity}
              onChange={(e) => setCurrentSeverity(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            >
              <option value="خفیف">خفیف</option>
              <option value="متوسط">متوسط</option>
              <option value="شدید">شدید</option>
            </select>
            <button
              type="button"
              onClick={handleAddSymptom}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {symptoms.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {symptoms.map((symptom) => (
                <span
                  key={symptom.id}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800"
                >
                  {symptom.name} - {symptom.severity}
                  <button
                    type="button"
                    onClick={() => handleRemoveSymptom(symptom.id)}
                    className="mr-1 ml-2 text-orange-600 hover:text-orange-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">توضیحات اضافی</label>
          <textarea
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            rows={4}
            placeholder="هر گونه جزئیات اضافی را وارد کنید"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'ارسال برای تشخیص'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}