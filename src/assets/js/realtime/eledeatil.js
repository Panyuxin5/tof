var echarts = require('echarts');
//用电实时统计
export function setcircle_charts(date,today){
    var myChart_ht = echarts.init(document.getElementById("Chart"));
    myChart_ht.clear();
    for(var i=0;i<today.length;i++){
        if(today[i]<0){
            today[i]=0
        }
    }
    var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: { //直角坐标系
                containLabel: true,
                left:30,
                top:50,
                bottom:20,
                right:50
            },
            xAxis: {
                type: 'category',
                data:date,
                name:"(H)",//x轴 的标题
                boundaryGap: false,//坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
                nameTextStyle:{
                    padding: [0, 0, 0, -10],
                    fontSize:14,
                    color:'#444444'
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLine: {//坐标轴线
                    show:false,

                },
                axisTick: {//坐标轴刻度
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name:"(kW·h)",
                axisLine: {
                    show:false
                },
                axisTick: {//坐标轴刻度
                    show: false
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
            },
            series: [
                {
                    name:"今日走势",
                    data: today,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#3abf2d",
                            lineStyle:{
                                color:"#3abf2d"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(58,191,45,0.06)"
                            }, {
                                offset: 1,
                                color: "rgba(58,191,45,0)"
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
var myChart_ht_power;
var myChart_ht_I;
var myChart_ht_U;
var myChart_ht_P;
//功率实时统计
export function power_charts(data,apower,reapower,unit,id){
    myChart_ht_power = echarts.init(document.getElementById(id));
    myChart_ht_power.clear();
    for(var i=0;i<apower.length;i++){
        if(apower[i]<0){
            apower[i]=0
        }
    }
    for(var i=0;i<reapower.length;i++){
        if(reapower[i]<0){
            reapower[i]=0
        }
    }
    var option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
            icon: 'circle',
            data: ["有功功率","无功功率"],
            textStyle: {
                color:'#ffffff',
                fontSize:16
            },
            padding: [-2000,0,0,0]
        },
            grid: {
                show: true,
                containLabel: true,//grid 区域是否包含坐标轴的刻度标签
                borderColor: '#38445d',//网格边框颜色
                borderWidth: 0,//网格宽都
                left:30,
                top:50,
                bottom:20,
                right:50
            },
            xAxis: {
                type: 'category',
                data:data,
                name:'(H)',
                boundaryGap: false,
                nameTextStyle:{
                    padding: [0, 0, 0, -10],
                    fontSize:14,
                    color:'#444444'
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLine: {//坐标轴线
                    show:false,

                },
            },
            yAxis: {
                type: 'value',
                name:"("+unit+")",
                axisLine: {
                    show:false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#efefef"
                    }
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
            },
            series: [
                {
                    name:"有功功率",
                    data: apower,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#0893fd",
                            lineStyle:{
                                color:"#0893fd"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(79,149,255,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(79,149,255,0)"
                            }])
                        }
                    }
                },{
                    name:"无功功率",
                    data: reapower,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#3abf2d",
                            lineStyle:{
                                color:"#3abf2d"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(58,191,45,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(58,191,45,0)"
                            }])
                        }
                    }
                }
            ]
        };
    myChart_ht_power.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht_power.resize();
    });
    myChart_ht_I = myChart_ht_power = echarts.init(document.getElementById("power"));
}
//三相电流
export function charts_I(data,a,b,c,id,chartType){
    myChart_ht_I = echarts.init(document.getElementById(id));
    myChart_ht_I.clear();
    for(var i=0;i<a.length;i++){
        if(a[i]<0){
            a[i]=0
        }
    }
    for(var i=0;i<b.length;i++){
        if(b[i]<0){
            b[i]=0
        }
    }
    for(var i=0;i<c.length;i++){
        if(c[i]<0){
            c[i]=0
        }
    }
    var option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                icon: 'circle',
                data: ["A相","B相","C相"],
                textStyle: {
                    color:'#ffffff',
                    fontSize:16
                },
                padding: [-2000,0,0,0]
            },
            grid: {
                show: false,
                containLabel: true,
                left:30,
                top:50,
                bottom:20,
                right:50

            },
            xAxis: {
                type: 'category',
                data:data,
                name:"(H)",//x轴 的标题
                boundaryGap: false,
                nameTextStyle:{
                    padding: [0, 0, 0, -10],
                    fontSize:14,
                    color:'#444444'
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLine: {//坐标轴线
                    show:false,

                },
                axisTick: {//坐标轴刻度
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name:"(A)",
                axisLine: {
                    show:false
                },
                axisTick: {//坐标轴刻度
                    show: false
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
            },
            series: [
                {
                    name:"A相",
                    data: a,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#FF106E",
                            lineStyle:{
                                color:"#FF106E"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,16,110,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,16,110,0)"
                            }])
                        }
                    }
                },{
                    name:"B相",
                    data: b,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#0893fd",
                            lineStyle:{
                                color:"#0893fd"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(35,144,201,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(35,144,201,0)"
                            }])
                        }
                    }
                },{
                    name:"C相",
                    data: c,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#FFae3d",
                            lineStyle:{
                                color:"#FFae3d"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,186,0,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,186,0,0)"
                            }])
                        }
                    }
                }
            ]
        };
    myChart_ht_I.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht_I.resize();
    });
    myChart_ht_I = echarts.init(document.getElementById("iPower"));
}
//三相电压
export function charts_U(data,a,b,c,id,chartType){
    myChart_ht_U = echarts.init(document.getElementById(id));
    myChart_ht_U.clear();
    for(var i=0;i<a.length;i++){
        if(a[i]<0){
            a[i]=0
        }
    }
    for(var i=0;i<b.length;i++){
        if(b[i]<0){
            b[i]=0
        }
    }
    for(var i=0;i<c.length;i++){
        if(c[i]<0){
            c[i]=0
        }
    }
    var option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                icon: 'circle',
                data: ["A相","B相","C相"],
                textStyle: {
                    color:'#ffffff',
                    fontSize:16
                },
                padding: [-2000,0,0,0]
            },
            grid: {
                show: false,//是否显示直角坐标系网格
                containLabel: true,
                left:30,
                top:50,
                bottom:20,
                right:50
            },
            xAxis: {
                type: 'category',
                data:data,
                name:"(H)",//x轴 的标题
                boundaryGap: false,
                nameTextStyle:{
                    padding: [0, 0, 0, -10],
                    fontSize:14,
                    color:'#444444'
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLine: {//坐标轴线
                    show:false,

                },
                axisTick: {//坐标轴刻度
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name:'V',
                axisLine: {
                    show:false
                },
                axisTick: {//坐标轴刻度
                    show: false
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
            },
            series: [
                {
                    name:"A相",
                    data: a,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#FF106E",
                            lineStyle:{
                                color:"#FF106E"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,16,110,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,16,110,0)"
                            }])
                        }
                    }
                },{
                    name:"B相",
                    data: b,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#0893fd",
                            lineStyle:{
                                color:"#0893fd"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(35,144,201,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(35,144,201,0)"
                            }])
                        }
                    }
                },{
                    name:"C相",
                    data: c,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#ffae3d",
                            lineStyle:{
                                color:"#ffae3d"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,186,0,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,186,0,0)"
                            }])
                        }
                    }
                }
            ]
        };
    myChart_ht_U.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht_U.resize();
    });
    myChart_ht_U= echarts.init(document.getElementById("uPower"));
}
// 三相功率
export function charts_P(data,a,b,c,unit,id,chartType){
    myChart_ht_P = echarts.init(document.getElementById(id));
    myChart_ht_P.clear();
    for(var i=0;i<a.length;i++){
        if(a[i]<0){
            a[i]=0
        }
    }
    for(var i=0;i<b.length;i++){
        if(b[i]<0){
            b[i]=0
        }
    }
    for(var i=0;i<c.length;i++){
        if(c[i]<0){
            c[i]=0
        }
    }
    var option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                icon: 'circle',
                data: ["A相","B相","C相"],
                textStyle: {
                    color:'#ffffff',
                    fontSize:16
                },
                padding: [-2000,0,0,0]
            },
            grid: {
                show: false,
                containLabel: true,
                left:30,
                top:50,
                bottom:20,
                right:50
            },
            xAxis: {
                type: 'category',
                data:data,
                name:"(H)",//x轴 的标题
                boundaryGap: false,
                nameTextStyle:{
                    padding: [0, 0, 0, -10],
                    fontSize:14,
                    color:'#444444'
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLine: {//坐标轴线
                    show:false,

                },
                axisTick: {//坐标轴刻度
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name:"("+unit+")",
                axisLine: {
                    show:false
                },
                axisTick: {//坐标轴刻度
                    show: false
                },
                splitLine: {//里面的分割线
                    show: true,
                    lineStyle: {
                        color:'#efefef'
                    }
                },
                axisLabel: {
                    margin:14,
                    textStyle: {
                        color:'#444444'
                    }
                },
            },
            series: [
                {
                    name:"A相",
                    data: a,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#FF106E",
                            lineStyle:{
                                color:"#FF106E"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,16,110,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,16,110,0)"
                            }])
                        }
                    }
                },{
                    name:"B相",
                    data: b,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#0893fd",
                            lineStyle:{
                                color:"#0893fd"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(35,144,201,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(35,144,201,0)"
                            }])
                        }
                    }
                },{
                    name:"C相",
                    data: c,
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                         normal : {
                            color:"#FFae3d",
                            lineStyle:{
                                color:"#FFae3d"
                            }
                        }
                    },areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(255,186,0,0.3)"
                            }, {
                                offset: 1,
                                color: "rgba(255,186,0,0)"
                            }])
                        }
                    }
                }
            ]
        };
    myChart_ht_P.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ht_P.resize();
    });
    myChart_ht_P = echarts.init(document.getElementById("pPower"));
}
// 实时功率选择
export function click_btn(v) {
    if (v == 0) {
     
      myChart_ht_power.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "有功功率" }],
      });
    } else if (v == 1) {
      myChart_ht_power.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "无功功率" }],
      });
    }
  }
  // 三相电流选择
  export function click_I(v) {
    if (v == 0) {
      myChart_ht_I.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "A相" }],
      });
    } else if (v == 1) {
      myChart_ht_I.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "B相" }],
      });
    } else if (v == 2) {
      myChart_ht_I.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "C相" }],
      });
    }
  }
  //三相电压选择
  export function click_U(v) {
    if (v == 0) {
      myChart_ht_U.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "A相" }],
      });
    } else if (v == 1) {
      myChart_ht_U.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "B相" }],
      });
    } else if (v == 2) {
      myChart_ht_U.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "C相" }],
      });
    }
  }
  // 三相功率选择
  export function click_P(v) {
    if (v == 0) {
      myChart_ht_P.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "A相" }],
      });
    } else if (v == 1) {
      myChart_ht_P.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "B相" }],
      });
    } else if (v == 2) {
      myChart_ht_P.dispatchAction({
        type: "legendToggleSelect",
        batch: [{ name: "C相" }],
      });
    }
  }

//点击切换
// $(".lineType").click(function(){
//     if($(this).find('img').hasClass("noC")){
//         $(this).find('img').removeClass("noC");
//     }else{
//         $(this).find('img').addClass("noC");
//     }
// })
// document.querySelectorAll(".lineType").click(function(){
//     if($(this).find('img').hasClass("noC")){
//         $(this).find('img').removeClass("noC");
//     }else{
//         $(this).find('img').addClass("noC");
//     }
// })
// window.onresize = function(){
//     $("#Chart").width($("#powerChart").width());
//     var myChart_ht = echarts.init(document.getElementById("Chart"));
//     myChart_ht.resize();
// }