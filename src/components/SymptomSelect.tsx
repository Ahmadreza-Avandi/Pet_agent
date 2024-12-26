import React from 'react';
import { Symptom } from '../data/symptoms';

type Props = {
  symptoms: Symptom[];
  selectedSymptom: string;
  onSymptomChange: (symptom: string) => void;
  onOptionSelect: (symptomId: string, optionId: string, symptomLabel: string, optionLabel: string) => void;
};

export function SymptomSelect({
  symptoms,
  selectedSymptom,
  onSymptomChange,
  onOptionSelect,
}: Props) {
  const currentSymptom = symptoms.find((s) => s.id === selectedSymptom);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-orange-700 font-medium mb-2">نوع علائم</label>
        <select
          value={selectedSymptom}
          onChange={(e) => onSymptomChange(e.target.value)}
          className="w-full p-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">انتخاب کنید</option>
          {symptoms.map((symptom) => (
            <option key={symptom.id} value={symptom.id}>
              {symptom.label}
            </option>
          ))}
        </select>
      </div>

      {currentSymptom && (
        <div className="grid grid-cols-2 gap-2">
          {currentSymptom.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onOptionSelect(
                currentSymptom.id,
                option.id,
                currentSymptom.label,
                option.label
              )}
              className="p-2 text-right bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-md transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}