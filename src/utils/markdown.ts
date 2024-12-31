// Utility functions for markdown manipulation
export const insertTextAtCursor = (
  text: string,
  cursorPosition: number,
  insertText: string
): { newText: string; newPosition: number } => {
  const newText = text.slice(0, cursorPosition) + insertText + text.slice(cursorPosition);
  const newPosition = cursorPosition + insertText.length;
  return { newText, newPosition };
};