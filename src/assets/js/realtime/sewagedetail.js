var echarts = require('echarts');
//图表
var lineColor = "#b2b059";
var lineColor1 = "rgba(178,176,89,0.3)";
var lineColor2 = "rgba(178,176,89,0)";
export function setcircle_charts(data, today, type, unit) {
    for(var i=0;i<today.length;i++){
        if(today[i]<0){
            today[i]=0
        }
    }
    if (type == 1) {
        lineColor = "#b2b059";
        lineColor1 = "rgba(178,176,89,0.3)";
        lineColor2 = "rgba(178,176,89,0)";
    } else if (type == 2) {
        lineColor = "#FF106E";
        lineColor1 = "rgba(192,77,216,0.3)";
        lineColor2 = "rgba(192,77,216,0)";
    }
    var myChart_ht = echarts.init(document.getElementById("Chart"));
    myChart_ht.clear();
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '4%',
            right: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data,
            name: "(H)",
            nameTextStyle: {
                padding: [0, 0, 0, -10],
            },
            boundaryGap: false,
            lineStyle: {
                type: 'dashed'
            },
        },
        yAxis: {
            // name: "(kW·h)",
            name: '('+unit+')',
            nameTextStyle: {
                padding: [5, 50, 0, 0],
            },
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                name: "今日走势",
                data: today,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: lineColor,
                        lineStyle: {
                            color: lineColor
                        }
                    }
                }, areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: lineColor1
                        }, {
                            offset: 1,
                            color: lineColor2
                        }])
                    }
                }
            }
        ]
    };
    myChart_ht.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht.resize();
    });
}