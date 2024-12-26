const PROXY_BASE_URL = 'https://mine-gpt-alpha.vercel.app/proxy'; // آدرس سرور پروکسی

export async function getDiagnosis(data: {
  age: string;
  animalType: string;
  symptoms: { symptomLabel: string; optionLabel: string }[];
  description: string;
}) {
  const prompt = `
    حیوان خانگی با مشخصات زیر نیاز به تشخیص پزشکی دارد:
    
    سن: ${data.age} ماه
    نوع حیوان: ${data.animalType}
    
    علائم:
    ${data.symptoms.map(s => `- ${s.symptomLabel}: ${s.optionLabel}`).join('\n')}
    
    توضیحات اضافی:
    ${data.description}
    
    لطفا موارد زیر را مشخص کنید:
    1. تشخیص احتمالی
    2. توصیه‌های درمانی
    3. اقدامات اضطراری در صورت نیاز
  `.trim();

  try {
    const response = await fetch(`${PROXY_BASE_URL}?${new URLSearchParams({
      license: "C1b4K8ZUEBAV19f608766091391144ajya",
      chatId: "ovfwmhie58zfqzhe38hc5kbrjvmzzilj",
      text: prompt,
    }).toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`خطا در دریافت پاسخ از سرور پروکسی: ${response.status}`);
    }

    const responseData = await response.json();

    if (!responseData.ok) {
      throw new Error('پاسخی از سرور پروکسی دریافت نشد');
    }

    return {
      result: responseData.answer,
      message: responseData.answer,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور پروکسی');
  }
}
