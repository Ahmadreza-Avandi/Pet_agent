import React from 'react';

type Props = {
  isLoading: boolean;
  error: string | null;
  result: any | null;
};

export function DiagnosisResult({ isLoading, error, result }: Props) {
  if (isLoading) {
    return (
      <div className="mt-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-2 text-orange-800">در حال دریافت تشخیص...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>{error}</p>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-orange-800 mb-4">نتیجه تشخیص</h2>
      <div className="prose prose-orange">
        <pre className="whitespace-pre-wrap text-orange-900 font-vazir">
          {result.result || result.message}
        </pre>
      </div>
    </div>
  );
}