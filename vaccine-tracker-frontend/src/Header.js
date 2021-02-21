import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import Button from "./Button";

function ChangeState() {
  const [state,setState] = useState('/');

  const handleChangeState = () => {
    if (state === '/') {
      setState('/FormEntry')
    }
    else {
      setState('/')
    }
  }

  return {state, handleChangeState}
}

export default function Header() {

  const {state, handleChangeState} = ChangeState();

  useEffect(() => {
    handleChangeState();
  }, [])


    return (
      <div className="mainn">
        <h1 className="header">Wasted Vaccine Tracker</h1>
        <NavLink activeClassName="active"
          exact to={state} ><Button></Button></NavLink>
      </div>
    );
}

