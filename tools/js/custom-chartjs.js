const ctx = document.getElementById('myChart');
ctx.height = 170;
// Chart.defaults.global.defaultFontFamily = "Georgia" 
const myChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: ['01 AM', '04 AM', '07 AM', '01 PM', '04 PM', '07 PM', '10 PM'],
        datasets: [{
            label: 'Weekly Forecasting',
            data: [13, 11, 14, 16, 15, 13, 12],
            fill: 'start',
            borderColor: "#a2aadc",
            backgroundColor: '#eef0ff ',
            borderWidth: 2,
            lineTension: 0.4

        }]
    },

    options: {

        scales: {
            y: {
                display: false,
                max: 18,
                min: 10,
                ticks: {

                    stepSize: 5
                }
            },

            yAxes: [{

                ticks: {
                    fontSize: 12,
                    fontFamily: "'Roboto', sans-serif",
                    fontColor: '#000',
                    fontStyle: '500'
                }
            }],
            xAxes: [{
                display: false,
                ticks: {
                    fontSize: 12,
                    fontFamily: "'Roboto', sans-serif",
                    fontColor: '#000',
                    fontStyle: '500',
                }
            }]
        },
        plugins: {
            filler: {
                propagate: false,
            },
            legend: {
                display: false
            },
            title: {
                display: false,
                text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
            },
        },
        interaction: {
            intersect: false,
        }
    },


});