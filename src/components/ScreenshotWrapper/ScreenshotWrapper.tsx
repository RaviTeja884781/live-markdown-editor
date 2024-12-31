import React, { ReactNode, useRef } from "react";
import html2canvas from "html2canvas";

interface ScreenshotWrapperProps {
  children: ReactNode; // Any React component(s) can be passed as children
  captureButtonPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left"; // Position of the capture button
  onCapture?: (blob: Blob) => void; // Optional callback to handle the captured screenshot blob
}

const ScreenshotWrapper: React.FC<ScreenshotWrapperProps> = ({
  children,
  captureButtonPosition = "top-right",
  onCapture,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleCapture = async () => {
    if (wrapperRef.current) {
      const canvas = await html2canvas(wrapperRef.current);
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((blob) => resolve(blob));
      });

      if (blob && onCapture) {
        onCapture(blob);
      }
    }
  };

  const getCaptureButtonClasses = () => {
    switch (captureButtonPosition) {
      case "top-right":
        return "absolute top-2 right-2";
      case "top-left":
        return "absolute top-2 left-2";
      case "bottom-right":
        return "absolute bottom-2 right-2";
      case "bottom-left":
        return "absolute bottom-2 left-2";
      default:
        return "absolute top-2 right-2";
    }
  };

  return (
    <div className="relative">
      <div ref={wrapperRef} className="p-4 border rounded shadow-md bg-white">
        {children}
      </div>
      <button
        onClick={handleCapture}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${getCaptureButtonClasses()}`}
      >
        Capture Screenshot
      </button>
    </div>
  );
};

export default ScreenshotWrapper;