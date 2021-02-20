import React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
import LineGraphComp from './LineGraphComp.js';


class Dashboard extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <StyledDashboard>
                <div className="cont">
                    {/*STICKY "GLOBAL NAV BAR" - but no actual navigation?*/}
                    <Row className="stickyHeader">
                        <Col offset={1}>{/*ICON*/}</Col>
                        <Col >Vaccine Waste Dashboard</Col>
                    </Row>

                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col className="pageTitle" offset={1}>Expired Vaccines</Col>
                    </Row>

                    {/*DATA VISUALIZATIONS -- TEMPORARILY HARD CODED IN*/}
                    <Row gutter={80} align="center" >
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
                        <Col className ="lineGraph" span={6}><LineGraphComp dates={[
                            { x: '1/1/21', y: 22918 },
                            { x: '2/1/21', y: 87923 },
                            { x: '3/1/21', y: 48472},
                            { x: '4/1/21', y: 48378 },
                            { x: '5/1/21', y: 10892 },
                            { x: '6/1/21', y: 48294 },
                            { x: '7/1/21', y: 22918 },
                            { x: '8/1/21', y: 87923 },
                            { x: '9/1/21', y: 48472},
                            { x: '10/1/21', y: 48378 },
                            { x: '11/1/21', y: 10892 },
                            { x: '12/1/21', y: 48294 },
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