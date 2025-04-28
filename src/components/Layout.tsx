import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RootState } from "../store";
import { updateCursorPosition, closeMenu } from "../store/slices/uiSlice";
import CustomCursor from "./ui/CustomCursor";
import SocialLinks from "./SocialLinks";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      dispatch(updateCursorPosition({ x: e.clientX, y: e.clientY }));
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener("mousemove", handleCursorMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SocialLinks />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
};

export default Layout;
