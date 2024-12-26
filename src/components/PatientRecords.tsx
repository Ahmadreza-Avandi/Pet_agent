import React, { useState } from 'react';

type Record = {
  id: string;
  date: string;
  notes: string;
};

export function PatientRecords() {
  const [records, setRecords] = useState<Record[]>([]);
  const [newNote, setNewNote] = useState('');

  const addRecord = () => {
    if (!newNote.trim()) return;
    
    const newRecord: Record = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('fa-IR'),
      notes: newNote.trim(),
    };

    setRecords(prev => [newRecord, ...prev]);
    setNewNote('');
  };

  const deleteRecord = (id: string) => {
    setRecords(prev => prev.filter(record => record.id !== id));
  };

  return (
    <div className="mt-8 border-t border-orange-200 pt-6">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">سوابق بیمار</h2>
      
      <div className="mb-4">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="یادداشت جدید..."
          className="w-full p-3 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          rows={3}
        />
        <button
          onClick={addRecord}
          className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
        >
          افزودن یادداشت
        </button>
      </div>

      <div className="space-y-4">
        {records.map(record => (
          <div key={record.id} className="bg-orange-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <span className="text-orange-600 text-sm">{record.date}</span>
              <button
                onClick={() => deleteRecord(record.id)}
                className="text-orange-600 hover:text-orange-800"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-gray-800 whitespace-pre-wrap">{record.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}