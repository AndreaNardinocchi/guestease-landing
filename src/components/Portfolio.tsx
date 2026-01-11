import { Box, Typography } from "@mui/material";
import {
  FaGithub,
  FaTrello,
  FaGoogleDrive,
  FaFigma,
  FaYoutube,
  FaFilePowerpoint,
} from "react-icons/fa";

const iconSize = "100%";

const Portfolio = () => (
  <>
    <Box sx={{ paddingTop: "5%" }} />
    <Box
      id="portfolio"
      sx={{
        minHeight: "100vh",
        px: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        fontWeight="bold"
        mb={2}
      >
        Portfolio
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: 600,
          mx: "auto",
          mb: 4,
          color: "#472d30",
          textAlign: "center",
        }}
      >
        Project resources documenting the development of GuestEase.
      </Typography>

      {/* ICON GRID WITHOUT NESTED GRIDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 4,
          maxWidth: 800,
          mx: "auto",
          mt: 4,
          textAlign: "center",
        }}
      >
        <Box
          component="a"
          href="https://github.com/AndreaNardinocchi/RealGuestEase"
          target="_blank"
          sx={{ color: "#000" }}
        >
          <FaGithub size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            GitHub
          </Typography>
        </Box>

        <Box
          component="a"
          href="https://trello.com/b/ZYkH5dyq/my-trello-board"
          target="_blank"
          sx={{ color: "#0079BF" }}
        >
          <FaTrello size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            Trello
          </Typography>
        </Box>

        <Box
          component="a"
          href="https://docs.google.com/document/d/1Yf78fZwP5O8jJNRFVzogcZ7ih7QkLp4drMq7qAgbsqE/edit?tab=t.0"
          target="_blank"
          sx={{ color: "#4285F4" }}
        >
          <FaGoogleDrive size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            Google Docs
          </Typography>
        </Box>

        <Box
          component="a"
          href="https://www.figma.com/design/2FIwh7ESiHDX6UvxikZiUH/Final-Project?node-id=0-1&p=f&t=5hC8WDlI4Yd20SgJ-0"
          target="_blank"
          sx={{ color: "#F24E1E" }}
        >
          <FaFigma size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            Figma
          </Typography>
        </Box>

        <Box
          component="a"
          href="https://youtube.com/your-link"
          target="_blank"
          sx={{ color: "#FF0000" }}
        >
          <FaYoutube size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            YouTube
          </Typography>
        </Box>

        <Box
          component="a"
          href="https://your-powerpoint-link"
          target="_blank"
          sx={{ color: "#D24726" }}
        >
          <FaFilePowerpoint size={iconSize} />
          <Typography
            variant="h6"
            sx={{ color: "#472d30", fontWeight: "bold" }}
          >
            PowerPoint
          </Typography>
        </Box>
      </Box>
    </Box>
  </>
);

export default Portfolio;
