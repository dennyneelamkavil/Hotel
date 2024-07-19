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
import { Link as RouterLink } from "react-router-dom";
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
                    <RouterLink
                      to={"/rooms-suites"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Rooms & Suites
                    </RouterLink>
                    <RouterLink
                      to={"/special-offers"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Special Offers
                    </RouterLink>
                    <RouterLink
                      to={"/loyal-guest"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Loyal Guest
                    </RouterLink>
                    <RouterLink
                      to={"/gallery"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Gallery
                    </RouterLink>
                    <RouterLink
                      to={"/location"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Location & Map
                    </RouterLink>
                    <RouterLink
                      to={"/category/travel-guide"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Hanoi Travel Guide
                    </RouterLink>
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
                    <RouterLink
                      to={"/cloud-nine-restaurant"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Cloud Nine Restaurant
                    </RouterLink>
                    <RouterLink
                      to={"/sky-bar"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Sky Bar
                    </RouterLink>
                    <RouterLink
                      to={"/lobby-lounge"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Lobby Lounge
                    </RouterLink>
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
                    <RouterLink
                      to={"/privacy-policy"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Privacy Policy
                    </RouterLink>
                    <RouterLink
                      to={"/terms-conditions"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Terms & Conditions
                    </RouterLink>
                    <RouterLink
                      to={"/cookie-policy"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Cookie Policy
                    </RouterLink>
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
                    <RouterLink
                      to={"/extra-link-1"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 1
                    </RouterLink>
                    <RouterLink
                      to={"/extra-link-2"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 2
                    </RouterLink>
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
                    <RouterLink
                      to={"/extra-link-1"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 1
                    </RouterLink>
                    <RouterLink
                      to={"/extra-link-2"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 2
                    </RouterLink>
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
                    <RouterLink
                      to={"/extra-link-1"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 1
                    </RouterLink>
                    <RouterLink
                      to={"/extra-link-2"}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                    >
                      Extra Link 2
                    </RouterLink>
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
                <RouterLink
                  to={"/rooms-suites"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Rooms & Suites
                </RouterLink>
                <RouterLink
                  to={"/special-offers"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Special Offers
                </RouterLink>
                <RouterLink
                  to={"/loyal-guest"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Loyal Guest
                </RouterLink>
                <RouterLink
                  to={"/gallery"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Gallery
                </RouterLink>
                <RouterLink
                  to={"/location"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Location & Map
                </RouterLink>
                <RouterLink
                  to={"/category/travel-guide"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Hanoi Travel Guide
                </RouterLink>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  DINING
                </Typography>
                <RouterLink
                  to={"/cloud-nine-restaurant"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Cloud Nine Restaurant
                </RouterLink>
                <RouterLink
                  to={"/sky-bar"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Sky Bar
                </RouterLink>
                <RouterLink
                  to={"/lobby-lounge"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Lobby Lounge
                </RouterLink>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  POLICY
                </Typography>
                <RouterLink
                  to={"/privacy-policy"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Privacy Policy
                </RouterLink>
                <RouterLink
                  to={"/terms-conditions"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Terms & Conditions
                </RouterLink>
                <RouterLink
                  to={"/cookie-policy"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Cookie Policy
                </RouterLink>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <RouterLink
                  to={"/extra-link-1"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 1
                </RouterLink>
                <RouterLink
                  to={"/extra-link-2"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 2
                </RouterLink>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <RouterLink
                  to={"/extra-link-1"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 1
                </RouterLink>
                <RouterLink
                  to={"/extra-link-2"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 2
                </RouterLink>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="h6" sx={{ color: "#c66b29" }} gutterBottom>
                  ADDITIONAL
                </Typography>
                <RouterLink
                  to={"/extra-link-1"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 1
                </RouterLink>
                <RouterLink
                  to={"/extra-link-2"}
                  style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "3px" }}
                >
                  Extra Link 2
                </RouterLink>
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
