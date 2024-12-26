export type Symptom = {
  id: string;
  label: string;
  options: {
    id: string;
    label: string;
  }[];
};

export const symptoms: Symptom[] = [
  {
    id: 'general',
    label: 'علائم عمومی',
    options: [
      { id: 'lethargy', label: 'خستگی و بی‌حالی' },
      { id: 'activity', label: 'تغییر در سطح فعالیت (کاهش یا افزایش)' },
      { id: 'appetite', label: 'تغییر در اشتها (بی‌اشتهایی یا پرخوری)' },
      { id: 'weight', label: 'کاهش یا افزایش غیرطبیعی وزن' },
    ],
  },
  {
    id: 'oral',
    label: 'علائم دهانی',
    options: [
      { id: 'drooling', label: 'آبریزش دهان' },
      { id: 'bad-breath', label: 'بوی بد دهان' },
      { id: 'gum-problems', label: 'مشکلات لثه' },
    ],
  },
  {
    id: 'respiratory',
    label: 'علائم تنفسی',
    options: [
      { id: 'coughing', label: 'سرفه' },
      { id: 'sneezing', label: 'عطسه' },
      { id: 'breathing', label: 'مشکل در تنفس' },
    ],
  },
];