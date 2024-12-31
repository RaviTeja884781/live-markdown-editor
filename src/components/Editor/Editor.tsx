import React from 'react';
import { EditorHeader } from './EditorHeader';
import { EditorTextarea } from './EditorTextarea';
import type { EditorProps } from '../../types';

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-full flex flex-col">
      <EditorHeader />
      <div className='overflow-auto'>

      <EditorTextarea value={value} onChange={onChange} />
      </div>
    </div>
  );
};