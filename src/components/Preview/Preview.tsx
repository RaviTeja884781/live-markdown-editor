import React from 'react';
import { PreviewHeader } from './PreviewHeader';
import { PreviewContent } from './PreviewContent';
import type { PreviewProps } from '../../types';

export const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <div className="h-full flex flex-col">
      <PreviewHeader />
      <PreviewContent content={content} />
    </div>
  );
};