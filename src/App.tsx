import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import { PawPrint } from 'lucide-react';
import { symptoms } from './data/symptoms';
import { SymptomSelect } from './components/SymptomSelect';
import { SymptomList } from './components/SymptomList';
import DiagnosisResult from './components/DiagnosisResult';

import { getDiagnosis } from './services/api';
import type { DiagnosisInput, SelectedSymptom } from './types';


const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn, sans-serif',
  },
  palette: {
    primary: {
      main: '#f97316',
    },
    warning: {
      main: '#f97316',
      light: '#fed7aa',
      dark: '#c2410c',
    },
  },
});

function App() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
  const [description, setDescription] = useState('');
  const [labTests, setLabTests] = useState('');
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

  const input: DiagnosisInput = {
    age,
    weight,
    gender,
    animalType,
    symptoms: selectedSymptoms,
    description,
    labTests, // ارسال labTests
  };

  try {
    const result = await getDiagnosis(input);
    setResult(result);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'خطای ناشناخته');
  } finally {
    setIsLoading(false);
  }
};



  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: `
            linear-gradient(135deg, rgba(255,247,237,0.95) 0%, rgba(255,237,213,0.95) 100%),
            url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1600') center/cover no-repeat
          `,
          py: 4,
          px: 2
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
              <PawPrint size={48} color={theme.palette.warning.main} />
              <Typography
                variant="h4"
                component="h1"
                color="warning.dark"
                fontWeight="bold"
                sx={{ mr: 2 }}
              >
                مشاوره پزشکی حیوانات خانگی
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="سن حیوان"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="سن را وارد کنید (ماه/سال)"
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="وزن حیوان"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="وزن به کیلوگرم"
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="نوع حیوان"
                    value={animalType}
                    onChange={(e) => setAnimalType(e.target.value)}
                    required
                  >
                    <MenuItem value="">انتخاب کنید</MenuItem>
                    <MenuItem value="سگ">سگ</MenuItem>
                    <MenuItem value="گربه">گربه</MenuItem>
                    <MenuItem value="گوسفند">گوسفند</MenuItem>
                    <MenuItem value="گاو">گاو</MenuItem>
                    <MenuItem value="اسب">اسب</MenuItem>
                    <MenuItem value="خرگوش">خرگوش</MenuItem>
                    <MenuItem value="طیور زینتی">طیور زینتی</MenuItem>
                    <MenuItem value="طیور صنعتی">طیور صنعتی</MenuItem>
                    <MenuItem value="ماهی">ماهی</MenuItem>
                    <MenuItem value="همستر">همستر</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="جنسیت حیوان"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <MenuItem value="">انتخاب کنید</MenuItem>
                    <MenuItem value="نر">نر</MenuItem>
                    <MenuItem value="ماده">ماده</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <SymptomSelect
                    symptoms={symptoms}
                    selectedSymptom={selectedSymptom}
                    onSymptomChange={setSelectedSymptom}
                    onOptionSelect={handleOptionSelect}
                    animalType={animalType}
                  />
                </Grid>

                <Grid item xs={12}>
                  <SymptomList
                    selectedSymptoms={selectedSymptoms}
                    onRemove={handleRemoveSymptom}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="توضیحات تکمیلی"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="لطفا توضیحات علائم بالا را بنویسید و درصورت داشتن آزمایش ها و مشاهده علائم دیگر اینجا درج کنید"
                    required
                  />
                </Grid>

                 {/* کادر اختیاری برای آزمایش‌ها */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="آزمایش‌ها (اختیاری)"
                    value={labTests}
                    onChange={(e) => setLabTests(e.target.value)}
                    placeholder="نتایج آزمایش‌های مرتبط را اینجا وارد کنید (در صورت وجود)"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    fullWidth
                    size="large"
                    disabled={isLoading || selectedSymptoms.length === 0}
                    sx={{
                      py: 2,
                      borderRadius: '50px',
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    دریافت تشخیص
                  </Button>
                </Grid>
              </Grid>
            </form>

            <DiagnosisResult
              isLoading={isLoading}
              error={error}
              result={result}
            />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
