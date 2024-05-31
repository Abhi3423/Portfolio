import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";

import {
  SiHtml5,
  SiCss3,
  SiFlask,
  SiTypescript,
  SiTailwindcss,
  SiSwift,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiBootstrap,
  SiRedux,
  SiReduxsaga,
  SiElectron,
  SiSqlite,
  SiAmazons3
} from "react-icons/si";
import { Techname } from "./Toolstack";

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <Techname name={"C++"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <Techname name={"Python"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <Techname name={"Javascript"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
        <Techname name={"Typescript"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift/>
        <Techname name={"Swift"}/>
      </Col>
    </Row>
  );
}

export function BackendTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <Techname name={"Node"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <Techname name={"Express"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <Techname name={"Next"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <Techname name={"Flask"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <Techname name={"Django"}/>
      </Col>
    </Row>
  );
}

export function FrontendTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <Techname name={"React"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElectron />
        <Techname name={"Electron"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <Techname name={"Redux"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
        <Techname name={"Redux Saga"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <Techname name={"CSS"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <Techname name={"Tailwind CSS"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <Techname name={"Bootstrap"}/>
      </Col>
    </Row>
  );
}

export function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <Techname name={"MongoDB"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <Techname name={"Sql"}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <Techname name={"S3"}/>
      </Col>
    </Row>
  );
}

export default Techstack;