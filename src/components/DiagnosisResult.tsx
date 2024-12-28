import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';

interface DiagnosisResultProps {
  result?: {
    result?: string;
    message?: string;
  };
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ result }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = result?.result || result?.message || '';

  useEffect(() => {
    if (!fullText) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(typingInterval);
    }, 25);

    return () => clearInterval(typingInterval); // پاک کردن تایمر در هنگام unmount
  }, [fullText]);

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
      <pre>{displayedText}</pre>
    </Paper>
  );
};

export default DiagnosisResult;

