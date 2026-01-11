// import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { Box } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";

const LandingPage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Page Sections */}

      <Portfolio />
      <Contact />
      <ScrollToTop />
    </Box>
  );
};

export default LandingPage;
