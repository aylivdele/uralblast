// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return;
};

export default scrollToTop;
