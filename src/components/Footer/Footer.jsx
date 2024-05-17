import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/Ether.png";
import social from "../../assets/Frame4.png";
import social1 from "../../assets/Frame (1)4.png";
import social2 from "../../assets/Frame (2)4.png";
import social3 from "../../assets/Frame (3)4.png";
import social4 from "../../assets/Frame (4)4.png";
import social5 from "../../assets/Frame (54).png";

const Footer = () => {
  return (
    <div className="bgcolor">
      <Container>
        <Row className="divrm">
          <Col className="ehtm"lg={8}>
            <img src={logo} />
            <p className="AI">Managed by Artificial Intelligence</p>
            <Row className="gap-3 ps-3">
              <Col lg={2} className="solimg">
                {" "}
                <img src={social} />
              </Col>
              <Col lg={2} className="solimg">
                {" "}
                <img src={social1} />
              </Col>
              <Col lg={2} className="solimg">
                {" "}
                <img src={social2} />
              </Col>
              <Col lg={2} className="solimg">
                {" "}
                <img src={social3} />
              </Col>
              <Col lg={2} className="solimg">
                {" "}
                <img src={social4} />
              </Col>
              <Col className="solimg">
                {" "}
                <img src={social5} />
              </Col>
            </Row>
          </Col>
          <Col className="ehtm" lg={2}>
            <p className="ether">ETHER</p>
            <ul className="litext">
              <li>Grants</li>
              <li>Generator</li>
              <li>Careers</li>
              <li>Disclaimer</li>
            </ul>
          </Col>
          <Col className="ehtm" lg={2}>
            <p className="ether">Get Connected</p>
            <ul className="litext">
              <li>Services</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
