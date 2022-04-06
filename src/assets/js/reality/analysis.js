var echarts = require('echarts');

export function getcharts(list, id, type, startYear, endYear) {
    // type=2
    // list={2016:{1:1,3:3,2:2,4:4,5:5,7:7,6:6,8:6,9:9,10:10,11:11,12:12},2017:{"第一季度":12,"第二季度":11,"第三季度":11,"第四季度":11},2018:{"第一季度":12,"第二季度":11,"第三季度":11,"第四季度":11}}
    // list={2016:{1:1,3:3,2:2,4:4,5:5,7:7,6:6,8:6,9:9,10:10,11:11,12:12},2017:{1:11,3:3,2:2,4:4,5:5,7:7,6:6,8:6,9:9,10:10,11:11,12:12}}
    var myChart = echarts.init(document.getElementById(id));
    myChart.clear()
    var time = [];
    var data = [];
    var min;
    var yearlist = []
    for (var i = startYear * 1; i <= endYear; i++) {
        yearlist.push(i)
    }
    if (type == 0) {
        if (list.length != 0) {
            for (var i = 0; i < list.length; i++) {
                time[i] = list[i].yeartime
                var val = {
                    name: list[i].yeartime,
                    value: list[i].yearUsage>0?list[i].yearUsage:0
                }
                data.push(val)
            }
            for (var i = 0; i < time.length; i++) {
                for (var j = i; j < time.length; j++) {
                    if (time[i] > time[j]) {
                        min = time[j];
                        time[j] = time[i];
                        time[i] = min;
                    }
                }
            }
        } else {
            time = yearlist
        }
    }
    if (type == 1) {
        var data = []
        time = ["第一季度", "第二季度", "第三季度", "第四季度"]
        // for (var i = 0; i < time.length; i++) {
        //     data.push([time[i]])
        // }
        data[0]=list[1]>0?list[1]:0
        data[1]=list[2]>0?list[2]:0
        data[2]=list[3]>0?list[3]:0
        data[3]=list[4]>0?list[4]:0
        // if (list.length != 0) {
        //     for (var key in list) (

        //         // datalist1[0].push(key),
        //         // datalist1[1].push(list[key].第一季度),
        //         // datalist1[2].push(list[key].第二季度),
        //         // datalist1[3].push(list[key].第三季度),
        //         // datalist1[4].push(list[key].第四季度)
        //     )
        // } else {
        //     for (var i = 0; i < yearlist.length; i++) {
        //         datalist1[0].push(yearlist[i] + '')
        //     }
        // }
    }
    if (type == 2) {
        var data = []
        time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        if (list.length != 0) {
            for (var key in list) (
                data[list[key].monthtime-1]=list[key].monthUsage>0?list[key].monthUsage:0
                // datalist1[0].push(key),
            //     datalist1[1].push(list[key][1]>0?list[key][1]:''),
            //     datalist1[2].push(list[key][2]>0?list[key][2]:''),
            //     datalist1[3].push(list[key][3]>0?list[key][3]:''),
            //     datalist1[4].push(list[key][4]>0?list[key][4]:''),
            //     datalist1[5].push(list[key][5]>0?list[key][5]:''),
            //     datalist1[6].push(list[key][6]>0?list[key][6]:''),
            //     datalist1[7].push(list[key][7]>0?list[key][7]:''),
            //     datalist1[8].push(list[key][8]>0?list[key][8]:''),
            //     datalist1[9].push(list[key][9]>0?list[key][9]:''),
            //     datalist1[10].push(list[key][10]>0?list[key][10]:''),
            //     datalist1[11].push(list[key][11]>0?list[key][11]:''),
            //     datalist1[12].push(list[key][12]>0?list[key][12]:'')
            )
        } else {
            // for (var i = 0; i < yearlist.length; i++) {
            //     datalist1[0].push(yearlist[i] + '')
            // }
        }
    }
    if (type != 4) {
        var option = {
            //柱状图颜色
            tooltip: {
                trigger: 'axis'
            },
            legend: {},
           
            grid: {
                left: '5%',
                right: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                //日期
                data: time,
                boundaryGap: true,//坐标轴两边留白策略
                lineStyle: {
                    type: 'dashed'
                },
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed'
                    }
                }

            }],
            series: [

                {
                    type: 'bar',
                    barWidth: '20',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        }
                    },
                    //数据
                    data: data
                }]
        };
    } else {
        option = {
            legend: {},
            tooltip: {},
            dataset: {
                source: datalist1
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: snum(datalist1)
        };
    }

    if (id == "charts1") {
        option.color = ['#00FA9A', '#00FF00', '#32CD32'];

    }
    if (id == "charts2") {
        option.color = ['#87CEFA', '#00BFFF', '#1E90FF'];

    }
    if (id == "charts3") {
        option.color = ['#AFEEEE', '#00CED1', '#20B2AA'];

    }
    if (id == "charts4") {
        option.color = ['#b2b059', '#FF8C00', '#FF4500'];

    }
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
export function snum(list) {
    serie = [];
    for (var i = 0; i < list[0].length - 1; i++) {
        item = {
            type: 'bar',
            barWidth: '20',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000'
                        }
                    }
                }
            },
        }
        serie.push(item)
    }
    return serie
}


export function getcharts2(list, plan, id, type) {
    var myChart = echarts.init(document.getElementById(id));
    myChart.clear()
    var time = [];
    var data = [];
    var data2 = [];
    if (list.length == 0) {
        for (var i = 0; i < plan.length; i++) {
            time.push(plan[i].yeartime * 1)
        }
    } else if (plan.length == 0) {
        for (var i = 0; i < list.length; i++) {
            time.push(list[i].yeartime * 1)
        }
    } else {
        for (var i = 0; i < plan.length; i++) {
            time.push(plan[i].yeartime * 1)
        }
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < time.length; j++) {
                if (time.indexOf(list[i].yeartime * 1)!=-1) {
                    break;
                }else{
                    time.push(list[i].yeartime * 1)
                }
            }
            // if (j === time.length) {
            //     time.push(list[i].yeartime * 1)
            // }
        }
    }
    var min;
    for (var i = 0; i < time.length; i++) {
        for (var j = i; j < time.length; j++) {
            if (time[i] > time[j]) {
                min = time[j];
                time[j] = time[i];
                time[i] = min;
            }
        }
    }

    if (type == 0) {
        for(var i in time){
            data.push(""),
            data2.push("")
        }
        for (var i = 0; i < list.length; i++) {
            var q=time.indexOf(list[i].yeartime)
            // var val = {
            //     name: list[i].yeartime,
            //     value: list[i].yearUsage>0?list[i].yearUsage:0
            // }
            data[q]=list[i].yearUsage>0?list[i].yearUsage:0
            // data.push(val)
        }
        for (var i = 0; i < plan.length; i++) {
            var p=time.indexOf(plan[i].yeartime)
            // var val = {
            //     name: plan[i].yeartime,
            //     value: plan[i].value>0?plan[i].value:0
            // }
            data2[p]=plan[i].value>0?plan[i].value:0
            // data2.push(val)
        }
    }
    if (type == 1) {
        time = ["第一季度", "第二季度", "第三季度", "第四季度"]
        for (var key in list) {
            val = {
                name: key,
                value: list[key]>0?list[key]:0
            }
            data.push(val)
        }
        for (var key in plan) {
            val = {
                name: key,
                value: plan[key]>0?plan[key]:0
            }
            data2.push(val)
        }
    }
    if (type == 2) {
        time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        for (var i = 0; i < list.length; i++) {
            var val = {
                name: list[i].monthtime,
                value: list[i].monthUsage>0?list[i].monthUsage:0
            }
            data.push(val)
        }
        for (var i = 0; i < plan.length; i++) {
            var val = {
                name: plan[i].monthtime,
                value: plan[i].value>0?plan[i].value:0
            }
            data2.push(val)
        }
    }
    var option = {
        legend: {
            data: ['计划用量', '实绩用量']
        },
        //柱状图颜色
        
        tooltip: {
            trigger: 'axis'
        },
        
        grid: {
            left: '5%',
            right: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            //日期
            data: time,
            boundaryGap: true,//坐标轴两边留白策略
            lineStyle: {
                type: 'dashed'
            },
            
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
            
        }],
        series: [{
            name: '计划用量',
            type: 'bar',
            barWidth: '10',
            //数据
            data: data2
        }, {
            name: '实绩用量',
            type: 'bar',
            barWidth: '10',
            //数据
            data: data
        }]
    };
    if (id == "charts1") {
        option.color = ['#7FC8FF', '#3abf2d'];

    }
    if (id == "charts2") {
        option.color = ['#7FC8FF', '#0893fd'];

    }
    if (id == "charts3") {
        option.color = ['#7FC8FF', '#3ec3bc'];

    }
    if (id == "charts4") {
        option.color = ['#7FC8FF', '#ffae3d'];

    }
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

