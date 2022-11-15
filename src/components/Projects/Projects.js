import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import doclab from "../../Assets/Projects/Doclab.jpg";
import medinvoice from "../../Assets/Projects/MEDINVOICE.jpg";
import recruit from "../../Assets/Projects/recruit.jpg";
import levitation from "../../Assets/Projects/levitation.jpg";
import space from "../../Assets/Projects/space.jpg";
import share from "../../Assets/Projects/share.jpg";

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
              imgPath={recruit}
              isBlog={false}
              title="Recruitment"
              description="A recruitment single page static website in ReactJs with lots of creative animations and almost responsive elements."
              ghLink="https://github.com/Abhi3423/CN_Webdev_Task"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={share}
              isBlog={false}
              title="One Time Share"
              description="My personal developed project to upload the files which would be saved in a database and generate a link to download the file and after using that file the link becomes invalid."
              ghLink="https://github.com/Abhi3423/One_Time_Share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medinvoice}
              isBlog={false}
              title="MEDINVOICE"
              description="Project made in a hackathon organized by DS Community. It is a platform which solves the problem of keeping old prescriptions. It starts to store all your health records at single place."
              ghLink= "https://github.com/Abhi3423/Bit-Space-DSHack"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doclab}
              isBlog={false}
              title="DOCLAB"
              description="Project made in a hackathon organized by Hackoheist. We developed a platform where all students can upload there projects and showcase there work to all the world and we have developed the plgarism checker to have the organilatiy of uploaded files."
              ghLink="https://github.com/Abhi3423/HackoHeist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={levitation}
              isBlog={false}
              title="LEVITATION"
              description="Project made in a hackathon organized by IIT BOMBAY. It provides a platform where user can book there travelling or waiting tickets for hyperloops pods and it have such a developed time management that a user never have to wait more than 5 minutes."
              ghLink="https://github.com/Abhi3423/Levitation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Erudite Game"
              description="Project made in NASA SPACE CHALLENGE 2021. It is a basic text based javascript game developed over analyzing various space situations and environment categories of the planets in our solar system."
              ghLink="https://github.com/Abhi3423/SpaceEruditeGame"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
