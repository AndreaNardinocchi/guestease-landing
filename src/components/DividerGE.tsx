import { Box, Typography } from "@mui/material";

export default function FancyDivider() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 12, mb: 3 }}>
      <Box
        sx={{
          flex: 1,
          height: 2,
          background: "linear-gradient(to right, transparent, #EFF5E0)",
        }}
      />
      <Typography
        sx={{
          mx: 2,
          fontFamily: "'Cinzel Decorative', serif",
          color: "#EFF5E0",
          letterSpacing: 2,
        }}
      >
        GE
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: 2,
          background: "linear-gradient(to left, transparent, #EFF5E0)",
        }}
      />
    </Box>
  );
}
