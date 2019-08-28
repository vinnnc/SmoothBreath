 var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Rural', 'Urban'],
        x: 'left'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['55-65','45-54','35-44','25-34','18-24']
    },
    series: [
        {
            name: 'Rural',
            type: 'bar',
            data: [25.11, 21.09, 21.88, 34.14, 28.94]
        },
        {
            name: 'Urban',
            type: 'bar',
            data: [20.2, 19.18, 19.76, 27.47, 26.79]
        }
    ]
};

var myChart = echarts.init(document.getElementById('wrap'));

myChart.setOption(option);