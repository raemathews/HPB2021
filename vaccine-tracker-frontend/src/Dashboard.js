import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledDashboard } from './Dashboard.styled.js';
import DataTable from './Table';
{/*import { LineGraph } from 'LineGraph.js'*/ }
{/*import { Table } from 'Table.js'*/ }


class Dashboard extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <StyledDashboard>
                <Container className="cont">
                    {/*STICKY "GLOBAL NAV BAR" - but no actual navigation?*/}
                    <Row>
                        <Col>{/*ICON*/}</Col>
                        <Col>Vaccine Waste Dashboard</Col>
                    </Row>

                    {/*TITLE OF DASHBOARD PAGE*/}
                    <Row>
                        <Col></Col>
                        <Col>Expired Vaccines</Col>
                    </Row>

                    {/*TITLES OF DATA VISUALIZATIONS*/}
                    <Row xs={2} md={4} lg={6}>
                        <Col>Top Most Wasteful Counties</Col>
                        <Col>Wasted Vaccines Over Time</Col>
                    </Row>

                    {/*DATA VISUALIZATIONS*/}
                    <Row>
                        <Col><DataTable data={[
        {
          rank: 'Alice',
          distributionCenter: 'Johnson',
          jurisdiction: 9,
          wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
        {
            rank: 'Alice',
            distributionCenter: 'Johnson',
            jurisdiction: 9,
            wasted: 'F',
        },
      ]} /></Col>
                        <Col>{/*LINE GRAPH*/}</Col>
                    </Row>

                    {/*STATIC FOOTER*/}
                    <Row>
                        <Col>{/*FOOTER*/}</Col>
                    </Row>

                </Container>
            </StyledDashboard>

        )
    }
}

export default Dashboard;