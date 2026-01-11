// import { Box, Typography } from "@mui/material";

// const Contact = () => (
//   <Box
//     id="contact"
//     sx={{
//       minHeight: "100vh",
//       paddingTop: "120px",
//       px: 4,
//     }}
//   >
//     <Typography variant="h3" fontWeight="bold" mb={2}>
//       Contact
//     </Typography>

//     <Typography variant="body1">
//       Add your contact form, email, or social links here.
//     </Typography>
//   </Box>
// );

// export default Contact;

import { Box, Typography } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";

const iconSize = "100%";

const Contact = () => (
  <Box
    sx={{
      minHeight: {
        xs: "75vh",
        sm: "50vh",
      },
      paddingTop: { sm: "5%", xs: "20%" },
      px: 4,
      textAlign: "center",
    }}
  >
    <Typography variant="h3" fontWeight="bold" mb={2} id="contact">
      Contact
    </Typography>

    <Typography
      variant="h6"
      sx={{
        maxWidth: 600,
        mx: "auto",
        mb: 4,
        color: "#472d30",
      }}
    >
      Connect with me through the following channel:
    </Typography>

    {/* ICON GRID (same style as Portfolio) */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr" },
        maxWidth: 200,
        mx: "auto",
        mt: 4,
        gap: 4,
      }}
    >
      <Box
        component="a"
        href="https://www.linkedin.com/in/andrea-nardinocchi-53084056/"
        target="_blank"
        sx={{ color: "#0A66C2", mb: 6 }}
      >
        <FaLinkedin size={iconSize} />
      </Box>
    </Box>
  </Box>
);

export default Contact;
