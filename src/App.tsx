import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';
import { symptoms } from './data/symptoms';
import { SymptomSelect } from './components/SymptomSelect';
import { SymptomList } from './components/SymptomList';
import { DiagnosisResult } from './components/DiagnosisResult';
import { getDiagnosis } from './services/api';
import { SelectedSymptom } from './types';

function App() {
  const [age, setAge] = useState('');
  const [weight , setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const handleOptionSelect = (
    symptomId: string,
    optionId: string,
    symptomLabel: string,
    optionLabel: string
  ) => {
    const newSymptom: SelectedSymptom = {
      symptomId,
      optionId,
      symptomLabel,
      optionLabel,
    };

    setSelectedSymptoms(prev => [...prev, newSymptom]);
    setSelectedSymptom('');
  };

  const handleRemoveSymptom = (symptom: SelectedSymptom) => {
    setSelectedSymptoms(prev => 
      prev.filter(s => 
        !(s.symptomId === symptom.symptomId && s.optionId === symptom.optionId)
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const result = await getDiagnosis({
        age,
        weight,
        gender,
        animalType,
        symptoms: selectedSymptoms,
        description,
      });
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای ناشناخته');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50" dir="rtl">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <PawPrint className="w-12 h-12 text-orange-600" />
            <h1 className="text-3xl font-bold text-orange-800 mr-4">مشاوره پزشکی حیوانات خانگی</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-orange-700 font-medium mb-2">سن حیوان</label>
              <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder=" سن را وارد کنید "
                  required
              />
            </div>

            <div>
              <label className="block text-orange-700 font-medium mb-2">وزن حیوان</label>
              <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="وزن به کیلوگرم"
                  required
              />
            </div>

            <div>
              <label className="block text-orange-700 font-medium mb-2">نوع حیوان</label>
              <select
                  value={animalType}
                  onChange={(e) => setAnimalType(e.target.value)}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
              >
                <option value="">انتخاب کنید</option>
                <option value="سگ">سگ</option>
                <option value="گربه">گربه</option>
                <option value="گوسفند">گوسفند</option>
                <option value="گاو">گاو</option>
                <option value="اسب">اسب</option>
                <option value="خرگوش">خرگوش</option>
                <option value="طیور زینتی">طیور زینتی</option>
                <option value="پرنده">پرنده</option>
              </select>
            </div>


            <div>
              <label className="block text-orange-700 font-medium mb-2">جنسیت حیوان</label>
              <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
              >
                <option value="">انتخاب کنید</option>
                <option value="نر">نر</option>
                <option value="ماده">ماده</option>
              </select>
            </div>

            <div>
              <SymptomSelect
                  symptoms={symptoms}
                  selectedSymptom={selectedSymptom}
                  onSymptomChange={setSelectedSymptom}
                  onOptionSelect={handleOptionSelect}
              />
            </div>

            <SymptomList
                selectedSymptoms={selectedSymptoms}
                onRemove={handleRemoveSymptom}
            />

            <div>
              <label className="block text-orange-700 font-medium mb-2">توضیحات تکمیلی</label>
              <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-32"
                  placeholder="لطفا توضیحات علائم بالا را بنویسید و درصورت مشاهده علائم دیگر اینجا درج کنید..."
                  required
              />
            </div>

            <button
                type="submit"
                disabled={isLoading || selectedSymptoms.length === 0}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              دریافت تشخیص
            </button>
          </form>

          <DiagnosisResult
              isLoading={isLoading}
              error={error}
              result={result}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

export default App;
