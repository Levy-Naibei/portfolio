import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a <span className="purple">Software Engineer &nbsp;</span>
            based in <span className="purple">Kenya</span><br />
            I have experience working both <span className="purple">remotely and onsite</span> <br />
            <br />
            Other than developing web-based applications, I also love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Interacting with people of diverse backgrounds
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and reading inspirational books; Bible
            </li>
          </ul>

          <p style={{ color: "#46a6fa" }}>
            "Endeavour to build things that are game changers"{" "}
          </p>
          <footer className="blockquote-footer">@levynaibei</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;