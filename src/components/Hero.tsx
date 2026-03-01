import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FancyDivider from "./DividerGE";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        pt: 12,
        background: "linear-gradient(135deg, #472d30 0%, #2e1c1f 100%)",
        pb: 8,
        // color: "white",
        px: 2,
      }}
    >
      {/* LOGO + TITLE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          component="img"
          src="/GuestEaseLogo.png"
          alt="GuestEase Logo"
          sx={{ width: { xs: "50%", sm: "30%", md: "15%" } }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{ maxWidth: 600, mx: "auto", mb: 4, color: "#EFF5E0" }}
      >
        A full-stack web app for small hospitality businesses
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#e26d5c",
          // color: "white",
          color: "#EFF5E0",
          "&:hover": { backgroundColor: "#c95b4d" },
        }}
        href="https://guest-ease-efpg.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try GuestEase
      </Button>

      <FancyDivider />

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          mt: 10,
          textAlign: "center",
          color: "#EFF5E0",
        }}
        id="overview"
      >
        Overview
      </Typography>

      <Typography
        variant="h6"
        sx={{ maxWidth: 600, mx: "auto", mt: 3, color: "#EFF5E0" }}
      >
        GuestEase is a full-stack web app that helps small hospitality
        businesses manage bookings efficiently. It replaces manual reservations
        and OTAs with an easy-to-use platform where guests book online and
        admins manage rooms, pricing, and reservations via a secure dashboard.
        <br />
        GuestEase aims to streamline and digitalize the booking process for
        small hospitality businesses. With tailored features for Guests and
        Administrators, it ensures smooth interactions, efficient management,
        and a reliable, automated, and user-friendly booking experience.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: {
            xs: 0,
            sm: 4,
            md: 4,
          },
          mt: 8,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {/* Left list */}
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          <Typography variant="h6" sx={{ color: "#EFF5E0" }}>
            ✓ Two user roles (Guest, Administrator)
            <br />✓ Room browsing and date-based availability
            <br />✓ Full booking CRUD functionality for guests
            <br />✓ Admin dashboard for room, users and booking management
          </Typography>
        </Box>

        {/* Right list */}
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          <Typography variant="h6" sx={{ color: "#EFF5E0" }}>
            ✓ Secure authentication
            <br />✓ Automated email notifications
            <br />✓ Responsive UI optimized for desktop and mobile
            <br />✓ Error-free digitalized booking processes
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
