import {SelectedSymptom} from "../types";

const PROXY_BASE_URL = 'http://localhost:3001/proxy'; // آدرس سرور پروکسی

export async function getDiagnosis(data: {
  symptoms: SelectedSymptom[];
  animalType: string;
  weight: string;
  description: string;
  age: string;
  gender: string;
}) {
  const prompt = `
    حیوان خانگی با مشخصات زیر نیاز به تشخیص پزشکی دارد:
    
    سن: ${data.age} ماه
    نوع حیوان: ${data.animalType} 
     جنسیت حیوان :  ${data.gender} 
     وزن حیوان :${data.weight}
    علائم:
    ${data.symptoms.map((s) => `- ${s.symptomLabel}: ${s.optionLabel}`).join('\n')}
    
    توضیحات اضافی:
    ${data.description}
    
    لطفا موارد زیر را مشخص کنید:
    1. تشخیص احتمالی
    2. توصیه‌های درمانی
    3. اقدامات اضطراری در صورت نیاز 
  `.trim();

  try {
    const response = await fetch(
      `${PROXY_BASE_URL}?${new URLSearchParams({
        text: prompt, // تنها پارامتر text ارسال می‌شود
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

    // بررسی ساختار پاسخ جدید
    if (!responseData.results) {
      throw new Error('پاسخی از سرور پروکسی دریافت نشد');
    }

    return {
      result: responseData.results, // داده‌های جدید از فیلد "results"
      message: responseData.results,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور پروکسی'
    );
  }
}

