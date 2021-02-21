import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import styled from "styled-components";
//import "./FormEntry.css";

class FormEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospital: "",
      county: "",
      date: "",
      vaccines: 0,
      json_post: ""
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
      message: "Are you sure this is the right information?",
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
    //if (decision) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: this.state.date, name: this.state.hospital, county: this.state.county,
        vaccines: this.state.vaccines})
    };
    fetch('http://localhost:8080/HPB2021/add', requestOptions)
    console.log("HI AGAIN ", requestOptions)
      //.then(response => response.json())
      //.then(data => this.setState({ json_post: this.state.county + this.state.date + this.state.hospital + this.state.vaccines }, () => console.log(this.state.json_post)));
    this.handleClear();
  //}
    e.preventDefault();
  }

  handleClear() {
    this.setState(
      {
        hospital: "",
        county: "",
        date: "",
        vaccines: 0
      },
      () => {
        console.log("Inside handleclear", this.state.hospital);
      }
    );
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
                value={this.state.hospital}
                onChange={this.handleHospital}
              />
            </label>
            <label>
              {" "}
              County:{" "}
              <input
                className="search-box"
                value={this.state.county}
                onChange={this.handleCounty}
              />
            </label>
            <label>
              {" "}
              Date:{" "}
              <input
                className="search-box"
                value={this.state.date}
                onChange={this.handleDate}
              />
            </label>{" "}
            <label>
              {" "}
              Vaccines:{" "}
              <input type="number"
                className="search-box"
                value={this.state.vaccines}
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
