import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { ExpandMore, Facebook, Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const getMaxWidth = () => {
    if (isSmDown) return "xs";
    if (isMdDown) return "sm";
    if (isLgDown) return "md";
    return "lg";
  };

  const maxWidth = getMaxWidth();

  return (
    <Box sx={{ backgroundColor: "#11224D", color: "#ffffff", py: 4 }}>
      <Container maxWidth={maxWidth}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid sx={{ borderBottom: "1px solid #ffffff", pb: 2 }}>
              <Typography variant="h6" gutterBottom>
                PARALLEL WORLD
              </Typography>
              <Typography variant="body2" paragraph>
                <Link
                  href="https://maps.app.goo.gl/Ar1R2JaCtbPi5rcPA"
                  color="inherit"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "underline", color: "#c66b29" } }}
                >
                  {" "}
                  Abcd Street, 21, Hanoi
                </Link>
              </Typography>
              <Typography variant="body2">
                Phone:{" "}
                <Link
                  href="tel:+123456789"
                  color="inherit"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "underline", color: "#c66b29" } }}
                >
                  +123 456 789
                </Link>
              </Typography>
              <Typography variant="body2">
                Email:{" "}
                <Link
                  href="mailto:abcd@gmail.com"
                  color="inherit"
                  underline="none"
                  sx={{ "&:hover": { textDecoration: "underline", color: "#c66b29" } }}
                >
                  abcd@gmail.com
                </Link>
              </Typography>
            </Grid>
            <Grid sx={{ pt: 2 }}>
              <Typography variant="h6" gutterBottom>
                FIND US ON
              </Typography>
              <IconButton
                color="inherit"
                href="https://www.facebook.com/"
                target="_blank"
                rel="nofollow noreferrer"
                sx={{ "&:hover": { color: "#c66b29" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/"
                target="_blank"
                rel="nofollow noreferrer"
                sx={{ "&:hover": { color: "#c66b29" } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.youtube.com/"
                target="_blank"
                rel="nofollow noreferrer"
                sx={{ "&:hover": { color: "#c66b29" } }}
              >
                <YouTube />
              </IconButton>
            </Grid>
          </Grid>
          {isLgDown ? (
            <div style={{display: "flex", flexDirection: isMdDown ? "column" : "row", justifyContent: "space-between", margin:"20px"}}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      HOTEL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#rooms-suites" color="inherit" underline="none" display="block">
                      Rooms & Suites
                    </Link>
                    <Link href="#special-offers" color="inherit" underline="none" display="block">
                      Special Offers
                    </Link>
                    <Link href="#loyal-guest" color="inherit" underline="none" display="block">
                      Loyal Guest
                    </Link>
                    <Link href="#gallery" color="inherit" underline="none" display="block">
                      Gallery
                    </Link>
                    <Link href="#location-map" color="inherit" underline="none" display="block">
                      Location & Map
                    </Link>
                    <Link href="#category/travel-guide" color="inherit" underline="none" display="block">
                      Hanoi Travel Guide
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      DINING
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#cloud-nine-restaurant" color="inherit" underline="none" display="block">
                      Cloud Nine Restaurant
                    </Link>
                    <Link href="#sky-bar" color="inherit" underline="none" display="block">
                      Sky Bar
                    </Link>
                    <Link href="#lobby-lounge" color="inherit" underline="none" display="block">
                      Lobby Lounge
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      POLICY
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#privacy-policy" color="inherit" underline="none" display="block">
                      Privacy Policy
                    </Link>
                    <Link href="#terms-conditions" color="inherit" underline="none" display="block">
                      Terms & Conditions
                    </Link>
                    <Link href="#cookie-policy" color="inherit" underline="none" display="block">
                      Cookie Policy
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      POLICY
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#privacy-policy" color="inherit" underline="none" display="block">
                      Privacy Policy
                    </Link>
                    <Link href="#terms-conditions" color="inherit" underline="none" display="block">
                      Terms & Conditions
                    </Link>
                    <Link href="#cookie-policy" color="inherit" underline="none" display="block">
                      Cookie Policy
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      POLICY
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#privacy-policy" color="inherit" underline="none" display="block">
                      Privacy Policy
                    </Link>
                    <Link href="#terms-conditions" color="inherit" underline="none" display="block">
                      Terms & Conditions
                    </Link>
                    <Link href="#cookie-policy" color="inherit" underline="none" display="block">
                      Cookie Policy
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" gutterBottom>
                      POLICY
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#privacy-policy" color="inherit" underline="none" display="block">
                      Privacy Policy
                    </Link>
                    <Link href="#terms-conditions" color="inherit" underline="none" display="block">
                      Terms & Conditions
                    </Link>
                    <Link href="#cookie-policy" color="inherit" underline="none" display="block">
                      Cookie Policy
                    </Link>
                  </AccordionDetails>
                </Accordion>
            </div>
          ) : (
            <>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6" gutterBottom>
                  HOTEL
                </Typography>
                <Link href="#rooms-suites" color="inherit" underline="none" display="block">
                  Rooms & Suites
                </Link>
                <Link href="#special-offers" color="inherit" underline="none" display="block">
                  Special Offers
                </Link>
                <Link href="#loyal-guest" color="inherit" underline="none" display="block">
                  Loyal Guest
                </Link>
                <Link href="#gallery" color="inherit" underline="none" display="block">
                  Gallery
                </Link>
                <Link href="#location-map" color="inherit" underline="none" display="block">
                  Location & Map
                </Link>
                <Link href="#category/travel-guide" color="inherit" underline="none" display="block">
                  Hanoi Travel Guide
                </Link>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6" gutterBottom>
                  DINING
                </Typography>
                <Link href="#cloud-nine-restaurant" color="inherit" underline="none" display="block">
                  Cloud Nine Restaurant
                </Link>
                <Link href="#sky-bar" color="inherit" underline="none" display="block">
                  Sky Bar
                </Link>
                <Link href="#lobby-lounge" color="inherit" underline="none" display="block">
                  Lobby Lounge
                </Link>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6" gutterBottom>
                  POLICY
                </Typography>
                <Link href="#privacy-policy" color="inherit" underline="none" display="block">
                  Privacy Policy
                </Link>
                <Link href="#terms-conditions" color="inherit" underline="none" display="block">
                  Terms & Conditions
                </Link>
                <Link href="#cookie-policy" color="inherit" underline="none" display="block">
                  Cookie Policy
                </Link>
              </Grid>
            </>
          )}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4, pb: 5 }}>
          <Typography variant="body2">&copy; Copyright 2020. Parallel World Group. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
