import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./style.css";

function Footer() {
  return (
<footer class="container-fluid footer-style fixed-bottom">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <SocialIcon url="https://www.linkedin.com/in/karla-silva-rodr%C3%ADguez-b170b31a8/" />
            <SocialIcon url="https://www.github.com/karlavalentina85" />
            <SocialIcon url="https://www.instagram.com/kokakonkuky" />
          </div>
      </div>
  </div>
</footer>
  );
}

export default Footer;
