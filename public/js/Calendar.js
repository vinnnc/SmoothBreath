

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        //exportEnabled: true,
        title: {
            text: "Pollen Calendar"
        },
        axisX: {
            title: "Species",
            interval: 5
        },
        axisY: {
            includeZero: false,
            title: "Month",
            interval: 1,
            minimum: 1,
            maximum: 12
        },
        data: [{
            type: "rangeBar",
            //showInLegend: true,
            //yValueFormatString: "MMM",
            //indexLabel: "{y[#index]}",
            //legendText: "Department wise Min and Max Salary",
            toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
            dataPoints: [
                { x: 5, y:[4, 11], label: "Annual Blue/Winter Grass" },
                { x: 10, y:[1, 4], label: "Bermuda/Couch Grass" },
                { x: 15, y:[9, 10], label: "Bottlebrush" },
                { x: 20, y:[9, 11], label: "English Oak" },
                { x: 25, y:[9, 12], label: "Kentucky Blue" },
                { x: 30, y:[9, 10], label: "London Plane Tree"},
                { x: 35, y:[6, 9], label: "Murray Pine/White Cypress Pine"},
                { x: 40, y:[10, 12], label: "Olive Tree"},
                { x: 45, y:[10, 11], label: "Paper-bark Tea Tree"},
                { x: 50, y:[9, 12], label: "Salvation Jane"},
                { x: 55, y:[9, 12], label: "Timothy Grass"},
                { x: 60, y:[8, 12], label: "Wild Oat"},
                { x: 65, y:[9, 12], label: "Yorkshire Fog/Velvet Grass"}
            ]
        }]
    });
    chart.render();
}
