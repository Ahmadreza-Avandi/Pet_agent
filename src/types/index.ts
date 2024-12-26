export type Symptom = {
  id: string;
  label: string;
  options: {
    id: string;
    label: string;
  }[];
};

export type SelectedSymptom = {
  symptomId: string;
  optionId: string;
  symptomLabel: string;
  optionLabel: string;
};