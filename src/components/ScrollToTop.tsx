import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ add this

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // ✅ add this

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    navigate("/"); //  update URL to "/"
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "#472d30",
        color: "white",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "opacity 0.3s ease",
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </Box>
  );
};

export default ScrollToTop;
