import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraphComp from './LineGraphComp.js';
import TableControls from './TableControls';
import "./styles.css";
import Header from "./Header";


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            lineGraphData: []
        };

        this.handleFetch = this.handleFetch.bind(this);
        this.handleChangeView = this.handleChangeView.bind(this);
        this.handleTotal = this.handleTotal.bind(this);
        this.handleLineGraphData = this.handleLineGraphData.bind(this);
        
    }

    //localhost:8080/HPB2021/all  every single entry
    //localhost:8080/HPB2021/total   total vaccines wasted of all time nationwide
    //localhost:8080/HPB2021/byDate   for graph (daily totals)
    //localhost:8080/HPB2021/selectCounty   all grand total vaccines wasted by hospitals in this county
    //localhost:8080/HPB2021/add    accepts a json

    componentDidMount() {
        //default values for data table
        this.handleFetch("counties")

        //mount data for line graph

        this.handleLineGraphData()
        // fetch("http://localhost:8080/HPB2021/byDate")
        //     .then(res => res.json())
        //     .then((result) => {
        //             this.setState({
        //                  lineGraphData: result
        //                  },
        //                  console.log(result));
        //         },
        //         (error) => {
        //             console.log("error here");
        //         }
        //     )
    }

    handleLineGraphData() {
        fetch("http://localhost:8080/HPB2021/byDate")

            .then(res => res.json())
            .then((result) => {
                result.map(dataPoint => {
                    dataPoint.x = new Date(dataPoint.x)

                    return dataPoint
                })
                result.sort((a, b) => {
                    return a.x - b.x
                })
                console.log(result)
                      this.setState({
                                        lineGraphData: result
                                    });
                  },() => {
                      console.log(this.state.lineGraphData)
                  },
                  (error) => {
                      console.log("error here");
                  }
            )
    }

    handleFetch(endpoint) {
        var path = "http://localhost:8080/HPB2021/" + endpoint
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
                total = result
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
            <>
            <Header/>
            <StyledDashboard>
                <div className="cont mainn">
                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row className="block">
                        <h1><Col className="pageTitle">Dose Waste Dashboard</Col></h1>
                    </Row>
                    <Row>
                        <Col offset={2}>{this.handleTotal()}</Col>
                    </Row>
                    {/*DROPDOWN MENU*/}
                    <Row>
                        <Col offset={2}>
                            <div>
                                <label className="dataselection" htmlFor="tablevalues">View: </label>
                                <select className="form-control mb-3" onChange={this.handleChangeView}>
                                    <option value="topten">10 Most Wasteful Counties</option>
                                    <option value="bottomten">10 Most Efficient Counties</option>
                                </select>
                            </div>
                        </Col>
                    </Row>

                    {/*DATA VISUALIZATIONS*/}
                    <Row align="center" gutter={43}>
                        <Col className="dataTable">

                            <DataTable data={
                                this.state.tableData
                            } /></Col>
                        {/*this.handleLineGraphData()*/}
                        <Col className="lineGraph">
                            <LineGraphComp dataset={this.state.lineGraphData} />
                        </Col>
                    </Row>

                    {/*STATIC FOOTER*/}
                    <Row>
                        <Col>{/*FOOTER*/}</Col>
                    </Row>

                </div>
            </StyledDashboard>
            </>

        )
    }
}

export default Dashboard;