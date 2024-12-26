const API_LICENSE = 'C1b4K8ZUEBAV19f608766091391144ajya';
const CHAT_ID = 'ovfwmhie58zfqzhe38hc5kbrjvmzzilj';
const API_BASE_URL = 'https://haji-api.ir/chatgpt-3.5';

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
    const response = await fetch(`${API_BASE_URL}/?${new URLSearchParams({
      license: API_LICENSE,
      chatId: CHAT_ID,
      text: prompt,
    }).toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`خطا در دریافت پاسخ از سرور: ${response.status}`);
    }

    const responseData = await response.json();

    if (!responseData.ok) {
      throw new Error('پاسخی از سرور دریافت نشد');
    }

    return {
      result: responseData.answer,
      message: responseData.answer,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور');
  }
}