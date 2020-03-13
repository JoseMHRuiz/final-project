import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              You can search by filtering the boxes. If they let you drop the
              bar. If they have classes for beginners. If they are affiliates.
              For the material they have. If they have classes for children
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by{" "}
              <a href="#">JoseMHR</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  class="git"
                  target="_blank"
                  href="https://github.com/JoseMHRuiz"
                >
                  <i class="fa fa-git"></i>
                </a>
              </li>
              <li>
                <a
                  class="linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/jmhr/"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
