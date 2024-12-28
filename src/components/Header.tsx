import React from 'react';
import { Stethoscope } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Stethoscope className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900">مشاوره پزشکی حیوانات خانگی</h1>
          </div>
          <nav className="flex space-x-4 rtl:space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">خانه</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">درباره ما</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">تماس</a>
          </nav>
        </div>
      </div>
    </header>
  );
}