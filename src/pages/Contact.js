import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import portfolio from '../Assets/Images/portfolio.jpg';
import Card from "../components/Card"

function Contact() {
  return (
    <div class="card-header h1">
      Contact Me
      <h5 class="card-title h3">E-mail: ksilva.rod@gmail.com</h5>
      <p class="card-text h4">Phone Number: 615-203-9816</p>
      <a href="mailto:ksilva.rod@gmail.com" class="btn btn-primary btn-lg" type="submit">E-mail me!</a>
    </div>

  );
}

export default Contact;
