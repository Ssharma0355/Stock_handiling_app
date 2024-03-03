import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Graph = () => {
    // Stock chart options
    const stockOptions = {
        rangeSelector: {
            selected: 1
        },
        title: {
            text: 'Stock Prices'
        },
        series: [{
            name: 'AAPL', // Apple stock
            data: [
                [1614556800000, 1220.53], // [timestamp, price]
                [1614643200000, 125.35],
                [1614729600000, 120.99],
                // Add more data points for AAPL
            ],
            tooltip: {
                valueDecimals: 2
            }
        }, {
            name: 'MSFT', // Microsoft stock
            data: [
                [1614556800000, 899.60], // [timestamp, price]
                [1614643200000, 205.77],
                [1614729600000, 1200.38],
                // Add more data points for MSFT
            ],
            tooltip: {
                valueDecimals: 2
            }
        }]
    };

    // Pie chart options
    const pieOptions = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distribution of Stocks'
        },
        series: [{
            name: 'Stocks',
            data: [{
                name: 'AAPL',
                y: 50 // Example data, you can set the actual values
            }, {
                name: 'MSFT',
                y: 30
            }]
        }]
    };

    return (
        <div graph-container>
            <div className="stock-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={stockOptions}
                />
            </div>
            <div className="pie-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={pieOptions}
                />
            </div>
        </div>
    );
}

export default Graph;
