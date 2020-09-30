import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import portfolio from '../Assets/Images/portfolio.jpg';
import Card from "../components/Card"
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
  <div class="jumbotron jumbotron-fluid">
    <Container>
      <h1 class="display-4 text-center">Portfolio</h1>
      <p class="lead text-center">This is part of the programming design work I've done up until now. </p>
      <Row>
        <Col size="col-sm-3">
              <h5>Project I</h5>
              <p>First Project called "ER Finder". An application that helps the user to locate the nearest Emergency Rooms in their radar.</p>
              <a href="https://karlavalentina85.github.io/ER-Finder/"class="btn btn-primary">Check it out</a>
              <br/>
              <br/>
              <button><a href="https://github.com/karlavalentina85/ER-Finder" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>
        <Col size="col-sm-3">
              <h5>Project II</h5>
              <p>Quick Quiz, this app gives random trivia questions, tracks scores and adds it to a team.</p>
              <a href="https://serene-inlet-83004.herokuapp.com/" class="btn btn-primary">Check it out</a>
              <br/>
              <br/>
              <button><a href="https://github.com/proflonghair07/Project_2" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>
        <Col size="col-sm-3">
                <h5>Password Generator</h5>
                <p> This Web Application generates a random password based on user-selected criteria. </p>
                <a href="https://karlavalentina85.github.io/PasswordGenerator/" class="btn btn-primary">Check it out</a>
                <br/>
                <br/>
              <button><a href="https://github.com/karlavalentina85/PasswordGenerator" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>
        <Col size="col-sm-3">
                <h5>Eat Da-Burger!</h5>
                <p>a restaurant app that lets users input the names of burgers they'd like to eat, following the MVC design pattern, Node, Express, and Handlebars.</p>
                <a href="https://sleepy-sands-33989.herokuapp.com/" class="btn btn-primary">Check it out</a>
                <br/>
                <br/>
                <button><a href="https://github.com/karlavalentina85/burger" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>     
      </Row>
      <Row>
        <Col size="col-sm-3">
                <h5>Employee Tracker</h5>
                <p>Content Manager System Interface, builds a solution for managing a company's employees, using node, inquirer and MySQL.</p>
                <a href="https://drive.google.com/file/d/15p6rooYr6Xe20WfVRHUl5lTJQB8Px_l_/view" class="btn btn-primary">Check out the Demo!</a>
                <br/>
                <br/>
                <button><a href="https://github.com/karlavalentina85/Employee-Tracker" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>
        <Col size="col-sm-3">
                <h5>ReadMe Generator</h5>
                <p>A command-line application that dynamically generates a professional README.md from a user's input using the Inquirer package.</p>
                <a href=" https://drive.google.com/file/d/1pPMz0qJwbEtk7_my7bWKoHtWYkSDATrO/view" class="btn btn-primary">Check out the Demo!</a>
                <br/>
                <br/>
                <button><a href="https://github.com/karlavalentina85/README-Generator" class="btn btn-secondary>">Git-Hub</a></button>
        </Col>
        <Col size="col-sm-3">
                <h5>TBD</h5>
        </Col>
        <Col size="col-sm-3">
                <h5>TBD</h5>
        </Col>
      </Row>

      </Container>
    </div>

  );
}

export default Portfolio;
