import React from "react";
// import { Modal } from "./Modal";
// import { Row, Col } from "react-simple-flex-grid";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
import "./FormEntry.css";

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
    let decision;
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => (decision = true)
        },
        {
          label: "No",
          onClick: () => (decision = false)
        }
      ]
    });
    if (decision) {
      this.handleClear();
    }
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
      <div className="form-entry">
        <div>
          <h1>Vaccine Waste Data Entry</h1>
        </div>
        <div className="styled-form-wrapper">
          <form className="styled-form" onSubmit={this.handleSubmit}>
            <label>
              {" "}
              Hospital:{" "}
              <input
                className="search-box"
                value={this.state.hospital.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              County:{" "}
              <input
                className="search-box"
                value={this.state.county.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Date:{" "}
              <input
                className="search-box"
                value={this.state.date.value}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              {" "}
              Vaccines:{" "}
              <input
                className="search-box"
                value={this.state.vaccines.value}
                onChange={this.handleChange}
              />
            </label>{" "}
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default FormEntry;
