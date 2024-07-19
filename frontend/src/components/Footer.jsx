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
  AccordionDetails,
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
              <Typography variant="h6" gutterBottom sx={{ color: "#c66b29" }}>
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
            <Grid container direction={isMdDown ? "column" : "row"} justifyContent="center" margin={"20px"}>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      HOTEL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#rooms-suites" color="inherit" underline="none" display="block" gutterBottom>
                      Rooms & Suites
                    </Link>
                    <Link href="#special-offers" color="inherit" underline="none" display="block" gutterBottom>
                      Special Offers
                    </Link>
                    <Link href="#loyal-guest" color="inherit" underline="none" display="block" gutterBottom>
                      Loyal Guest
                    </Link>
                    <Link href="#gallery" color="inherit" underline="none" display="block" gutterBottom>
                      Gallery
                    </Link>
                    <Link href="#location-map" color="inherit" underline="none" display="block" gutterBottom>
                      Location & Map
                    </Link>
                    <Link href="#category/travel-guide" color="inherit" underline="none" display="block" gutterBottom>
                      Hanoi Travel Guide
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      DINING
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#cloud-nine-restaurant" color="inherit" underline="none" display="block" gutterBottom>
                      Cloud Nine Restaurant
                    </Link>
                    <Link href="#sky-bar" color="inherit" underline="none" display="block" gutterBottom>
                      Sky Bar
                    </Link>
                    <Link href="#lobby-lounge" color="inherit" underline="none" display="block" gutterBottom>
                      Lobby Lounge
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      POLICY
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#privacy-policy" color="inherit" underline="none" display="block" gutterBottom>
                      Privacy Policy
                    </Link>
                    <Link href="#terms-conditions" color="inherit" underline="none" display="block" gutterBottom>
                      Terms & Conditions
                    </Link>
                    <Link href="#cookie-policy" color="inherit" underline="none" display="block" gutterBottom>
                      Cookie Policy
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      ADDITIONAL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#extra-link-1" color="inherit" underline="none" display="block" gutterBottom>
                      Extra Link 1
                    </Link>
                    <Link href="#extra-link-2" color="inherit" underline="none" display="block" gutterBottom>
                      Extra Link 2
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      MORE LINKS
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#more-link-1" color="inherit" underline="none" display="block" gutterBottom>
                      More Link 1
                    </Link>
                    <Link href="#more-link-2" color="inherit" underline="none" display="block" gutterBottom>
                      More Link 2
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={3} width={isMdDown ? "40%" : "auto"}>
                <Accordion sx={{ color: "inherit", backgroundColor: "transparent", boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ color: "#c66b29" }}>
                      ADDITIONAL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link href="#additional-link-1" color="inherit" underline="none" display="block" gutterBottom>
                      Additional Link 1
                    </Link>
                    <Link href="#additional-link-2" color="inherit" underline="none" display="block" gutterBottom>
                      Additional Link 2
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          ) : (
            <Grid container justifyContent={"center"} lg={8} padding={4}>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  HOTEL
                </Typography>
                <Link href="#rooms-suites" color="inherit" underline="none" display="block" gutterBottom>
                  Rooms & Suites
                </Link>
                <Link href="#special-offers" color="inherit" underline="none" display="block" gutterBottom>
                  Special Offers
                </Link>
                <Link href="#loyal-guest" color="inherit" underline="none" display="block" gutterBottom>
                  Loyal Guest
                </Link>
                <Link href="#gallery" color="inherit" underline="none" display="block" gutterBottom>
                  Gallery
                </Link>
                <Link href="#location-map" color="inherit" underline="none" display="block" gutterBottom>
                  Location & Map
                </Link>
                <Link href="#category/travel-guide" color="inherit" underline="none" display="block" gutterBottom>
                  Hanoi Travel Guide
                </Link>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  DINING
                </Typography>
                <Link href="#cloud-nine-restaurant" color="inherit" underline="none" display="block" gutterBottom>
                  Cloud Nine Restaurant
                </Link>
                <Link href="#sky-bar" color="inherit" underline="none" display="block" gutterBottom>
                  Sky Bar
                </Link>
                <Link href="#lobby-lounge" color="inherit" underline="none" display="block" gutterBottom>
                  Lobby Lounge
                </Link>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  POLICY
                </Typography>
                <Link href="#privacy-policy" color="inherit" underline="none" display="block" gutterBottom>
                  Privacy Policy
                </Link>
                <Link href="#terms-conditions" color="inherit" underline="none" display="block" gutterBottom>
                  Terms & Conditions
                </Link>
                <Link href="#cookie-policy" color="inherit" underline="none" display="block" gutterBottom>
                  Cookie Policy
                </Link>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <Link href="#extra-link-1" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 1
                </Link>
                <Link href="#extra-link-2" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 2
                </Link>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <Link href="#extra-link-1" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 1
                </Link>
                <Link href="#extra-link-2" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 2
                </Link>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <Link href="#extra-link-1" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 1
                </Link>
                <Link href="#extra-link-2" color="inherit" underline="none" display="block" gutterBottom>
                  Extra Link 2
                </Link>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4, pb: 5 }}>
          <Typography variant="body2">&copy; Copyright 2020. Parallel World Group. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
