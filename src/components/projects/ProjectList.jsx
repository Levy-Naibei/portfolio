import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import Particle from "../Particle";
import nyt_books from "../../assets/projects/nyt_books_api.png";
// import blog from "../../assets/projects/blog_tech_pro.png";
import e_store from "../../assets/projects/e-store_pro.png";
import farmers from "../../assets/projects/farmers_pro.png";
import car_rent from "../../assets/projects/car_hire.png";
import tv_maze from "../../assets/projects/tv_maze.png";
import rEstate from "../../assets/projects/rEstate.png";
import learnfree from "../../assets/projects/learnfree_pro.png";
import uberark from "../../assets/projects/uberark.png"
import church_web from "../../assets/projects/church.png"

function ProjectList() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some projects I've worked on. As a sole contributor and in agile teams
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rEstate}
              isBlog={false}
              title="Real Estate App"
              description="Buy, sell or rent with us. The one stop shop for matters properties. Built with React, Redux, DjangoRest, Bootstrap, PostgeSQL, Nginx, Docker and more"
              ghLink="https://github.com/Levy-Naibei/django-real-estate-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car_rent}
              isBlog={false}
              title="Car Rent App"
              description="Users can find, book or rent a car quickly and easily. Built with React, Nextjs, Typescript and Tailwind CSS, Google Firebase"
              ghLink="https://github.com/Levy-Naibei/care_hire"
              // demoLink="https://car-hire-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uberark}
              // isBlog={false}
              isGithub={true}
              title="Content Delivery App"
              description="Engage your customers while working from anywhere. Collaborate smartly, track results. Tech-stack: React, DjangoRest, Tailwind CSS, PostgeSQL, AWS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={church_web}
              // isBlog={false}
              isGithub={true}
              title="Church web App"
              description="Updates users about upcoming events, make service request, make donation, receive bi-weekly newsletters. Built with React, Bootstrap, Google Firebase and more"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnfree}
              isBlog={false}
              title="Learn For Free!"
              description="Access tons of free courses in whatever field of learning form FutureLearn, Coursera, edX, etc.
              App built with React, Bootstrap, DjangoRest and more"
              ghLink="https://github.com/MLH-Fellowship/LearnForFree"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyt_books}
              isBlog={false}
              title="New York Times Books"
              description="This app enables users access best selling books of all times. Courtesy of New York Times Books API"
              ghLink="https://github.com/Levy-Naibei/new-york-times-API"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tv_maze}
              isBlog={false}
              title="TV shows"
              description="This app enables the users to manage the shows that they have watched, find new ones and also rate the shows they have loved. Courtesy of TV MAZE REST API"
              ghLink="https://github.com/Levy-Naibei/digital-vision"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmers}
              isBlog={false}
              title="Farmers Edge"
              description="Addressing Sustainable Development Goal(SDG) No. 2, this app enables comercial farmers in Africa to double their income by increasing their farm produce"
              ghLink="https://github.com/BuildForSDG/farmers-edge-client"
              demoLink="https://farmers-edge.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e_store}
              isBlog={false}
              title="Shop with Us"
              description="At the comfort of your house, buy authentic goods from our online store"
              // ghLink=""
              demoLink="https://dynamic-e-store.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectList;
