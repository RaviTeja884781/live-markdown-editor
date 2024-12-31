import React from 'react';
import { Eye } from 'lucide-react';

export const PreviewHeader: React.FC = () => (
  <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white">
    <Eye className="w-5 h-5 text-indigo-600" />
    <h2 className="text-sm font-medium text-gray-700">Preview</h2>
  </div>
);