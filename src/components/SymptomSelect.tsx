import React from 'react';
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
}

export function SymptomSelect({
  symptoms,
  selectedSymptom,
  onSymptomChange,
  onOptionSelect,
  animalType
}: SymptomSelectProps) {
  const selectedSymptomData = symptoms.find(s => s.id === selectedSymptom);
  const filteredSymptoms = symptoms.filter(s => s.animalTypes.includes(animalType));

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
        >
          <MenuItem value="">
            <em>انتخاب کنید</em>
          </MenuItem>
          {filteredSymptoms.map(symptom => (
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
                onClick={() => onOptionSelect(selectedSymptom, option.id, selectedSymptomData.label, option.label)}
                sx={{
                  justifyContent: 'flex-start',
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
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