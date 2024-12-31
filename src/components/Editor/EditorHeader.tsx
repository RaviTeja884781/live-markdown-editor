import React from 'react';
import { FileEdit } from 'lucide-react';

export const EditorHeader: React.FC = () => (
  <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white">
    <FileEdit className="w-5 h-5 text-indigo-600" />
    <h2 className="text-sm font-medium text-gray-700">Editor</h2>
  </div>
);