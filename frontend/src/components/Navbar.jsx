import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: "none",
    color: isScrolled ? "black" : "white",
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        padding: "1rem",
        backgroundColor: isScrolled ? "white" : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: isScrolled ? theme.shadows[4] : "none",
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="black" aria-label="menu" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Overview
              </MenuItem>
              <MenuItem component={Link} to="/gallery" onClick={handleClose}>
                Gallery
              </MenuItem>
              <MenuItem component={Link} to="/rooms-suites" onClick={handleClose}>
              Rooms & Suites
              </MenuItem>
              <MenuItem component={Link} to="/special-offers" onClick={handleClose}>
                Special Offers
              </MenuItem>
              <MenuItem component={Link} to="/tours" onClick={handleClose}>
                Tours
              </MenuItem>
              <MenuItem component={Link} to="/category/travel-guide" onClick={handleClose}>
                Travel Guide
              </MenuItem>
              <MenuItem component={Link} to="/loyal-guest" onClick={handleClose}>
                Loyal Guest
              </MenuItem>
            </Menu>
            <Typography
              variant="h6"
              sx={{
                color: isScrolled ? "black" : "white",
                flexGrow: 1,
                textAlign: "center",
                fontFamily: "Times New Roman",
                fontWeight: 500,
                textTransform: "uppercase",
                transition: "background-color 0.3s ease-in-out",
                textDecoration: "none",
              }}
              component={Link}
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Parallel World Hotel
            </Typography>
          </>
        ) : (
          <Stack direction="row" sx={{ flexGrow: 1, alignItems: "center", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                color: isScrolled ? "black" : "white",
                flexGrow: 1,
                textAlign: "center",
                fontFamily: "Times New Roman",
                fontWeight: 500,
                textTransform: "uppercase",
                transition: "background-color 0.3s ease-in-out",
                textDecoration: "none",
              }}
              component={Link}
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Parallel World Hotel
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Link to="/" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Overview</Typography>
              </Link>
              <Link to="/gallery" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Gallery</Typography>
              </Link>
              <Link to="/rooms-suites" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Rooms & Suites</Typography>
              </Link>
              <Link to="/special-offers" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Special Offers</Typography>
              </Link>
              <Link to="/tours" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Tours</Typography>
              </Link>
              <Link to="/category/travel-guide" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Travel Guide</Typography>
              </Link>
              <Link to="/loyal-guest" style={linkStyle}>
                <Typography sx={{ color: "inherit", "&:hover": { color: "#c66b29" } }}>Loyal Guest</Typography>
              </Link>
            </Stack>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
