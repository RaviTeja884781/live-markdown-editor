import React from 'react';
import { ToolbarButton } from './ToolbarButton';
import { toolbarItems } from '../../constants/toolbarItems';
import type { ToolbarProps } from '../../types';

export const Toolbar: React.FC<ToolbarProps> = ({ onInsert }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border-b rounded-t-lg border-gray-200">
      {toolbarItems.map((item, index) => (
        <ToolbarButton
          key={index}
          {...item}
          onClick={() => onInsert(item.text)}
        />
      ))}
    </div>
  );
};