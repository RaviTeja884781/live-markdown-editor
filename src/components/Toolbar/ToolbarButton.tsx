import React from 'react';
import type { ToolbarButtonProps } from '../../types';

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({ 
  icon: Icon, 
  text, 
  label, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className="p-1.5 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors"
    title={label}
  >
    <Icon className="w-4 h-4" />
  </button>
);