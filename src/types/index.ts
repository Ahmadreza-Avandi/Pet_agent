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