import { render } from '@testing-library/react';
import React from 'react';
{/*import { Table } from 'Table.js'*/}

class Dashboard extends React.Component {

    constructor() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
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
                <Row>
                    <Col>Top Most Wasteful Counties</Col>
                    <Col></Col>
                    <Col>Wasted Vaccines Over Time</Col>
                </Row>

                {/*DATA VISUALIZATIONS*/}
                <Row>
                    <Col>{/*TABLE*/}</Col>
                    <Col></Col>
                    <Col>{/*LINE GRAPH*/}</Col>
                </Row>

                {/*STATIC FOOTER*/}
                <Row>
                    <Col>{/*FOOTER*/}</Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;