import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/base16/github.min.css"; 
import type { PreviewProps } from "../../types";
import { marked } from "marked";

export const PreviewContent: React.FC<PreviewProps> = ({ content }) => {
  const htmlContent = marked(content);

  console.log(htmlContent);
  return (
    <div className="flex-1 prose prose-sm max-w-none  p-4 rounded-b-lg overflow-y-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        className={"px-4"}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
