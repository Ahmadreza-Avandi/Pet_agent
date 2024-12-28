import React from 'react';
import { Paper, Typography } from '@mui/material';

interface DiagnosisResultProps {
  result?: {
    result?: string;
    message?: string;
  };
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ result }) => {
  if (!result) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        bgcolor: 'orange.50',
        borderRadius: 2,
        '& pre': {
          whiteSpace: 'pre-wrap',
          fontFamily: 'inherit',
          fontSize: '1rem',
          color: 'text.primary',
          margin: 0,
          textAlign: 'right',
          direction: 'rtl',
        },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="warning.dark"
        fontWeight="bold"
        sx={{ textAlign: 'right' }}
      >
        نتیجه تشخیص
      </Typography>
      <pre>{result.result || result.message}</pre>
    </Paper>
  );
};

export default DiagnosisResult;
