import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts'


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
                    enabled: true
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
                      color: '#087096',
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
                    type: 'datetime',
                    labels: {
                        format: 'M/d/yy',
                    }
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val)
                        }
                    }
                }
            },


        };
    } 

    render() {
        return (
                <ApexChart options={this.state.options} series={this.state.series} type="area" height={350} />

        )
    }
}
