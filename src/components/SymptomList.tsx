import React from 'react';
import { X } from 'lucide-react';
import { SelectedSymptom } from '../types';

type Props = {
  selectedSymptoms: SelectedSymptom[];
  onRemove: (symptom: SelectedSymptom) => void;
};

export function SymptomList({ selectedSymptoms, onRemove }: Props) {
  // محدودیت تعداد علائم انتخاب‌شده
  const minSymptoms = 3;
  const maxSymptoms = 6;

  if (selectedSymptoms.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-orange-800 font-medium mb-2">علائم انتخاب شده:</h3>

      {/* نمایش هشدار در صورتی که تعداد علائم خارج از محدوده باشد */}
      {selectedSymptoms.length < minSymptoms && (
        <p className="text-red-600 mb-2">حداقل باید {minSymptoms} علامت انتخاب شود.</p>
      )}
      {selectedSymptoms.length > maxSymptoms && (
        <p className="text-red-600 mb-2">حداکثر تعداد علائم انتخابی {maxSymptoms} است.</p>
      )}

      <div className="flex flex-wrap gap-2">
        {selectedSymptoms.map((symptom) => (
          <div
            key={`${symptom.symptomId}-${symptom.optionId}`}
            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full flex items-center"
          >
            <span>{symptom.symptomLabel}: {symptom.optionLabel}</span>
            <button
              onClick={() => onRemove(symptom)}
              className="ml-2 text-orange-600 hover:text-orange-800"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
