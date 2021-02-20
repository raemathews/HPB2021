import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormEntry.css";

class FormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital: "",
      county: "",
      date: "",
      vaccines: 0
    };

    this.handleHospital = this.handleHospital.bind(this);
    this.handleCounty = this.handleCounty.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleVaccines = this.handleVaccines.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleHospital(e) {
    this.setState({ hospital: e.target.value });
  }

  handleCounty(e) {
    this.setState({ county: e.target.value });
  }

  handleDate(e) {
    this.setState({ date: e.target.value });
  }

  handleVaccines(e) {
    this.setState({ vaccines: e.target.value });
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
    this.handleClear();
    if (decision) {
      this.handleClear();
    }
    e.preventDefault();
  }

  handleClear() {
    this.setState({
      hospital: "",
      county: "",
      date: "",
      vaccines: ""
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
                onChange={this.handleHospital}
              />
            </label>
            <label>
              {" "}
              County:{" "}
              <input
                className="search-box"
                value={this.state.county.value}
                onChange={this.handleCounty}
              />
            </label>
            <label>
              {" "}
              Date:{" "}
              <input
                className="search-box"
                value={this.state.date.value}
                onChange={this.handleDate}
              />
            </label>{" "}
            <label>
              {" "}
              Vaccines:{" "}
              <input
                className="search-box"
                value={this.state.vaccines.value}
                onChange={this.handleVaccines}
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
