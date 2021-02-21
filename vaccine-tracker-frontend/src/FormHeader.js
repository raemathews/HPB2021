import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import {unmountComponentAtNode} from 'react-dom';
import Button from "./Button";


function ChangeState() {
  const [state,setState] = useState('/');

  const handleChangeState = () => {
    if (state === '/FormEntry') {
      setState('/')
      console.log("first case: ", state)
    }

  }

  return {state, handleChangeState}
}

export default function FormEntryHeader() {

  const {state, handleChangeState} = ChangeState();

  useEffect(() => {
    handleChangeState();
  }, [])


    return (
      <ul className="mainn">
        <li className="header"><h2>COVID-19 Vaccine Dose Waste</h2></li>
        <li><NavLink 
          exact to={'/'} ><Button message={"Log Out"} /></NavLink></li>
      </ul>
    );
}

