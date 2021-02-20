import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraph from './LineGraphComp.js';


class Dashboard extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <StyledDashboard>
                <div className="cont">
                    {/*STICKY "GLOBAL NAV BAR" - but no actual navigation?*/}
                    <Row className="stickyHeader">
                        <Col>{/*ICON*/}</Col>
                        <Col>Vaccine Waste Dashboard</Col>
                    </Row>

                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col></Col>
                        <Col>Expired Vaccines</Col>
                    </Row>

                    {/*TITLES OF DATA VISUALIZATIONS*/}
                    <Row>
                        <Col span={6}>Top Most Wasteful Counties</Col>
                        <Col span={6}>Wasted Vaccines Over Time</Col>
                    </Row>

                    {/*DATA VISUALIZATIONS -- TEMPORARILY HARD CODED IN*/}
                    <Row>
                        <Col className="dataTable" span={6}><DataTable data={[
                            {
                                rank: '1',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '2',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '3',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '4',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '5',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '6',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '7',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '8',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                            {
                                rank: '9',
                                distributionCenter: 'Northeastern University',
                                jurisdiction: 'Boston',
                                wasted: '4,329',
                            },
                        ]} /></Col>
                        <Col span={6}><LineGraph dataPoints={[
                            { x: 8, y: 59 },
                            { x: 9, y: 53 },
                            { x: 10, y: 54 },
                            { x: 11, y: 61 },
                            { x: 12, y: 60 },
                            { x: 13, y: 55 },
                            { x: 14, y: 60 },
                            { x: 15, y: 56 },
                            { x: 16, y: 60 },
                            { x: 17, y: 59.5},
                            { x: 18, y: 63 },
                            { x: 19, y: 58 },
                            { x: 20, y: 54 },
                            { x: 21, y: 59 },
                            { x: 22, y: 64 },
                            { x: 23, y: 59 }
                        ]} /></Col>
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