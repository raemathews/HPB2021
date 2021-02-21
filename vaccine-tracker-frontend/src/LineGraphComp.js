import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts'
import {StyledTable} from './Table.styled.js';


export default class LineGraphComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'UnusedVaccines',
                data: props.dates
            }],
            options: {
                chart: {
                    fontFamily: 'Arial, sans-serif',
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: true,

                },
                markers: {
                    size: 0,
                },
                title: {
                    text: 'Total Vaccines Wasted',
                    align: 'left',
                    fontFamily: 'Arial, sans-serif'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#15929d',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Vaccines',
                        fontFamily: 'Arial, sans-serif'
                    },
                },
                xaxis: {
                    fontFamily: 'Arial, sans-serif',
                    type: 'text',
                },
                tooltip: {
                    shared: false,

                }
            },


        };
    }

    render() {
        return (
            <StyledTable>
                <ApexChart className="table" options={this.state.options} series={this.state.series} type="area" height={484} />
            </StyledTable>
        )
    }
}
