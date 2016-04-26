var myChart = echarts.init(document.getElementById('main'));
var option = {
    title : {
        text: 'Time it takes for x amount of filters to hit the ground',
    },
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + ' Filters ' 
                   + params.value[1] + ' Seconds ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name +
                  ' : '
                   + params.value + ' Seconds ';
            }
        },  
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data:['Number of filters','Time to hit the ground']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} filters'
                
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value} sec'
            }
        }
    ],
    series : [
        {
            name:'',
            type:'scatter',
            data: [[1,2.68], [2,2.15], [3,1.88], [4,1.59], [5,1.5], [6,1.51], [7,1.32], [8,1.14], [9,1.13], [10,1.12], [11,1], [12.87], [13,0.85],
            [14,0.86], [15,0.83], [16,0.76], [17,0.72], [18,0.64], [19,0.56], [20,0.49], [21,0.42], [22,0.41], [23,0.38], [24,0.35], [25,0.22],
            [26,0.25], [27,0.18], [28,0.15], [29,0.1], [30,0.04]
            ],
        },
    ]
};
myChart.setOption(option);
