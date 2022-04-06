function buttonDel(data, permission, pers){
	if(permission != ""){
		if ($.inArray(permission, pers) < 0) {
			return "";
		}
	}

	var btn = $("<button class='layui-btn layui-btn-xs' title='删除' onclick='del(\"" + data +"\")'><i class='layui-icon'>&#xe640;</i></button>");
	return btn.prop("outerHTML");
}
// 去左空格
function ltrim(str){
	if(str==""||str==undefined){
		return "";
	}
	var n=0;
	for(var i=0,length=str.length;i<length;i++){
		var c=str.charAt(i);
		if(c!=" "){ //如果为空，就将索引继续添加。 里面有一个空格。
			break;
		}
		n++;
	}
	return str.substring(n);
}
// 去有空格
function rtrim(str){
	if(str==""||str==undefined){
		return "";
	}
	var n=str.length;
	for(var i=str.length-1;i>=0;i--){
		var c=str.charAt(i);
		if(c!=" "){ //如果为空，就将索引继续添加。
			break;
		}
		n--;
	}
	return str.substring(0,n);
}
// 去左右空格
export function trim(str){
	return rtrim(ltrim(str));
}
// 时间格式转化
export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
 
function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

//获取url参数
 function uv(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

// function buttonEdit(href, permission, pers){
// 	console.log(href);
// 	if(permission != ""){
// 		if ($.inArray(permission, pers) < 0) {
// 			return "";
// 		}
// 	}
//
// 	var btn = $("<button class='layui-btn layui-btn-xs' title='编辑' onclick='window.location=\"" + href +"\"'><i class='layui-icon'>&#xe642;</i></button>");
// 	return btn.prop("outerHTML");
// }


function deleteCurrentTab(){
	var lay_id = $(parent.document).find("ul.layui-tab-title").children("li.layui-this").attr("lay-id");
	parent.active.tabDelete(lay_id);
}

//设置默认时间
export function setDate() {
	var date1 = new Date();
	var date2 = new Date();
	date1.setDate(date1.getDate()-7);   //本月初
	// date1.setHours(0, 0, 0, 0);
	// date2.setHours(0, 0, 0, 0);
	var util = layui.util;
	var Date1=date1.getFullYear() + '-' + ((date1.getMonth() + 1)<10?('0'+(date1.getMonth() + 1)):(date1.getMonth() + 1)) + '-' + (date1.getDate()<10?('0'+date1.getDate()):date1.getDate()) + ' ' + '00:00:00';
	// var Date2=date2.getFullYear() + '-' + ((date2.getMonth() + 1)<10?('0'+(date2.getMonth() + 1)):(date2.getMonth() + 1)) + '-' + (date2.getDate()<10?('0'+date2.getDate()):date2.getDate()) + ' ' + (date2.getHours()<10?('0'+date2.getHours()):date2.getHours())+':'+(date2.getMinutes()<10?('0'+date2.getMinutes()):date2.getMinutes())+':'+(date2.getSeconds()<10?('0'+date2.getSeconds()):date2.getSeconds());
	var Date2=date2.getFullYear() + '-' + ((date2.getMonth() + 1)<10?('0'+(date2.getMonth() + 1)):(date2.getMonth() + 1)) + '-' + (date2.getDate()<10?('0'+date2.getDate()):date2.getDate()) + ' ' +'23:59:59';
	$('#beginTime').val(Date1);
	$('#endTime').val(Date2);
}
function add(href) {
	layer.open({
		type: 2,
		title: '编辑',
		shadeClose: true,
		skin:"",
		shade: 0.6,
		area: ["1000px","680px"],
		content:href
	});
}
function buttonEdit(href,permission, pers){
	if(permission != ""){
		if ($.inArray(permission, pers) < 0) {
			return "";
		}
	}

	var btn = $("<button class='layui-btn layui-btn-xs' title='编辑' onclick='details(\""+href+"\")'><i class='layui-icon'>&#xe642;</i></button>");
	return btn.prop("outerHTML");
}
function details(href) {
	layer.open({
		type: 2,
		title: '编辑',
		shadeClose: true,
		skin:"",
		shade: 0.6,
		area: ["1000px","680px"],
		content:href
	});
}
Date.prototype.Format = function(fmt)//日期格式
{
	var o = {
		"M+" : this.getMonth()+1,                 //月份
		"d+" : this.getDate(),                    //日
		"h+" : this.getHours(),                   //小时
		"m+" : this.getMinutes(),                 //分
		"s+" : this.getSeconds(),                 //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S"  : this.getMilliseconds()             //毫秒
	};
	if(/(y+)/.test(fmt))  {
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("("+ k +")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt;
};

Date.prototype.format2 = function(fmt)
{
	var o = {
		"M+" : this.getMonth()+1, //月份
		"d+" : this.getDate(), //日
		"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
		"H+" : this.getHours(), //小时
		"m+" : this.getMinutes(), //分
		"s+" : this.getSeconds(), //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S" : this.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt))
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	return fmt;
};


export function nowtime(){
	var time = new Date().format2("HH:mm:ss");
	var date = new Date().format2("yyyy-MM-dd");
	return date+" "+time;
}

export function todaytime(){
	var date = new Date().format2("yyyy-MM-dd") ;
	return date+" "+"00:00:00";
}

export function getTimeArr(begin,end,type,interval){  //获取两个时间相邻的数组  type:目前可传"yyyy-MM-dd hh" "yyyy-MM-dd" "yyyy-MM"格式的时间
	var arr=[];
	if(type=="yyyy-MM-dd hh:mm"){//设置分钟间隔
		var beginDate=new Date(begin.substr(0,16));
		var endDate=new Date(end.substr(0,16));
		var msCount=interval*60*1000;  //interval的值对应 分钟
	}
	if(type=="yyyy-MM-dd hh:mm:ss"){
		var beginDate=new Date(begin.substr(0,19));
		var endDate=new Date(end.substr(0,19));
		var msCount=interval*1000;  //interval的值对应 秒
	}
	var beginMs=beginDate.getTime();
	var endMs=endDate.getTime();
	for(var i=beginMs;i<=endMs;i+=msCount){
		if(type=="yyyy-MM-dd hh"){
			arr.push(new Date(i).Format(type)+":00");
		}else if(type=="yyyy-MM-dd hh:mm"){
			arr.push(new Date(i).Format(type));
		}
		else if(type=="yyyy-MM-dd"){
			arr.push(new Date(i).Format(type));
		}
		else if(type=="yyyy-MM-dd hh:mm:ss"){
			arr.push(new Date(i).Format(type));
		}
	}
	return arr;
}

export function getMonthArr(sDate,n){//得到最近n个月份的数组
	var arr=[];
	sDate=sDate.slice(0,7);
	arr.push(sDate);
	while(n>1){
		arr.unshift(getBeforMonth(sDate));
		sDate=getBeforMonth(sDate);
		n--;
	}
	return arr;
}
function getBeforMonth(date){
	var lastMonth="";
	var year=date.split("-")[0],month=date.split("-")[1];
	if(month==1){
		lastMonth=(year-1)+"-"+12;
	}else{
		lastMonth=year+"-"+add0(month-1);
	}
	return lastMonth;
}

// 数组去重
export function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}

// 获取主机地址
export function basePath() {
	//获取当前网址，如： http://localhost:80/jflow-web/index.jsp  
	var curPath = window.document.location.href;

	//获取主机地址之后的目录，如： jflow-web/index.jsp  
	var pathName = window.document.location.pathname;

	var pos = curPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:80  
	var localhostPaht = curPath.substring(0, pos);
	//获取带"/"的项目名，如：/jflow-web
	// var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
	// return localhostPaht + "/energy";
	return localhostPaht;
}