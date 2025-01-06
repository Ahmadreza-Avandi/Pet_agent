import React, { useState } from 'react';

// نمونه‌ی علائم شما
import { symptoms } from './data/symptoms';

const SymptomsComponent = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isGeneralVisible, setIsGeneralVisible] = useState<boolean>(false);

  const handleSelectSymptom = (symptomId: string, isGeneral: boolean) => {
    setSelectedSymptoms((prevSelected) => {
      if (prevSelected.includes(symptomId)) {
        // اگر قبلاً انتخاب شده بود، آن را حذف می‌کنیم
        return prevSelected.filter(id => id !== symptomId);
      }
      // در غیر اینصورت، آن را به لیست اضافه می‌کنیم
      return [...prevSelected, symptomId];
    });

    // اگر علائم عمومی انتخاب شده باشد، آن را نمایش می‌دهیم
    if (isGeneral) {
      setIsGeneralVisible(true);
    }
  };

  const handleToggleGeneral = () => {
    setIsGeneralVisible(prev => !prev);
  };

  return (
    <div>
      {/* علائم عمومی و سیستمیک فقط وقتی که کاربر یک علامت را انتخاب کرد نمایش داده می‌شود */}
      {isGeneralVisible && (
        <div>
          <h3>علائم عمومی و سیستمیک</h3>
          {symptoms.find(symptom => symptom.id === 'general')?.options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(option.id)}
                onChange={() => handleSelectSymptom(option.id, true)}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      )}

      {/* سایر علائم اختصاصی نمایش داده می‌شود */}
      {symptoms.filter(symptom => symptom.id !== 'general').map((symptom) => (
        <div key={symptom.id}>
          <h3>{symptom.label}</h3>
          {symptom.options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(option.id)}
                onChange={() => handleSelectSymptom(option.id, symptom.id === 'general')}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      ))}

      {/* دکمه برای جابجایی علائم عمومی و سیستمیک */}
      {isGeneralVisible && (
        <button onClick={handleToggleGeneral}>
          بستن علائم عمومی و سیستمیک
        </button>
      )}
    </div>
  );
};

export default SymptomsComponent;


