import React from "react";
// import { Modal } from "./Modal";
// import { Row, Col } from "react-simple-flex-grid";
// import "react-simple-flex-grid/lib/main.css";
import styled from "styled-components";
import "./Button.css";

const ToggleButton = (props) => {
  return <button >{props.message}</button>;
};

export default ToggleButton;
