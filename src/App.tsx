import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LandingPage from "./page/LandingPage";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Container maxWidth="lg">
        <LandingPage />
      </Container>
      <Footer />
    </>
  );
};

export default App;
