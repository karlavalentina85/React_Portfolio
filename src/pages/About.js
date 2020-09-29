import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import portfolio from '../Assets/Images/portfolio.jpg';

function About() {
  return (
    <div >
      <Container>
        <Row>
          <Col size="col-md-4">
            <img src={portfolio} height="100" alt="Me" />
          </Col>
          <Col size="col-md-8">
              <p>Hola! Welcome to my Website, My name is Karla and I'm from Santiago de Chile. I recently
              moved to Nashville, Tennessee with my family. I call it an adventure! I love literature, languages and writing,
              and all of these has taken me to the place where I can explore another world of creativity: CODING.
              I am on my way to become a Full-Stack Web Developer.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
