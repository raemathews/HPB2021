import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraphComp from './LineGraphComp.js';
import TableControls from './TableControls';


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
        
    }

    componentDidMount() {
        this.handleFetch("counties")
    }

    handleFetch(endpoint) {
        var path = "localhost:8080/HPB2021/" + endpoint
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

    render() {
        return (
            <StyledDashboard>
                <div className="cont">
                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col className="pageTitle" offset={1}>Expired Vaccines</Col>
                    </Row>

                    {/*DROPDOWN MENU*/}
                    <Row>
                        <Col offset={1}>
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
                    <Row gutter={80} align="center" >
                        <Col className="dataTable" span={6}>
                            <DataTable data={
                                this.state.tableData
                            } /></Col>
                        <Col className="lineGraph" span={6}><LineGraphComp dates={this.state.lineGraphData

                        } /></Col>
                    </Row>

                    {/*STATIC FOOTER*/}
                    <Row>
                        <Col>{/*FOOTER*/}</Col>
                    </Row>

                </div>
            </StyledDashboard>

        )
    }
}

export default Dashboard;