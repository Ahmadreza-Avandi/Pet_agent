import { SelectedSymptom } from "../types";

const PROXY_BASE_URL = 'https://irandvm.ir/proxy'; // آدرس سرور پروکسی

export interface DiagnosisResponse {
    result: string;
    message: string;
}

export async function getDiagnosis(data: {
    symptoms: SelectedSymptom[];
    animalType: string;
    weight: string;
    description: string;
    age: string;
    gender: string;
    labTests?: string; // اضافه کردن فیلد labTests
}): Promise<DiagnosisResponse> {
    const prompt = `
شما یک دامپزشک متخصص با تجربه بالا هستید. با استفاده از اطلاعات زیر، تشخیص پزشکی دقیق بدهید و یک برنامه درمانی جامع ارائه دهید:

- **سن حیوان:** ${data.age} ماه
- **نوع حیوان:** ${data.animalType} 
- **جنسیت:** ${data.gender} 
- **وزن:** ${data.weight}
- **علائم اصلی:**
${data.symptoms.map((s) => `  * ${s.symptomLabel}: ${s.optionLabel}`).join('\n')}
- **توضیحات اضافی:** ${data.description}

${data.labTests ? `- **آزمایش‌ها:** ${data.labTests}` : ''}

### وظایف شما:
1. **تشخیص‌های احتمالی:** 
   - حداقل ۳ بیماری احتمالی با جزئیات دقیق و دلایل علمی ذکر کنید.
   - برای هر بیماری، علائم اصلی و چگونگی ارتباط آن‌ها را توضیح دهید.
   
2. **روش‌های تشخیصی تکمیلی:**
   - لیستی از آزمایش‌های دقیق مورد نیاز (خون، ادرار، تصویربرداری) با دلایل آن‌ها ارائه دهید.

3. **برنامه درمانی:**
   - داروهای لازم را با دوز دقیق بر اساس وزن و سن حیوان پیشنهاد دهید.
   - نحوه مصرف دارو (خوراکی، تزریقی و ...) و زمان‌بندی مصرف را ذکر کنید.
   - در صورت نیاز، **سرم‌تراپی** مناسب را با نوع سرم و مقدار مشخص پیشنهاد دهید.

4. **اقدامات حمایتی و پیشگیرانه:**
   - تغییرات تغذیه‌ای یا محیطی که ممکن است به درمان کمک کند.
   - پیشنهاداتی برای پیشگیری از بیماری‌های مشابه در آینده.

### لطفاً پاسخ را به‌طور دقیق، شفاف و علمی ارائه دهید.
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
            result: responseData.results,
            message: responseData.results,
        };
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور پروکسی'
        );
    }
} 

