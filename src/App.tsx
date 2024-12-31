import { useState, useRef, useCallback } from "react";
import { Editor } from "./components/Editor/Editor";
import { Preview } from "./components/Preview/Preview";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { Header } from "./components/Header/Header";
import { initialMarkdown } from "./constants/editorDefaults";

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Refs for Editor and Preview scroll containers
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleToolbarInsert = useCallback((text: string) => {
    setMarkdown((prev) => prev + text);
  }, []);

  // Sync scroll handler
  const handleScroll = (source: "editor" | "preview") => {
    const editor = editorRef.current;
    const preview = previewRef.current;

    if (!editor || !preview) return;

    if (source === "editor") {
      // Calculate preview scroll based on editor scroll
      const ratio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
      preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight);
    } else if (source === "preview") {
      // Calculate editor scroll based on preview scroll
      const ratio = preview.scrollTop / (preview.scrollHeight - preview.clientHeight);
      editor.scrollTop = ratio * (editor.scrollHeight - editor.clientHeight);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white border mx-5 my-3 rounded-lg shadow-sm">
        <Toolbar onInsert={handleToolbarInsert} />
        <div className="flex divide-x divide-gray-200 h-[calc(100vh-5rem)] w-full">
          <div className="w-1/2">
            <Editor
              value={markdown}
              onChange={setMarkdown}
              // ref={editorRef}
              onScroll={() => handleScroll("editor")}
            />
          </div>
          <div className="w-1/2 overflow-y-auto" ref={previewRef} onScroll={() => handleScroll("preview")}>
            <Preview content={markdown} />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
