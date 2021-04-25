import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/unsplash.jpg";
import editor from "../../Assets/Projects/LMS.jpeg";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/placement.jpg";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crop Recommendation System"
              description="Developed a smart agriculture system which is
              automated to help farmers to increase crop production by
              predicting the crop to be sown. The system will detect soil
              quality and provided a list of selected general crops placed
              on a database. The system used different sensors that
              measured pH level, soil moisture, temperature, and
              humidity."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Library Management System"
              description="This system is developed in .Net and backed by MySql server for operating on real-time tasks like book issuing, monitoring book status, collecting fine, etc performed in Library. Also the system facilitates reports generation for auditing purposes and scheduled back-ups."
              link="https://www.youtube.com/watch?v=wyJHnXzRW8w"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Digital Placement Cell"
              description="Designed and Developed a compact system that would carry all college placement activities including real time notification regarding new company visit, monitoring placed and unplaced students, getting responses from students. The project focused on Sql operations for effective functioning of the system."
              link="https://drive.google.com/drive/folders/1pCj_FA0LY8yoruQrYQKP4rJb3aKR8M25?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Unsplash API calls using Axios"
              description="Developed a simple interfaced React project that facilitated displaying photos related to search term. Interacted with the Unsplash API using the Axios library for getting responses and rendered it on the screen."
              link="https://github.com/saurabhssalunkhe/unsplash-api-calls"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Emotion Predcition from EEG Signals"
              description="Using EEG signals from 'AMIGOS' Dataset to extract features and train a classifier that helps in detection of human emotions from Brain Signals."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts and<strong className="purple"> Research Papers </strong>
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link="https://www.quora.com/How-do-I-write-efficient-code"
              title="Coding Practices"
              site="quora.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://drive.google.com/file/d/1mkeAETXe-xW8QplRJnJsJhm_V86_diaC/view?usp=sharingplant-ai-c8fc95ed90e6"
              title="IOT and ML based Crop Recommendation System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
