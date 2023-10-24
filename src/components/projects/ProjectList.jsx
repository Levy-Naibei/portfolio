import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import Particle from "../Particle";
import nyt_books from "../../assets/projects/nyt_books_api.png";
// import blog from "../../assets/projects/blog_tech_pro.png";
import e_store from "../../assets/projects/e-store_pro.png";
import farmers from "../../assets/projects/farmers_pro.png";
import car_rent from "../../assets/projects/car_landing.png";
import tv_maze from "../../assets/projects/tv_maze.png";

function ProjectList() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              imgPath={car_rent}
              isBlog={false}
              title="Car Rent App"
              description="Users can find, book or rent a car quickly and easily. Built with React, Nextjs, Typescript and Tailwind CSS"
              ghLink="https://github.com/Levy-Naibei/care_hire"
              demoLink="https://car-hire-app.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnfree}
              isBlog={false}
              title="Learn For Free!"
              description="Access tons of free courses in whatever field of learning form FutureLearn, Coursera, edX, etc"
              ghLink="https://github.com/MLH-Fellowship/LearnForFree"
              demoLink="https://learnforfree.herokuapp.com"              
            />
          </Col> */}

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
              demoLink="https://dynamic-e-store.netlify.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectList;