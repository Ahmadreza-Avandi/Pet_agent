import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Grid,
  Typography
} from '@mui/material';
import { Symptom } from '../data/symptoms';

interface SymptomSelectProps {
  symptoms: Symptom[];
  selectedSymptom: string;
  onSymptomChange: (symptomId: string) => void;
  onOptionSelect: (symptomId: string, optionId: string, symptomLabel: string, optionLabel: string) => void;
  animalType: string;
  onAddSymptom: (symptomId: string, optionId: string, symptomLabel: string, optionLabel: string) => void;
}

export function SymptomSelect({
  symptoms,
  selectedSymptom,
  onSymptomChange,
  onOptionSelect,
  animalType,
  onAddSymptom
}: SymptomSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // ذخیره گزینه‌های انتخاب‌شده
  const selectedSymptomData = symptoms.find(s => s.id === selectedSymptom);
  const filteredSymptoms = symptoms.filter(s => s.animalTypes.includes(animalType));

  // فیلتر علائم با توجه به انتخاب‌های قبلی
  const availableSymptoms = filteredSymptoms.filter(s => !selectedOptions.includes(s.id));

  const handleOptionSelect = (symptomId: string, optionId: string, symptomLabel: string, optionLabel: string) => {
    // در اینجا می‌خواهیم وقتی که کاربر انتخاب می‌کند، لیست بسته نشود و گزینه انتخابی به لیست اضافه شود.
    onOptionSelect(symptomId, optionId, symptomLabel, optionLabel);
    setSelectedOptions(prev => [...prev, optionId]); // اضافه کردن به گزینه‌های انتخاب‌شده
    onAddSymptom(symptomId, optionId, symptomLabel, optionLabel); // اضافه کردن علامت انتخابی به لیست علائم
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" color="warning.dark" gutterBottom>
        علائم مشاهده شده
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>انتخاب علامت</InputLabel>
        <Select
          value={selectedSymptom}
          label="انتخاب علامت"
          onChange={(e) => onSymptomChange(e.target.value)}
          disabled={!animalType}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: '400px', // حداکثر ارتفاع لیست
                overflow: 'auto',
              },
            },
            disableScrollLock: true, // جلوگیری از بسته شدن خودکار لیست بعد از انتخاب
          }}
        >
          <MenuItem value="">
            <em>انتخاب کنید</em>
          </MenuItem>
          {availableSymptoms.map(symptom => (
            <MenuItem key={symptom.id} value={symptom.id}>
              {symptom.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedSymptomData && (
        <Grid container spacing={1}>
          {selectedSymptomData.options.map(option => (
            <Grid item xs={12} sm={6} md={4} key={option.id}>
              <Button
                fullWidth
                variant="outlined"
                color="warning"
                onClick={() => handleOptionSelect(selectedSymptom, option.id, selectedSymptomData.label, option.label)}
                sx={{
                  justifyContent: 'flex-start',
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                disabled={selectedOptions.includes(option.id)} // فقط گزینه‌های انتخاب‌شده غیرفعال می‌شوند
              >
                {option.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

