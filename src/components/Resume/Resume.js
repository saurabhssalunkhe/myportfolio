import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Internship</h3>
            <Resumecontent
              title="CodeSpeedy Technologies"
              date="May 2020 - July 2020"
              content={[
                "Problem solving intern",
                "Worked on datastructures and algorithms",
                "Contributed to codespeedy website",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Addiction'19 Technical Fest of PICT, Pune]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Survey Website [Full Stack team project]"
              content={[
                "Operated on developing the frontend end of the website using React, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Pune Institute of Computer Technology [BE-IT]"
              date="2018 - 2021"
              content={["CGPA: 7.4 till 6th sem"]}
            />
            <Resumecontent
              title="Dr. BATU, Lonere [Diploma]"
              date="2015 - 2018"
              content={["Precentage: 90.80%"]}
            />
            <Resumecontent
              title="10th BOARD [KES highschool, Alibag] "
              date="2014 - 2015"
              content={["Precentage: 85.80%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Current rank in HackerRank 25987",
                "Top Performer in VIIT Code-a-Thon",
                "Participated  Smart India Hackathon'17",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
