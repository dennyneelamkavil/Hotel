import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: "center",padding:"200px", backgroundColor: "#11224D", color: "#ffffff"}}>
      <h1>Requested page not found</h1>
      <h1>Please check the url</h1>
      <h1>Thank you, Have a nice day</h1>
      <h1>Parallel World Hotel Hanoi</h1>
      </Box>
      <Footer />
    </>
  );
}
