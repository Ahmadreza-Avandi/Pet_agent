// src/data/symptoms.ts
export type Symptom = {
    id: string;
    label: string;
    options: {
        id: string;
        label: string;
    }[];
    animalTypes: string[];
};

export const symptoms: Symptom[] = [
    {
        id: 'general',
        label: 'علائم عمومی و سیستمیک',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش', 'ماهی', 'طیور زینتی', 'طیور صنعتی'],
        options: [
            {id: 'lethargy', label: 'بی‌حالی و خستگی'},
            {id: 'activity', label: 'کاهش یا افزایش فعالیت'},
            {id: 'appetite', label: 'تغییر اشتها (بی‌اشتهایی یا پرخوری)'},
            {id: 'weight', label: 'کاهش یا افزایش غیرطبیعی وزن'},
            {id: 'fever', label: 'تب (دمای بالای 39.2 درجه سانتی‌گراد)'},
            {id: 'tremor', label: 'لرزش یا لرز غیرطبیعی'},
            {id: 'sleep', label: 'خواب‌آلودگی غیرطبیعی یا بی‌خوابی'},
            {id: 'pain', label: 'درد عمومی بدن یا حساسیت به لمس'},
            {id: 'cry', label: 'ناله یا گریه بدون دلیل'},
            {id: 'thirst', label: 'افزایش یا کاهش مصرف آب (پلی‌دیپسی یا الیگودیپسی)'},
            {id: 'weakness', label: 'ضعف عمومی یا کاهش استقامت بدنی'},
            {id: 'pale', label: 'رنگ‌پریدگی یا زردی غشاهای مخاطی'},
            {id: 'swelling', label: 'تورم عمومی یا موضعی بدن'},
        ],
    },
    {
        id: 'behavioral',
        label: 'علائم رفتاری',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش', 'طیور زینتی', 'طیور صنعتی', 'ماهی'],
        options: [
            {id: 'aggression', label: 'پرخاشگری غیرطبیعی'},
            {id: 'anxiety', label: 'اضطراب یا استرس'},
            {id: 'depression', label: 'افسردگی یا کاهش تمایل به بازی'},
            {id: 'excessive-licking', label: 'لیسیدن بیش از حد بدن'},
            {id: 'compulsive-behavior', label: 'رفتارهای اجباری یا تکراری'},
            {id: 'destructive-behavior', label: 'تخریب اجسام یا محیط'},
            {id: 'urine-marking', label: 'علامت‌گذاری ادراری (ویژه در سگ‌ها و گربه‌ها)'},
            {id: 'excessive-barking', label: 'پارازدن بیش از حد (ویژه در سگ‌ها)'},
            {id: 'self-mutilation', label: 'آسیب رساندن به خود یا جویدن بدن'},
            {id: 'hyperactivity', label: 'فعالیت زیاد یا بیش از حد'},
        ],
    },
    {
        id: 'musculoskeletal',
        label: 'علائم اسکلتی-عضلانی',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش'],
        options: [
            {id: 'limping', label: 'لنگش یا اشکال در راه رفتن'},
            {id: 'joint-swelling', label: 'تورم مفاصل'},
            {id: 'stiffness', label: 'سفتی یا خشکی مفاصل'},
            {id: 'muscle-wasting', label: 'اتروفی یا تحلیل عضلانی'},
            {id: 'painful-movements', label: 'حرکات دردناک یا مشکل در حرکت'},
            {id: 'difficulty-standing', label: 'مشکل در ایستادن یا تعادل'},
            {id: 'back-pain', label: 'درد پشت یا ستون فقرات'},
            {id: 'fractures', label: 'شکستگی یا آسیب استخوان‌ها'},
            {id: 'muscle-tremors', label: 'لرزش عضلانی غیرطبیعی'},
            {id: 'abnormal-gait', label: 'راه رفتن غیرعادی یا شل'},
        ],
    },

    {
        id: 'neurological',
        label: 'علائم عصبی',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش'],
        options: [
            {id: 'seizures', label: 'تشنج یا حمله‌های عصبی'},
            {id: 'disorientation', label: 'اختلال در جهت‌یابی یا گیجی'},
            {id: 'head-tilting', label: 'چرخش یا انحراف سر'},
            {id: 'paralysis', label: 'فلج یا اختلال در حرکت اعضا'},
            {id: 'tremors', label: 'لرزش‌های غیرطبیعی'},
            {id: 'loss-of-coordination', label: 'از دست دادن هماهنگی حرکتی'},
            {id: 'loss-of-balance', label: 'اختلال در حفظ تعادل'},
            {id: 'blindness', label: 'نابینایی یا کاهش دید'},
            {id: 'hyperesthesia', label: 'افزایش حساسیت به لمس'},
            {id: 'hypoactivity', label: 'کاهش فعالیت یا بی‌حالی'},
        ],
    },

    {
        id: 'urinary-reproductive',
        label: 'علائم دستگاه ادراری و تناسلی',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش'],
        options: [
            {id: 'frequent-urination', label: 'ادرار مکرر'},
            {id: 'straining-to-urinate', label: 'تلاش برای ادرار کردن (بی‌نتیجه)'},
            {id: 'bloody-urine', label: 'ادرار خونی'},
            {id: 'incontinence', label: 'بی‌اختیاری ادرار'},
            {id: 'urine-smell', label: 'بوی غیرطبیعی ادرار'},
            {id: 'swollen-genitals', label: 'تورم دستگاه تناسلی'},
            {id: 'vaginal-discharge', label: 'ترشحات غیرطبیعی واژن'},
            {id: 'painful-urination', label: 'درد هنگام ادرار کردن'},
            {id: 'decreased-urine-output', label: 'کاهش مقدار ادرار'},
            {id: 'breast-swelling', label: 'تورم یا درد سینه‌ها (در حیوانات ماده)'},
        ],
    },

    {
        id: 'ear',
        label: 'علائم گوش',
        animalTypes: ['سگ', 'گربه', 'اسب'],
        options: [
            {id: 'ear-infection', label: 'عفونت گوش (علائم شامل بو و ترشح)'},
            {id: 'ear-scratching', label: 'خاراندن یا مالیدن گوش'},
            {id: 'discharge', label: 'ترشحات غیرطبیعی از گوش'},
            {id: 'shaking-head', label: 'تکان دادن سر یا گوش به شدت'},
            {id: 'balance-issues', label: 'اختلالات تعادلی به دلیل مشکلات گوش'},
            {id: 'hearing-loss', label: 'کاهش شنوایی یا ناشنوایی'},
            {id: 'ear-odor', label: 'بوی بد از گوش'},
            {id: 'redness', label: 'قرمزی یا التهاب گوش'},
            {id: 'swelling', label: 'تورم گوش'},
            {id: 'painful-ears', label: 'درد یا حساسیت به لمس گوش'},
        ],
    },
    {
        id: 'eye',
        label: 'علائم چشمی',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو', 'خرگوش'],
        options: [
            {id: 'redness', label: 'قرمزی یا التهاب چشم'},
            {id: 'discharge', label: 'ترشحات چشم (شامل چسبندگی یا مایعات غلیظ)'},
            {id: 'swelling', label: 'تورم اطراف چشم'},
            {id: 'squinting', label: 'چشمک زدن یا بسته شدن چشم'},
            {id: 'cloudy-eyes', label: 'چشمان ابری یا کدر'},
            {id: 'blindness', label: 'نابینایی یا کاهش دید'},
            {id: 'excessive-tearing', label: 'ریزش اشک غیرطبیعی'},
            {id: 'pupil-changes', label: 'تغییرات در اندازه مردمک چشم'},
            {id: 'bulging-eyes', label: 'برجستگی یا بیرون‌زدگی چشم'},
            {id: 'painful-eyes', label: 'درد یا حساسیت به نور'},
        ],
    },
    {
        id: 'skin',
        label: 'علائم پوستی و پوششی',
        animalTypes: ['سگ', 'گربه', 'خرگوش', 'اسب'],
        options: [
            {id: 'hair-loss', label: 'ریزش مو به‌صورت تکه‌ای یا گسترده'},
            {id: 'redness', label: 'قرمزی یا التهاب گسترده پوست'},
            {id: 'itching', label: 'خارش مداوم یا جویدن پوست'},
            {id: 'wounds', label: 'زخم‌های باز، دلمه‌دار یا پوسته‌پوسته'},
            {id: 'swelling', label: 'تورم یا برآمدگی‌های پوستی'},
            {id: 'foul-smell', label: 'بوی بد پوست یا تغییر بوی بدن'},
            {id: 'scabs', label: 'زخم‌های خشک یا دلمه‌ای'},
            {id: 'rashes', label: 'جوش‌ها یا لکه‌های قرمز'},
            {id: 'lesions', label: 'زخم‌ها یا ضایعات پوستی'},
            {id: 'blisters', label: 'تاول‌های آب‌دار یا ضایعات پوستی'},
        ],
    },
    {
        id: 'cardiovascular',
        label: 'علائم قلبی-عروقی',
        animalTypes: ['سگ', 'گربه', 'اسب', 'گاو'],
        options: [
            {id: 'rapid-heartbeat', label: 'ضربان قلب سریع یا نامنظم'},
            {id: 'heart-murmur', label: 'صدای اضافی قلب (سوءظن به بیماری قلبی)'},
            {id: 'weak-pulse', label: 'نبض ضعیف یا نامشخص'},
            {id: 'breathing-difficulties', label: 'مشکل در تنفس'},
            {id: 'swelling-in-legs', label: 'تورم در پاها (احتباس مایعات)'},
            {id: 'blue-gums', label: 'لثه‌های آبی یا کم‌رنگ (نشان‌دهنده مشکلات قلبی یا تنفسی)'},
            {id: 'fatigue', label: 'بی‌حالی یا خستگی مفرط'},
            {id: 'fainting', label: 'غش یا بیهوشی'},
            {id: 'exercise-intolerance', label: 'ناتوانی در انجام فعالیت‌های بدنی'},
            {id: 'chest-pain', label: 'درد قفسه سینه یا تنگی نفس'},
        ],
    },
    {
        id: 'birds',
        label: 'علائم اختصاصی طیور',
        animalTypes: ['طیور زینتی', 'طیور صنعتی'],
        options: [
            {id: 'feather-loss', label: 'ریزش پرها یا تغییر کیفیت پرها'},
            {id: 'beak-discharge', label: 'ترشحات از منقار'},
            {id: 'leg-weakness', label: 'ضعف پاها یا ناتوانی در راه رفتن'},
            {id: 'egg-issues', label: 'مشکلات تخم‌گذاری (مانند تخم‌های غیرطبیعی)'},
            {id: 'lethargy-birds', label: 'بی‌حالی یا کاهش فعالیت'},
            {id: 'respiratory-noise', label: 'صداهای تنفسی غیرطبیعی (خس‌خس، سرفه)'},
            {id: 'nasal-discharge', label: 'ترشحات بینی (شفاف، غلیظ، خونی یا چرکی)'},
            {id: 'coughing', label: 'سرفه یا نشانه‌های بیماری تنفسی'},
            {id: 'diarrhea', label: 'اسهال (آبکی، خونی یا سبز رنگ)'},
            {id: 'swollen-wattle', label: 'تورم در قسمت زیر گردن (واستل)'},
            {id: 'abnormal-eggs', label: 'تخم‌گذاری غیرطبیعی (تخم‌های شکسته یا کوچکتر از حد معمول)'},
            {id: 'weakness-in-flight', label: 'ضعف در پرواز یا افت عملکرد پرنده'},
            {id: 'dehydration', label: 'کم‌آبی بدن (علائم شامل خشکی پوست و منقار)'},
            {id: 'clubbing-toes', label: 'تورم یا تغییر شکل انگشتان پا'},
            {id: 'change-in-behavior', label: 'تغییر رفتار یا پرخاشگری'},
        ],
    },
    {
        id: 'fish',
        label: 'علائم اختصاصی ماهی',
        animalTypes: ['ماهی'],
        options: [
            {id: 'swim-bladder', label: 'مشکلات شنا (مانند شناور شدن در سطح یا غرق شدن)'},
            {id: 'fin-rot', label: 'پوسیدگی باله‌ها'},
            {id: 'white-spots', label: 'لکه‌های سفید روی بدن یا باله‌ها'},
            {id: 'gill-movement', label: 'حرکت غیرطبیعی آبشش‌ها (بیش از حد سریع یا کند)'},
            {id: 'color-change', label: 'تغییر رنگ بدن (به ویژه رنگ پریدگی یا تیره شدن)'},
            {id: 'abnormal-breathing', label: 'تنفس سریع یا سطحی (تنفس غیرطبیعی)'},
            {id: 'bloody-fin', label: 'خونریزی یا زخم در باله‌ها'},
            {id: 'clamped-fins', label: 'باله‌های جمع شده یا بسته'},
            {id: 'skin-ulcers', label: 'زخم‌های پوستی یا زخم‌های باز'},
            {id: 'excessive-slime', label: 'لایه بیش از حد مخاط یا لجن روی بدن'},
            {id: 'strange-swimming-pattern', label: 'الگوهای شنا غیرطبیعی (چرخیدن یا شنا کردن در دایره)'},
            {id: 'decreased-appetite', label: 'کاهش اشتها یا عدم تغذیه'},
            {id: 'swollen-abdomen', label: 'تورم شکم (مربوط به تجمع مایعات یا عفونت)'},
            {id: 'red-gills', label: 'قرمزی غیرطبیعی آبشش‌ها (نشان‌دهنده بیماری یا آلودگی)'},
            {id: 'abnormal-excretion', label: 'ترشحات غیرطبیعی (مدفوع شفاف، چسبناک یا گلی)'},
        ],
    }


];
