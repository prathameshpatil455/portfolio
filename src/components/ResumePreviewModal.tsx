import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export const RESUME_PDF_URL = "/resume.pdf";

interface ResumePreviewModalProps {
  open: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  resumeUrl?: string;
}

const ResumePreviewModal = ({
  open,
  onClose,
  isDarkMode,
  resumeUrl = RESUME_PDF_URL,
}: ResumePreviewModalProps) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-preview-title"
      onClick={onClose}
    >
      <div
        className={`flex flex-col w-full max-w-4xl h-[min(90vh,900px)] rounded-xl shadow-2xl overflow-hidden border ${
          isDarkMode
            ? "bg-[#1a1a1a] border-gray-700"
            : "bg-white border-gray-200"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b shrink-0 ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2
            id="resume-preview-title"
            className={`text-lg font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Resume preview
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
        <iframe
          title="Resume PDF"
          src={resumeUrl}
          className={`flex-1 w-full min-h-0 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        />
      </div>
    </div>,
    document.body
  );
};

export default ResumePreviewModal;
