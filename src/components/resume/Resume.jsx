import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";
import resume from './../../assets/pdf/levynaibei_cv.pdf';

const Resume = () => {
  const [, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
