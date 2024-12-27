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
    label: 'علائم عمومی و سیستمیک',
    options: [
      { id: 'lethargy', label: 'بی‌حالی و خستگی' },
      { id: 'activity', label: 'کاهش یا افزایش فعالیت' },
      { id: 'appetite', label: 'تغییر اشتها (بی‌اشتهایی یا پرخوری)' },
      { id: 'weight', label: 'کاهش یا افزایش غیرطبیعی وزن' },
      { id: 'fever', label: 'تب (دمای بالای 39.2 درجه سانتی‌گراد)' },
      { id: 'shivering', label: 'لرزش یا لرز غیرطبیعی' },
      { id: 'sweating', label: 'تعریق (ناحیه پنجه یا بینی)' },
      { id: 'sleep', label: 'خواب‌آلودگی غیرطبیعی یا بی‌خوابی' },
      { id: 'pain', label: 'درد عمومی بدن یا حساسیت به لمس' },
      { id: 'crying', label: 'ناله یا گریه بدون دلیل' },
      { id: 'water-intake', label: 'افزایش یا کاهش مصرف آب (پلی‌دیپسی یا الیگودیپسی)' },
      { id: 'weakness', label: 'ضعف عمومی یا کاهش استقامت بدنی' },
      { id: 'pale-mucous', label: 'رنگ‌پریدگی یا زردی غشاهای مخاطی' },
    ],
  },
  {
    id: 'oral',
    label: 'علائم دهانی، حلق و دستگاه گوارش',
    options: [
      { id: 'bad-breath', label: 'بوی بد دهان (هالیتوزیس)' },
      { id: 'ulcers', label: 'زخم یا التهاب دهان' },
      { id: 'swollen-tongue', label: 'تورم زبان یا تغییر رنگ آن' },
      { id: 'salivation', label: 'افزایش بزاق (هیپرسالیواسیون)' },
      { id: 'swallowing-pain', label: 'سختی یا درد هنگام بلع' },
      { id: 'licking-lips', label: 'لیسیدن مداوم لب‌ها' },
      { id: 'vomiting', label: 'استفراغ (غذایی، خونی، زرد، یا کف‌آلود)' },
      { id: 'bloat', label: 'نفخ شکم یا اتساع حاد شکم' },
      { id: 'diarrhea', label: 'اسهال (آبکی، خونی، چرب، یا همراه با مخاط)' },
      { id: 'constipation', label: 'یبوست یا تلاش برای دفع بی‌نتیجه' },
      { id: 'abnormal-feces', label: 'مدفوع غیرطبیعی (تیره، زرد، یا خاکستری)' },
      { id: 'abdominal-pain', label: 'درد شکم (حساسیت به لمس شکم)' },
      { id: 'borborygmi', label: 'بوربوریگموس (صدای غیرطبیعی از شکم)' },
      { id: 'parasites-in-feces', label: 'دفع انگل یا اجسام غیرمعمول در مدفوع' },
    ],
  },
  {
    id: 'respiratory',
    label: 'علائم تنفسی',
    options: [
      { id: 'coughing', label: 'سرفه خشک، مرطوب، خونی یا خشن' },
      { id: 'sneezing', label: 'عطسه‌های مکرر' },
      { id: 'wheezing', label: 'خس‌خس در هنگام تنفس' },
      { id: 'snoring', label: 'خرخر یا صدای غیرطبیعی دیگر هنگام تنفس' },
      { id: 'tachypnea', label: 'تنفس سریع یا سطحی (تاکی‌پنه)' },
      { id: 'dyspnea', label: 'تنفس سخت یا دیسترس تنفسی' },
      { id: 'cyanosis', label: 'کبودی زبان، لثه‌ها یا غشاهای مخاطی (سیانوز)' },
      { id: 'open-mouth-breathing', label: 'باز کردن دهان برای تنفس' },
      { id: 'nasal-discharge', label: 'ترشحات بینی (شفاف، غلیظ، خونی یا چرکی)' },
      { id: 'abnormal-chest', label: 'حرکات غیرطبیعی قفسه سینه هنگام تنفس' },
    ],
  },
  {
    id: 'cardiovascular',
    label: 'علائم قلبی-عروقی',
    options: [
      { id: 'arrhythmia', label: 'ضربان قلب نامنظم (آریتمی)' },
      { id: 'tachycardia', label: 'ضربان قلب سریع یا کند' },
      { id: 'heart-murmur', label: 'صدای غیرطبیعی قلب (سوفل قلبی)' },
      { id: 'pale-gums', label: 'رنگ‌پریدگی لثه‌ها و زبان' },
      { id: 'syncope', label: 'غش یا از دست دادن هوشیاری (سنکوپ)' },
      { id: 'ascites', label: 'تجمع مایعات در شکم (آسیت)' },
      { id: 'edema', label: 'ورم پاها یا اندام‌ها' },
      { id: 'fatigue', label: 'خستگی سریع و عدم تحمل ورزش' },
      { id: 'bruising', label: 'کبودی یا خونریزی‌های زیرپوستی' },
    ],
  },
  {
    id: 'skin',
    label: 'علائم پوستی و پوششی',
    options: [
      { id: 'itching', label: 'خارش مداوم یا جویدن پوست' },
      { id: 'hair-loss', label: 'ریزش مو به‌صورت تکه‌ای یا گسترده' },
      { id: 'skin-change', label: 'تغییر در بافت یا رنگ پوست' },
      { id: 'wounds', label: 'زخم‌های باز، دلمه‌دار یا پوسته‌پوسته' },
      { id: 'discharge', label: 'ترشحات چرکی، خون‌آلود یا شفاف از پوست' },
      { id: 'redness', label: 'قرمزی یا التهاب گسترده پوست' },
      { id: 'swelling', label: 'تورم موضعی یا کلی پوست' },
      { id: 'lumps', label: 'توده‌های زیرپوستی (با یا بدون درد)' },
      { id: 'dry-skin', label: 'خشکی یا پوسته‌ریزی شدید پوست' },
      { id: 'bad-smell', label: 'بوی بد پوست یا تغییر بوی بدن' },
    ],
  },
  {
    id: 'eyes',
    label: 'علائم چشمی',
    options: [
      { id: 'red-eye', label: 'قرمزی چشم یا التهاب ملتحمه' },
      { id: 'discharge-eye', label: 'خروج ترشحات آبکی، چرکی یا خونی' },
      { id: 'excessive-tearing', label: 'اشک‌ریزی بیش‌ازحد یا خشکی چشم' },
      { id: 'pupil-change', label: 'تغییر در رنگ یا اندازه مردمک‌ها' },
      { id: 'cornea-opacity', label: 'کدر شدن قرنیه یا شفافیت چشم' },
      { id: 'vision-loss', label: 'از دست دادن بینایی یا کاهش پاسخ به نور' },
      { id: 'nystagmus', label: 'حرکات غیرطبیعی چشم (نیستاگموس)' },
      { id: 'swelling-eyelids', label: 'التهاب پلک‌ها یا تورم آنها' },
      { id: 'exophthalmos', label: 'بیرون‌زدگی چشم (اگزوفتالموس)' },
      { id: 'abnormal-eye', label: 'چرخش غیرطبیعی چشم‌ها' },
    ],
  },
  {
    id: 'ears',
    label: 'علائم گوش',
    options: [
      { id: 'ear-itching', label: 'خارش شدید گوش' },
      { id: 'ear-discharge', label: 'ترشحات گوش (شفاف، خونی یا غلیظ)' },
      { id: 'ear-smell', label: 'بوهای نامطبوع از گوش' },
      { id: 'ear-inflammation', label: 'قرمزی، التهاب یا تورم مجرای گوش' },
      { id: 'hearing-loss', label: 'کاهش شنوایی یا ناشنوایی' },
      { id: 'head-tilt', label: 'کج کردن سر به یک سمت' },
      { id: 'ear-pain', label: 'درد هنگام لمس گوش' },
    ],
  },
  {
    id: 'urinary-genital',
    label: 'علائم دستگاه ادراری و تناسلی',
    options: [
      { id: 'frequent-urination', label: 'تکرر ادرار یا کاهش آن' },
      { id: 'incontinence', label: 'بی‌اختیاری ادرار یا چکه کردن مداوم' },
      { id: 'urination-pain', label: 'دشواری در ادرار یا درد هنگام دفع' },
      { id: 'abnormal-urine', label: 'ادرار خونی، کدر یا با بوی غیرطبیعی' },
      { id: 'genital-swelling', label: 'تورم ناحیه تناسلی' },
      { id: 'genital-discharge', label: 'ترشحات غیرطبیعی از واژن یا آلت تناسلی' },
      { id: 'testicular-inflammation', label: 'التهاب بیضه‌ها یا ناحیه تناسلی' },
      { id: 'estrous-cycle-change', label: 'تغییر در چرخه فحلی (در سگ‌های ماده)' },
      { id: 'abdominal-pain-kidney', label: 'درد شکمی در ناحیه کلیه‌ها یا مثانه' },
    ],
  },
  {
    id: 'neurological',
    label: 'علائم عصبی',
    options: [
      { id: 'tremors', label: 'لرزش غیرطبیعی یا مداوم' },
      { id: 'seizures', label: 'تشنج‌های ناگهانی یا مکرر' },
      { id: 'paralysis', label: 'فلجی یا ضعف در اندام‌ها' },
      { id: 'ataxia', label: 'از دست دادن تعادل (آتاکسی)' },
      { id: 'behavior-changes', label: 'تغییرات ناگهانی در رفتار (پرخاشگری، ترس)' },
      { id: 'headache', label: 'سردرد (فشار دادن سر به دیوار)' },
      { id: 'abnormal-movements', label: 'حرکات غیرطبیعی بدن (چرخیدن، راه رفتن دایره‌ای)' },
      { id: 'blindness', label: 'کوری ناگهانی' },
      { id: 'falling', label: 'افتادن ناگهانی یا عدم توانایی در ایستادن' },
    ],
  },
  {
    id: 'musculoskeletal',
    label: 'علائم اسکلتی-عضلانی',
    options: [
      { id: 'limb-pain', label: 'درد در اندام‌ها یا مفاصل' },
      { id: 'lameness', label: 'لنگیدن یا ناتوانی در حرکت' },
      { id: 'joint-swelling', label: 'تورم یا التهاب مفاصل' },
      { id: 'stiffness', label: 'سفتی یا خشکی در حرکت' },
      { id: 'muscle-weakness', label: 'ضعف عمومی عضلات' },
      { id: 'bone-fracture', label: 'شکستگی یا تغییر شکل استخوان‌ها' },
    ],
  },
  {
    id: 'behavioral',
    label: 'علائم رفتاری',
    options: [
      { id: 'aggression', label: 'افزایش پرخاشگری' },
      { id: 'behavioral-changes', label: 'تغییرات ناگهانی در عادات رفتاری' },
      { id: 'hiding', label: 'پنهان شدن یا انزوای اجتماعی' },
      { id: 'anxiety', label: 'اضطراب شدید یا استرس' },
      { id: 'over-grooming', label: 'لیسیدن یا جویدن بیش‌ازحد بدن' },
    ],
  },
  {
    id: 'specific-diseases',
    label: 'علائم اختصاصی بیماری‌های خاص',
    options: [
      { id: 'jaundice', label: 'زرد شدن پوست یا غشاهای مخاطی (یرقان)' },
      { id: 'bleeding', label: 'خونریزی خودبه‌خودی از لثه‌ها یا بینی' },
      { id: 'parasites', label: 'وجود انگل در مدفوع یا استفراغ' },
      { id: 'lymphadenopathy', label: 'تورم غدد لنفاوی' },
      { id: 'immunosuppression', label: 'کاهش ایمنی بدن و افزایش عفونت‌ها' },
    ],
  },
];
