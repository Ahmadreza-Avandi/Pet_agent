import React from 'react';
import { Chip, Box, Typography } from '@mui/material';
import { X } from 'lucide-react';
import { SelectedSymptom } from '../types';

interface SymptomListProps {
  selectedSymptoms: SelectedSymptom[];
  onRemove: (symptom: SelectedSymptom) => void;
}

export function SymptomList({ selectedSymptoms, onRemove }: SymptomListProps) {
  if (selectedSymptoms.length === 0) return null;

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" color="warning.dark" gutterBottom>
        علائم انتخاب شده
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {selectedSymptoms.map((symptom, index) => (
          <Chip
            key={`${symptom.symptomId}-${symptom.optionId}`}
            label={`${symptom.symptomLabel}: ${symptom.optionLabel}`}
            onDelete={() => onRemove(symptom)}
            color="warning"
            variant="outlined"
            deleteIcon={<X size={16} />}
            sx={{
              animation: 'fadeIn 0.3s ease-out',
              animationDelay: `${index * 100}ms`
            }}
          />
        ))}
      </Box>
    </Box>
  );
}