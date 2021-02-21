import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
// import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraphComp from './LineGraphComp.js';
import TableControls from './TableControls';
import "./styles.css";


// function validate()
// {
//  var ddl = document.getElementById("cardtype");
//  var selectedValue = ddl.options[ddl.selectedIndex].value;
//     if (selectedValue == "selectcard")
//    {
//     alert("Please select a card type");
//    }
// }

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            lineGraphData: props.lineGraphData
        };

        this.handleFetch = this.handleFetch.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
        this.handleTotal = this.handleTotal.bind(this);
        
    }

    //localhost:8080/HPB2021/all  every single entry
    //localhost:8080/HPB2021/total   total vaccines wasted of all time nationwide
    //localhost:8080/HPB2021/byDate   for graph (daily totals)
    //localhost:8080/HPB2021/selectCounty   all grand total vaccines wasted by hospitals in this county
    //localhost:8080/HPB2021/add    accepts a json

    componentDidMount() {

        this.handleFetch("counties")
    }

    handleFetch(endpoint) {
        var path = "http://localhost:8080/HPB2021/" + endpoint
        console.log("before", endpoint);
        fetch(path)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    tableData: result
                });
            }, () => { console.log(this.state.tableData) },
            (error) => {
                console.log("error here");
            }
        )
        console.log("after", endpoint);
    }

    handleChangeView(e) {
        if(e.target.value === "topten") {
            this.handleFetch("counties")
        }
        else {
            this.handleFetch("counties?desc=false")
        }

    }

    handleTotal() {
        let total;
        fetch("http://localhost:8080/HPB2021/total")
        .then(res => res.json())
        .then(
            (result) => {
                total = result.count
            },
            (error) => {
                console.log("error here");
            }
        )
        return (
        <h2>Total Number of Vaccines Wasted: {total}</h2>
        )
    }

    render() {
        return (
            //<StyledDashboard>
                <div className="cont mainn">
                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col className="pageTitle">Expired Vaccines</Col>
                    </Row>
                    <Row>
                        <Col>{this.handleTotal()}</Col>
                    </Row>
                    {/*DROPDOWN MENU*/}
                    <Row>
                        <Col>
                            <div>
                                <label className="dataselection" htmlFor="tablevalues">View: </label>
                                <select className="form-control mb-3" onChange={this.handleChangeView}>
                                    <option value="topten">10 Most Wasteful Counties</option>
                                    <option value="bottomten">10 Least Wasteful Counties</option>
                                </select>
                            </div>
                        </Col>
                    </Row>

                    {/*DATA VISUALIZATIONS*/}
                    <Row align="center" >
                        <Col className="dataTable">
                            <DataTable data={
                                this.state.tableData
                            } /></Col>
                        <Col className="lineGraph"><LineGraphComp dates={this.state.lineGraphData

                        } /></Col>
                    </Row>

                    {/*STATIC FOOTER*/}
                    <Row>
                        <Col>{/*FOOTER*/}</Col>
                    </Row>

                </div>
            //</StyledDashboard>

        )
    }
}

export default Dashboard;