import React, { useState, type MouseEvent, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { scrollToSection } from "../utils/ScrollTo";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // We can make the page we landed on as 'active'
  const isActive = (path: string) => location.pathname === path;
  console.log(isActive);
  const [active, setActive] = useState("overview");

  const [mobileAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const mobileMenuOpen = Boolean(mobileAnchorEl);

  // ✅ Handle hash navigation safely without React warnings
  useEffect(() => {
    const handleLoad = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActive(hash);
        scrollToSection(hash);
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleMobileMenu = (event: MouseEvent<HTMLElement>) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleNavigate = (section: string) => {
    scrollToSection(section);
    setActive(section);
    handleMenuClose();
  };

  const mobileMenuOptions = [
    { label: "Overview", section: "overview" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{ bgcolor: "#EFF5E0", color: "#472d30" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => {
            navigate("/"); // actually go to /
            setActive("");
            scrollToSection("");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            fontSize: "1.25rem",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          SETU Final Project
        </div>

        {isMobile ? (
          <>
            <IconButton
              aria-label="menu"
              onClick={handleMobileMenu}
              color="inherit"
              size="large"
            >
              <MenuIcon />
            </IconButton>

            {/* ✅ MOBILE MENU UPDATED TO MATCH NAVBAR + BOOTSTRAP STYLE */}
            <Menu
              id="mobile-menu"
              anchorEl={mobileAnchorEl}
              open={mobileMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  bgcolor: "#EFF5E0", // same as navbar
                  color: "#472d30", // same text color
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // Bootstrap-like shadow
                  mt: 1.5,
                  minWidth: 180,
                },
              }}
            >
              {mobileMenuOptions.map((opt) => (
                <MenuItem
                  key={opt.label}
                  onClick={() => handleNavigate(opt.section)}
                  sx={{
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "#472d30",
                      color: "#EFF5E0",
                    },
                  }}
                >
                  {opt.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {/* DESKTOP BUTTONS — unchanged except bigger font */}
            <Button
              disableRipple
              disableFocusRipple
              onClick={() => {
                window.location.hash = "overview";
                setActive("overview");
                scrollToSection("overview");
              }}
              sx={{
                textTransform: "none",
                backgroundColor: active === "overview" ? "#472d30" : "#EFF5E0",
                color: active === "overview" ? "#EFF5E0" : "#472d30",
                px: 3,
                py: 1.2,
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1.1rem", // ✅ bigger font
                transition: "0.25s ease",

                "& span": {
                  display: "inline-block",
                  transition: "0.25s ease",
                },
                "&:hover span": {
                  transform: "translateY(-2px)",
                  color: "#EFF5E0",
                },
                "&:hover ": {
                  backgroundColor: "#472d30",
                },
              }}
            >
              <span>Overview</span>
            </Button>

            <Button
              disableRipple
              disableFocusRipple
              onClick={() => {
                window.location.hash = "portfolio";
                setActive("portfolio");
                scrollToSection("portfolio");
              }}
              sx={{
                textTransform: "none",
                backgroundColor: active === "portfolio" ? "#472d30" : "#EFF5E0",
                color: active === "portfolio" ? "#EFF5E0" : "#472d30",
                px: 3,
                py: 1.2,
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1.1rem", // ✅ bigger font
                transition: "0.25s ease",
                mx: 1,

                "& span": {
                  display: "inline-block",
                  transition: "0.25s ease",
                },
                "&:hover span": {
                  transform: "translateY(-2px)",
                  color: "#EFF5E0",
                },
                "&:hover ": {
                  backgroundColor: "#472d30",
                },
              }}
            >
              <span>Portfolio</span>
            </Button>

            <Button
              disableRipple
              disableFocusRipple
              onClick={() => {
                window.location.hash = "contact";
                setActive("contact");
                scrollToSection("contact");
              }}
              sx={{
                textTransform: "none",
                backgroundColor: active === "contact" ? "#472d30" : "#EFF5E0",
                color: active === "contact" ? "#EFF5E0" : "#472d30",
                px: 3,
                py: 1.2,
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1.1rem", // ✅ bigger font
                transition: "0.25s ease",

                "& span": {
                  display: "inline-block",
                  transition: "0.25s ease",
                },
                "&:hover span": {
                  transform: "translateY(-2px)",
                  color: "#EFF5E0",
                },
                "&:hover ": {
                  backgroundColor: "#472d30",
                },
              }}
            >
              <span>Contact</span>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
