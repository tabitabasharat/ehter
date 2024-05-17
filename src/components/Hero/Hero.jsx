import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import parrot from "../../assets/Group 18.png";
import socialapps from "../../assets/Frame.png";
import frm1 from "../../assets/Frame22.png";
import frm2 from "../../assets/Frame (1).png";
import Carousel from 'react-bootstrap/Carousel';
import slider from "../../assets/Frame (5).png";
import slider1 from "../../assets/Frame (4).png"
import slider2 from "../../assets/Frame (2).png"
import slider3 from "../../assets/Frame (7).png"
import Footer from "../Footer/Footer";


const Hero = () => {
  return (
    <div className="bgimg">
      <Header />
      <Container>
        <div>
          <Row>
            <Col lg={7}>
              <p className="info">
                Harnessing Artificial Intelligence Tools for Naturally Image
                Generator
              </p>
            </Col>
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <p>🔥😍👍</p>
              <p className="para">
                In the realm of creativity, technology has become a powerful
                ally for artists, writers, designers, and creators of all kinds.
                Artificially intelligent (AI) tools have emerged as valuable
                companions, assisting naturally creative humans in their
                creative processes.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={parrot} className="imgwid" />
            </Col>
          </Row>
          <div>
            <p className="pora">
              Powering tools and integrations from companies all around the
              world
            </p>
            <img src={socialapps} className="imgwid" />
          </div>
        </div>
      </Container>
      <Container>
        <div>
          <Row>
            <Col lg={6}>
              <img src={frm1} className="imgwid1" />
            </Col>
            <Col lg={6}>
              <img src={frm2} className="imgwid1" />
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <p className="join">
                Join a community
                <br />
                of millions.
              </p>
            </Col>
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <p className="rate">
                10.2M+
                <br />
              </p>
              <span className="nocls ps-4">Active accounts</span>
              <p className="rate">
                300+
                <br />
              </p>{" "}
              <span className="nocls ps-4">projects</span>
              <p className="rate">
                1000+
                <br />
              </p>
              <span className="nocls ps-4 ">topics</span>
            </Col>
          </Row>
          <div className="slider">
            <p className="journey">Journey Through Art of community</p>
            <Carousel>
              <Carousel.Item>
                <img src={slider} className="imgwid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={slider1} className="imgwid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={slider2} className="imgwid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={slider3} className="imgwid" />
              </Carousel.Item>
            </Carousel>
          </div>
          <Footer/>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
