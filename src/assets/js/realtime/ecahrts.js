var echarts = require('echarts');
//图表
var lineColor = "#0893fd";
var lineColor1 = "rgba(35,144,201,0.3)";
var lineColor2 = "rgba(35,144,201,0)";
export function setcircle_charts(today,data,id,unit) {
        lineColor = "#0893fd";
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
            name: "时间",
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
            name: unit,
            nameTextStyle: {
                padding: [5, 50, 0, 0],
            },
            max: function(value){
                return (value.max*1.2).toFixed(2)
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
                name: "",
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
                }
            }
        ]
    };
    myChart_ht.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht.resize();
    });
}

export function setcircle_charts2(today,data,id,unit) {
        lineColor = "#0893fd";
    var myChart_ht = echarts.init(document.getElementById("Chart1"));
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
            name: "时间",
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
            name: unit,
            nameTextStyle: {
                padding: [5, 50, 0, 0],
            },
            max: function(value){
                return (value.max*1.2).toFixed(2)
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
                name: "",
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
                }
            }
        ]
    };
    myChart_ht.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht.resize();
    });
}