import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useSelector } from "react-redux";

import ResumePreviewModal from "../components/ResumePreviewModal";

type ResumePreviewContextValue = {
  openResumePreview: () => void;
};

const ResumePreviewContext = createContext<ResumePreviewContextValue | null>(
  null,
);

export const ResumePreviewProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const closeResumePreview = useCallback(() => setOpen(false), []);
  const openResumePreview = useCallback(() => setOpen(true), []);
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme,
  );

  const value = useMemo(() => ({ openResumePreview }), [openResumePreview]);

  return (
    <ResumePreviewContext.Provider value={value}>
      {children}
      <ResumePreviewModal
        open={open}
        onClose={closeResumePreview}
        isDarkMode={isDarkMode}
      />
    </ResumePreviewContext.Provider>
  );
};

export const useResumePreview = () => {
  const ctx = useContext(ResumePreviewContext);
  if (!ctx) {
    throw new Error(
      "useResumePreview must be used within ResumePreviewProvider",
    );
  }
  return ctx;
};
