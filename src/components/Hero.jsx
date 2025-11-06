import React, { useState, useEffect , useRef} from 'react';
import "../style/Hero.css";
import heroImg from "../assets/images/Hero.jpg";
import flex from "../assets/images/Flex.jpg";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import wifiAnim from "../assets/lottie/WiFi Connecting.json";
import bed from "../assets/lottie/Sleep.json";
import chef from "../assets/lottie/chef-making-pizza.json";
import Lottie from "lottie-react";


export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // When scrolled more than 80px from top, switch navbar style
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="home">
      {/* Navbar Section */}
      <header >
        <Navbar
          expand="lg"
          className={`main-navbar ${scrolled ? "scrolled" : "transparent"}`}
          sticky="top"
          collapseOnSelect
          ref={navRef}
          expanded={expanded}
          onToggle={setExpanded}
        >
          <Container className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="logo-container">
              <img src={logo} alt="Logo" className={`${scrolled ? "main-logo-h" : "main-logo"}`} />
            </div>

            {/* Nav Links */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center nav-bg'>
              <Nav className="ms-5 gap-4 ">
                <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link href="#facilities" className="nav-link-custom">Facilities</Nav.Link>
                <Nav.Link href="#Gallery" className="nav-link-custom">Gallery</Nav.Link>
                <Nav.Link href="#feedback" className="nav-link-custom">Feedback</Nav.Link>
                <Nav.Link href="#Contact" className="nav-link-custom">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/*Hero Section */}
      <div 
        className="my-background-div d-flex justify-content-between align-items-center pt-5"
        style={{ backgroundImage: `url(${heroImg})` }}>
                  
        <div className="hero-content align-items-center justify-content-center  text-center">
          <h1 className="hero-heading">
            “Find Your<br />Perfect Home<br />Away From<br />Home”
          </h1>
          <p className="hero-subheading">
            “Clean, safe, and fully furnished PGs<br />with modern amenities.”
          </p>

          <a 
            href="tel:9762576917" 
            className="hero-call d-flex align-items-center justify-content-center  mt-4 text-decoration-none"
          >
            <button className="call-btn d-flex align-items-center justify-content-center border-0 px-4 py-2 rounded-3">
              <div className="call-icon me-2">📞</div>
              <div className="call-text text-start">
                <p className="call-title mb-0 fw-semibold">Step Into Home</p>
                <p className="call-number mb-0 fw-bold">9762576917</p>
              </div>
            </button>
          </a>

        </div>

        {/* Hero Image  */}
        <div className="hero-image me-5 d-none d-md-block">
          <img src={flex} alt="flex" height="500" width="337" />
        </div>
      </div>

      <div className="hero-floating-circles">
        <div className="circle circle-1">
          <Lottie animationData={wifiAnim} loop={true} className="lottie-w" />
        </div>
        <div className="circle circle-2">
          <Lottie animationData={bed} loop={true} className="lottie" />
        </div>
        
        <div className="circle circle-3">
          <Lottie animationData={chef} loop={true} className="lottie" />
        </div>
      </div>
    </div>
  );
}
