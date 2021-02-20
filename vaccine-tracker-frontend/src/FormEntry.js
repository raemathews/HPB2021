import React from "react";
// import { Modal } from "./Modal";
// import { Row, Col } from "react-simple-flex-grid";
// import "react-simple-flex-grid/lib/main.css";
import styled from "styled-components";
import "./FormEntry.css";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class FormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital: "",
      county: "",
      date: "",
      vaccines: 0,
      show: false
    };

    this.showModal = (e) => {
      this.setState({
        show: !this.state.show
      });
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert("testing");
    this.handleClear();
    this.showModal(e);
    e.preventDefault();
  }

  handleClear() {
    this.setState({
      hospital: "",
      county: "",
      date: ""
    });
  }

  render() {
    return (
      <div>
        <row>
          <h1>Vaccine Waste Data Entry</h1>
        </row>
        <row>
          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              Hospital:{" "}
              <input
                class="search-box"
                value={this.state.hospital.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              County:{" "}
              <input
                class="search-box"
                value={this.state.county.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Date:{" "}
              <input
                class="search-box"
                value={this.state.date.value}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              {" "}
              Vaccines:{" "}
              <input
                class="search-box"
                value={this.state.vaccines.value}
                onChange={this.handleChange}
              />
            </label>{" "}
            <input class="button" type="submit" value="Submit" />
          </form>
        </row>
      </div>
    );
  }
}

export default FormEntry;
