import React from 'react';
import { PenSquare } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <PenSquare className="w-6 h-6 text-indigo-600" />
        <h1 className="text-xl font-semibold text-gray-900">Markdown Editor</h1>
      </div>
    </div>
  </header>
);