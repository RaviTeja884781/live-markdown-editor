import { useRef, useEffect, forwardRef } from "react";
import type { EditorProps } from "../../types";
import { useMergedRef } from "./useMergedRef";

export const EditorTextarea = forwardRef<HTMLTextAreaElement, EditorProps>(
  ({ value, onChange, ...rest }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const mergedRef = useMergedRef(ref, textareaRef);
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value]);

    return (
      <textarea
        ref={mergedRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 w-full p-4 font-mono text-sm bg-gray-50 rounded-b-lg resize-none focus:outline-none"
        placeholder="Write your markdown here..."
        {...rest}
      />
    );
  }
);

EditorTextarea.displayName = "EditorTextarea";
