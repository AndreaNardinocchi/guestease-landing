import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        color: "#EFF5E0",
        backgroundColor: "#472d30",
        width: "100%",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} GuestEase by Andrea Nardinocchi. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
