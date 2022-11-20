import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from '../../assets/resume_levy_naibei.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = process.env.REACT_APP_RESUME_LINK
console.log(resumeLink);

const Resume = () => {
  const [, setWidth] = useState(1200);
  const [url] = useState(resumeLink);

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

        <Row className="resume">
          {/* <Document
            file={resumeLink}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocLoadSuccess}>
            {/* {Array.from(new Array(pages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />
            ))} */}

          {/* </Document> */}

          <iframe title="Resume"
            src={url}
            width="640"
            height="480"
            allow="autoplay">
          </iframe>
        </Row>

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