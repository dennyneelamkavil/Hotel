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
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Gallery
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Accomdations
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Special Offers
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                tours
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Travel Guide
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleClose}>
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
                Overview
                {/* <Typography sx={{ color: "inherit", "&:hover": { color: "red" } }}>Overview</Typography> */}
              </Link>
              <Link to="/" style={linkStyle}>
                Gallery
              </Link>
              <Link to="/" style={linkStyle}>
                Accomdations
              </Link>
              <Link to="/" style={linkStyle}>
                Special Offers
              </Link>
              <Link to="/" style={linkStyle}>
                Tours
              </Link>
              <Link to="/" style={linkStyle}>
                Travel Guide
              </Link>
              <Link to="/" style={linkStyle}>
                Loyal Guest
              </Link>
            </Stack>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
