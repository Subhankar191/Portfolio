import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import collegemantra from "../../Assets/Projects/collegemantra.png";
import fundflow from "../../Assets/Projects/fundflow.png";
import weathersphere from "../../Assets/Projects/weathersphere.png";

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
              imgPath={weathersphere}
              isBlog={false}
              title="WeatherSphere"
              description="WeatherSphere is a sleek, full-featured weather forecast web application that delivers real-time weather updates, 5-day forecasts, air quality data, and a modern dark/light mode UI toggle — all through a beautifully responsive interface."
              ghLink="https://github.com/Subhankar191/weatherapp"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fundflow}
              isBlog={false}
              title="FundFlow"
              description="FundFlow is a blockchain-powered decentralized crowdfunding platform that empowers users to create, explore, and contribute to campaigns transparently using Ethereum."
              ghLink="https://github.com/Subhankar191/crowdfundingapp"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegemantra}
              isBlog={false}
              title="College Mantra"
              description="A web-based College Allocation System that streamlines and automates the college admission process based on student preferences, catagory, rank, and seat availability."
              ghLink="https://github.com/Subhankar191/college-allocation"
              //demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
