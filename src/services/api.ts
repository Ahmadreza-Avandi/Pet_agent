import { SelectedSymptom } from "../types";

const PROXY_BASE_URL = 'https://mine-gpt-alpha.vercel.app/proxy';

export async function getDiagnosis(data: {
  symptoms: SelectedSymptom[];
  animalType: string;
  weight: string;
  description: string;
  age: string;
  gender: string;
}) {
  const prompt = `
شما یک دامپزشک متخصص هستید که باید با استفاده از اطلاعات زیر تشخیص پزشکی بدهید و راهنمایی درمانی ارائه دهید:

- سن حیوان: ${data.age} ماه
- نوع حیوان: ${data.animalType} 
- جنسیت: ${data.gender} 
- وزن: ${data.weight}
- علائم اصلی:
${data.symptoms.map((s) => `  * ${s.symptomLabel}: ${s.optionLabel}`).join('\n')}

- توضیحات اضافی: ${data.description}

وظایف شما:
1. ارائه تشخیص‌های احتمالی با دلایل پزشکی دقیق، با توجه به علائم و وضعیت فعلی حداقل 3 تا نام ببر علاعم اصلی اون بیماری رو بگو.
2. بررسی ارتباط علائم با بیماری‌های احتمالی خاص (مثلاً مشکلات دهانی، قلبی، تنفسی و ...).
3. مشخص کردن روش‌های تشخیصی تکمیلی (مانند آزمایش‌های خون، تصویربرداری یا تست‌های خاص دیگر).
4. پیشنهاد اقدامات درمانی شامل داروها، تغذیه و راهکارهای حمایتی بر اساس نوع بیماری.
5. ذکر اقدامات اضطراری که ممکن است مورد نیاز باشد.

لطفاً به‌طور شفاف، مختصر و دقیق پاسخ دهید و توجه کنید که تشخیص‌ها باید بر اساس علائم ارائه‌شده انجام شوند.  
`.trim();

  try {
    const response = await fetch(
      `${PROXY_BASE_URL}?${new URLSearchParams({
        text: prompt,
      }).toString()}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`خطا در دریافت پاسخ از سرور پروکسی: ${response.status}`);
    }

    const responseData = await response.json();

    if (!responseData.results) {
      throw new Error('پاسخی از سرور پروکسی دریافت نشد');
    }

    return {
      result: responseData.results,
      message: responseData.results,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور پروکسی'
    );
  }
}