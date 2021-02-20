import React from "react";
// import { Modal } from "./Modal";
// import { Row, Col } from "react-simple-flex-grid";
// import "react-simple-flex-grid/lib/main.css";
import "./Header.css";
import Button from "./Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="main">
        <ul>
          <li>
            <h1>Wasted Vaccine Tracker</h1>
          </li>
          <li>
            <Button></Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
