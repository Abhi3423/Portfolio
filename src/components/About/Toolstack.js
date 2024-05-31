import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiXcode,
  SiAmazonaws
} from "react-icons/si";

import { DiGit, DiGithub } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <Techname name={"VsCode"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <Techname name={"Git"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <Techname name={"Github"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <Techname name={"Vercel"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <Techname name={"Heroku"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <Techname name={"Xcode"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <Techname name={"AWS Services"}/>
      </Col>
    </Row>
  );
}

export function Techname({name}){
     return (
        <div style={{ fontSize: "20px" }}>{name}</div>
     )
}

export default Toolstack;
