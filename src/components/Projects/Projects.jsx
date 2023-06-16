import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import crypto from "../../Assets/Projects/crypto.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";
import getYTS from "../../Assets/Projects/getYTS.png";
import myPlan from "../../Assets/Projects/myPlan.png";
import ecom from "../../Assets/Projects/ecom.jpg";
import textToVoice from "../../Assets/Projects/text-to-voice.png";
import moviex from "../../Assets/Projects/moviex.png";

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
              imgPath={crypto}
              isBlog={false}
              title="Stock Stream"
              description="Giving stock informations, blogs containing information on stock. provides real-time data, charts, and analysis on various stocks and financial markets. It offers users a user-friendly interface to track stock prices, monitor market trends, access historical data, and make informed investment decisions. The website also offers news updates, company profiles, and interactive tools to help users stay informed and navigate the world of stock trading efficiently."
              ghLink="https://github.com/DCBisht/stock-website"
              demoLink="https://dcbisht.github.io/stock-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviex}
              isBlog={false}
              title="Algorithm Visualizer"
              description="It provides a graphical representation of the algorithm's step-by-step process, allowing users to observe how data is manipulated and transformed. The visualizer typically displays the algorithm's input data, along with visual cues such as animations, colors, and diagrams to illustrate the algorithm's behavior. Users can adjust parameters, explore different scenarios, and gain a deeper understanding of how algorithms work through this immersive and educational experience."
              ghLink="https://github.com/DCBisht/Algorithm-Visualizer"
              demoLink="https://movie-x-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashcard}
              isBlog={false}
              title="SentiCompass"
              description="This system utilizes natural language processing and machine learning techniques to analyze customer reviews, social media posts, and other textual data to gauge customer sentiment. By understanding consumer sentiment, businesses can identify areas of improvement, track customer satisfaction trends, and make data-driven decisions to enhance the overall customer experience. This solution empowers organizations to proactively address customer concerns, improve product offerings, and foster long-term customer loyalty. "
              ghLink="https://github.com/DCBisht/Consumer-Satisfaction"
              demoLink="https://flashcard-generator-15e43.web.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce"
              description="This is a e-commerce website. This is a Full stack web aplication or a MERN stack web application same as common ecommerce websites. In this app user can buy product online. This project also have admin as well as user dashboard so shop owner which is a admin cad add product and categories. Both front and backend works properly."
              ghLink="https://github.com/panku-chavan/e-commerce-app-2023"
              demoLink="https://ruby-tasty-coyote.cyclic.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is my portfolio app. I make this this app using create-react-app. I design this app using bootstrap framework. This is responsive app. In this app i tried to explained myself in breif. I have added my resume and all information about me. I added my all projects or recent work also. "
              ghLink="https://github.com/panku-chavan/my-portfolio"
              demoLink="https://dcbisht.github.io/personal-portfolio/"
            />
          </Col>
       
         
          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
