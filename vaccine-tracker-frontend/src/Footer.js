import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5><i>Beanpot Baddies</i></h5>
            <h4 className="list-unstyled">
              <li className="foot-link">COVID-19 Vaccine Waste Tracker     &nbsp;      <a href="https://hackbeanpot.com/" target="_blank">HackBeanpot 2021</a>    &nbsp;    <a href="https://www.khoury.northeastern.edu/" target="_blank">Khoury College of Computer Science</a></li>
            </h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Beanpot Baddies | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;