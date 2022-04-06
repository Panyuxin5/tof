var echarts = require('echarts');
 export function getcharts(list,type,unit){
    var arr_data=[];
    if(type==4){
        var color=["rgb(178,176,89)", "rgba(178,176,89,0.3)", "rgba(178,176,89,0)"]
    }
    if(type==3){
        var color=["rgb(62,195,188)", "rgba(62,195,188,0.3)", "rgba(29,182,173,0)"]
    }
    if(type==2){
        var color=["rgb(8,147,253)", "rgba(8,147,253,0.3)", "rgba(45,123,207,0)"]
    }
    if(type==1){
        var color=["rgb(58,191,45)", "rgba(58,191,45,0.3)", "rgba(80,227,153,0)"]
    }
    var myChart = echarts.init(document.getElementById("charts1"));
    myChart.clear()
    var x_data=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    for(var i=0;i<list.length;i++){
        var  val={
            name:x_data[list[i].monthtime-1],
            value:list[i].monthUsage>0?list[i].monthUsage:0
        }
        arr_data.push(val)
    }
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: x_data,
            name: "(月)",
            nameTextStyle: {
                padding: [0, 0, 0, -10],
            },
            boundaryGap: false,
            lineStyle: {
                type: 'dashed'
            },
        },
        yAxis: {
            type: 'value',
            name: unit,
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
                name: "预计用量",
                data: arr_data,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: color[0],
                        lineStyle: {
                            color: color[0]
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: color[1]
                        }, {
                            offset: 1,
                            color: color[2]
                        }])
                    }
                }
            }
        ]
    };
    myChart.setOption(option,true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


