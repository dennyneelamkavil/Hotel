import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import image1 from "../assets/images/Untitled-1.jpg.webp";
import image2 from "../assets/images/Untitled-2.jpg.webp";
import image3 from "../assets/images/Untitled-3.jpg.webp";
import image4 from "../assets/images/Untitled-5.jpg.webp";
import { useMediaQuery, useTheme } from "@mui/material";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", right: "10px", zIndex: 1 }} onClick={onClick} />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", left: "10px", zIndex: 1 }} onClick={onClick} />
  );
};

export default function Carousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    padding: "0",
    margin: "0",
  };

  return (
    <Slider {...settings}>
      <div>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "100vh" : "90vh",
            width: "100%",
          }}
        >
          <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
              Embodies classic charm with Asian touches and traditional features
            </h2>
          </Container>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "100vh" : "90vh",
            width: "100%",
          }}
        >
          <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
              A luxury retreat right in the heart of Hanoi's bustling old city!
            </h2>
          </Container>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "100vh" : "90vh",
            width: "100%",
          }}
        >
          <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>Cloud Nine Restaurant</h2>
          </Container>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "100vh" : "90vh",
            width: "100%",
          }}
        >
          <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>Lighthouse Sky Bar</h2>
          </Container>
        </div>
      </div>
    </Slider>
  );
}
