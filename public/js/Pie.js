var option = {
    title : {
        text : 'Asthma Incidence in Different Age Group of Female People',
        x : 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['18-24 yrs','25-34 yrs','35-44 yrs','45-54 yrs','55-65 yrs']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 106565
                    }
                }
            },
            restore : {show: true}
        }
    },
    calculable : true,
    series : [
         {
             name: 'Group' ,
             type:'pie',
             radius : ['50%', '70%'],
             itemStyle : {
                 normal : {
                     label : {
                        show : false
                        },
                     labelLine : {
                         show : false
                        }
                    },
                 emphasis : {
                    label : {
                        show : false,
                        position : 'center',
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:11892, name:'18-24 yrs'},
                {value:29296, name:'25-34 yrs'},
                {value:18823, name:'35-44 yrs'},
                {value:20842, name:'45-54 yrs'},
                {value:25712, name:'55-65 yrs'}
            ]
         }
    ]
};
var myChart = echarts.init(document.getElementById('item'));

myChart.setOption(option);