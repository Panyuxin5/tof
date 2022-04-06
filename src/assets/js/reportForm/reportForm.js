var echarts = require('echarts');

var color = [
    '#f8a51b', '#49c7e7', '#68228B', '#0893fd', '#ed403c', '#fef102', '#94b1ff', '#FF7F24', '#43bbd2', '#f58225',
    '#70be46', '#FF4500', '#beaaf4', '#f3417c', '#FF7F00', '#569834', '#03a45e', '#c772dd', '#FF3030', '#ff9a9a', '#018989',
    '#56c4c5', '#FF00FF', '#00B2EE', '#f5796d', '#FF6EB4', '#EEEE00', '#fb4e3f', '#6446ff', '#ff4800', '#06ff00', '#c39fa4', '#FF34B3',
    '#FF6A6A', '#C7C300', '#FF7F50', '#FF7256',
    '#FF69B4', '#bdaf98', '#FF3E96', '#87CEFA', '#FF6347',
    '#76EE00', '#9AFF9A', '#FF4040',
    '#FF1493', '#add68a', '#FF0000'
];
export function setbargraph(data) {
    let total = []
    let subcomname = []
    let piechart_data = []
    var mybargraph = echarts.init(document.getElementById("bargraph"));
    mybargraph.clear()
    let list = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < list.length; i++) {
        subcomname[i] = (list[i].name)
        total[i] = (list[i].usageSum>0?list[i].usageSum:0)
        let data_obj = {
            value: list[i].usageSum>0?list[i].usageSum:0,
            name: list[i].name
        }
        piechart_data.push(data_obj)
    }
    var yMax = 100;
    var dataShadow = [];
    // for (var i = 0; i < data.length; i++) {
    //     dataShadow.push(yMax);
    // }
    let option = {
        tooltip: {
            trigger: 'axis',
            // axisPointer: {            // 坐标轴指示器，坐标轴触发有效，显示数值
            //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        xAxis: {
            data: subcomname,/* 车间名 */
            axisLabel: {/* x轴文字控制 */
                textStyle: {
                    color: '#333',
                    fontSize: 14
                },
                interval: 0,/* 强制显示所有标签 */
                formatter: function (value) {
                    return (value.length > 7 ? (value.slice(0,7)+".") : value ).split("").join("\n");
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
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
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            containLabel: true
        },
        // grid: {/* 柱状图横向扩展  */
        //     left: '4%',
        //     right: '4%',
        //     bottom: '10%',
        //     top: '10%',
        //     containLabel: true
        // },
        // dataZoom: [
        //     {
        //         type: 'inside'
        //     }
        // ],
        series: [
            {
                type: 'bar',
                barWidth: '30%',/* 柱子的宽度 */
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //首先定义一个数组
                            var colorList = color;
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: total/* 总量 */
            }
        ]
    };
    mybargraph.setOption(option, true);
}
export function setbargraphh(data) {
    let total = []
    let subcomname = []
    let piechart_data = []
    var mybargraph = echarts.init(document.getElementById("bargraph"));
    mybargraph.clear()
    let list = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < list.length; i++) {
        subcomname[i] = (list[i].name)
        total[i] = (list[i].hourUsage>0?list[i].hourUsage:0)
        let data_obj = {
            value: list[i].hourUsage>0?list[i].hourUsage:0,
            name: list[i].name
        }
        piechart_data.push(data_obj)
    }
    var yMax = 100;
    var dataShadow = [];
    // for (var i = 0; i < data.length; i++) {
    //     dataShadow.push(yMax);
    // }
     let option = {
        tooltip: {
            trigger: 'axis',
            // axisPointer: {            // 坐标轴指示器，坐标轴触发有效，显示数值
            //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        xAxis: {
            data: subcomname,/* 车间名 */
            axisLabel: {/* x轴文字控制 */
                textStyle: {
                    color: '#333',
                    fontSize: 14
                },
                interval: 0,/* 强制显示所有标签 */
                formatter: function (value) {
                    return (value.length > 7 ? (value.slice(0,4)+"...") : value ).split("").join("\n");
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
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
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            }
        },
        grid: {
            left: '2%',
            right: '2%',
            containLabel: true
        },
        // grid: {/* 柱状图横向扩展  */
        //     left: '4%',
        //     right: '4%',
        //     bottom: '10%',
        //     top: '10%',
        //     containLabel: true
        // },
        // dataZoom: [
        //     {
        //         type: 'inside'
        //     }
        // ],
        series: [
            {
                type: 'bar',
                barWidth: '30%',/* 柱子的宽度 */
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //首先定义一个数组
                            var colorList = color;
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data: total/* 总量 */
            }
        ]
    };
    mybargraph.setOption(option, true);
}
/* 饼图 */

export function piechart(data) {
    // data=[{name:"车间三车n将三扯",usageSum:11},{name:"车间三车将三扯",usageSum:11},{name:"车间三车将g三扯",usageSum:11},{name:"车间三车f将三扯",usageSum:11},{name:"车间三车d将三扯",usageSum:11},{name:"车间三车3三扯",usageSum:11},{name:"车间三车将2扯",usageSum:11},{name:"车间三车4三扯",usageSum:11},{name:"车间三车将a三扯",usageSum:11}]
    let total = []
    let subcomname = []
    let piechart_data = []
    var mypiechart = echarts.init(document.getElementById("piechart"));
    mypiechart.clear()
    let list = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < list.length; i++) {
        subcomname[i] = (list[i].name)
        total[i] = (list[i].usageSum>0?list[i].usageSum:0)
        let data_obj = {
            value: list[i].usageSum>0?list[i].usageSum:0,
            name: list[i].name
        }
        piechart_data.push(data_obj)
    }
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show:false,
            // top: '5%',//距上边距
            // left:'10%',//距离左边距
            // right:'10%',//距离右边距/
            // type: 'scroll',
            // align: "auto",
            bottom: '1%',//距离下边距
            // padding: 20, // 图例内边距
            // itemWidth: 20, // 图例标记的图形宽度。
            // itemWidth: 20,
            // itemHeight: 10,
            // width:500,
            // itemGap: 20, // 图例每项之间的间隔。
            textStyle: {//图例文字的样式
                color: '#000',
                fontSize: 14,
            },
            // orient: 'horizontal',  // 图例横向排布
            // pagemode: true,
            // icon: 'circle',//图例形状设置
            icon:'pin',
            data: subcomname,

        },
        calculable: true,
        series: [
            {
                name: '',
                type: 'pie',
                radius: [50, 110],//控制圆环大小
                center: ['50%', '50%'],
                startAngle:225,
                // minAngle: 2,//最小角度
                /*roseType : 'area',*/
                data: piechart_data,/* 参数 */
                color: color,

                itemStyle: {
                    normal: {
                        label: {
                            // position:'outer',
                            // alignTo:'edge',
                            // margin:10,
                            textStyle: {
                                //color:'black',
                                fontSize: 12,
                                // fontWeight:'bolder'
                            },
                            // position:'outer'
                        },
                    //   labelLine : {
                    //         lineStyle:{
                    //           color:'black'
                    //         }
                    //     }
                    }
                },
            }
        ]
    };
    mypiechart.setOption(option, true);

}
export function piecharth(data) {
    let total = []
    let subcomname = []
    let piechart_data = []
    var mypiechart = echarts.init(document.getElementById("piechart"));
    mypiechart.clear()
    let list = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < list.length; i++) {
        subcomname[i] = (list[i].name)
        total[i] = (list[i].hourUsage>0?list[i].hourUsage:0)
        let data_obj = {
            value: list[i].hourUsage>0?list[i].hourUsage:0,
            name: list[i].name
        }
        piechart_data.push(data_obj)
    }

    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show:false,
            // top: '5%',//距上边距
            //left:'5%',//距离左边距
            //right:'10%',//距离右边距
            bottom: '5%',//距离下边距
            //itemWidth: 60,
            //itemHeight: 20,
            textStyle: {//图例文字的样式
                color: '#000',
                fontSize: 14
            },
            icon: 'pin',//图例形状设置
            data: subcomname,
        },
        calculable: true,
        series: [
            {
                name: '',
                type: 'pie',
                radius: [50, 110],//控制圆环大小
                center: ['50%', '50%'],
                startAngle:225,
                minAngle: 2,//最小角度
                /*roseType : 'area',*/
                data: piechart_data,/* 参数 */
                color: color,
                itemStyle: {
                    normal: {
                        label: {
                            position:'outer',
                            alignTo:'edge',
                            margin:10,
                            textStyle: {
                            //   color:'black',
                                fontSize: 12,
                                // fontWeight:'bolder'
                            }
                        },
                    //   labelLine : {
                    //         lineStyle:{
                    //           color:'black'
                    //         }
                    //     }
                    }
                },
            }
        ]
    };
    mypiechart.setOption(option, true);

}
