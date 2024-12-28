export interface SelectedSymptom {
  symptomId: string;
  optionId: string;
  symptomLabel: string;
  optionLabel: string;
}

export interface DiagnosisResult {
  diagnosis: string;
  recommendations: string[];
  confidence: number;
}

export interface DiagnosisInput {
  age: string;
  weight: string;
  gender: string;
  animalType: string;
  symptoms: SelectedSymptom[];
  description: string;
  labTests?: string; // اضافه کردن labTests به عنوان یک خاصیت اختیاری
}
