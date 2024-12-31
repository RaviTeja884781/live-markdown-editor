// Common interfaces used across components
export interface ToolbarItem {
  icon: React.FC<{ className?: string }>;
  text: string;
  label: string;
}

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onScroll: () => void;
}

export interface PreviewProps {
  content: string;
}

export interface ToolbarProps {
  onInsert: (text: string) => void;
}

export interface ToolbarButtonProps extends ToolbarItem {
  onClick: () => void;
}
