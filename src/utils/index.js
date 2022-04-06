import axios from 'axios';
import QS from 'qs';

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}


/**
 * @description: 时间戳转换日期时间
 * @param {*} 时间戳
 * @return {*}yyyy-mm-dd hh:mm:ss
 */
export function getYMDHMS(timestamp) {
  let time = new Date(timestamp)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hours = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()

  if (month < 10) { month = '0' + month }
  if (date < 10) { date = '0' + date }
  if (hours < 10) { hours = '0' + hours }
  if (minute < 10) { minute = '0' + minute }
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
}

/**
 * @description: 时间戳转换日期
 * @param {*} 时间戳
 * @return {*}yyyy-mm-dd
 */
export function getYMD(timestamp) {
  let time = new Date(timestamp)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  if (month < 10) { month = '0' + month }
  if (date < 10) { date = '0' + date }
  return year + '-' + month + '-' + date
}


/**
 * @description: 获取2个日期之间的数组列表
 * @param {*} stime 开始日期 2021-04-06
 * @param {*} etime 结束日期 2021-04-08
 * @return {*} ['2021-04-06','2021-04-07','2021-04-08']
 */
export function getdiffdate(stime, etime) {
  //初始化日期列表，数组
  var diffdate = new Array();
  var i = 0;
  //开始日期小于等于结束日期,并循环
  while (stime <= etime) {
    diffdate[i] = stime;

    //获取开始日期时间戳
    var stime_ts = new Date(stime).getTime();
    //console.log('当前日期：' + stime + '当前时间戳：' + stime_ts);

    //增加一天时间戳后的日期
    var next_date = stime_ts + (24 * 60 * 60 * 1000);

    //拼接年月日，这里的月份会返回（0-11），所以要+1
    var next_dates_y = new Date(next_date).getFullYear() + '-';
    var next_dates_m = (new Date(next_date).getMonth() + 1 < 10) ? '0' + (new Date(next_date).getMonth() + 1) + '-' : (new Date(next_date).getMonth() + 1) + '-';
    var next_dates_d = (new Date(next_date).getDate() < 10) ? '0' + new Date(next_date).getDate() : new Date(next_date).getDate();

    stime = next_dates_y + next_dates_m + next_dates_d;

    //增加数组key
    i++;
  }
  return diffdate
}


/**
 * @description: 获取当天 n 天前后的日期
 * @param {*} AddDayCount -1 前一天 1 后一天
 * @return {*} 2020-06-17
 */
export function getnDay(AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
  var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
  return y + "-" + m + "-" + d;
}


export function getCurrentMonthFirstDay() {
  let date = new Date();
  date.setDate(1);
  let month = parseInt(date.getMonth() + 1);
  let day = date.getDate();
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day;
}

//导出文件
export function postExportExcel(url,options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`${url} 请求数据，参数=>`, JSON.stringify(options))
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      url: url, // 请求地址
      data: options, // 参数
      responseType: 'blob' // 表明返回服务器返回的数据类型
    }).then(
      response => {
        resolve(response.data)
        let blob = new Blob([response.data], {
          type: 'application/vnd.ms-excel'
        })
        console.log(blob)
        let disposition = response['headers']['content-disposition']
        let fileName = decodeURI(disposition.split('=')[1])
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, fileName)
        } else {
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = fileName
          link.click()
          //释放内存
          window.URL.revokeObjectURL(link.href)
        }
      },
      err => {
        reject(err)
      }
    )
  })
}

//导出文件
export function getExportExcel(url,options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`${url} 请求数据，参数=>`, JSON.stringify(options))
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      url: url, // 请求地址
      params: options, // 参数
      responseType: 'blob', // 表明返回服务器返回的数据类型
      paramsSerializer: function (options) {
        return QS.stringify(options, { arrayFormat: "indices" });
      },
    }).then(
      response => {
        resolve(response.data)
        let blob = new Blob([response.data], {
          type: 'application/vnd.ms-excel'
        })
        console.log(blob)
        let disposition = response['headers']['content-disposition']
        let fileName = decodeURI(disposition.split('=')[1])
        // let fileName = decodeURI(file.split('.xlsx')[0]) + '.xlsx'
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, fileName)
        } else {
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = fileName
          link.click()
          //释放内存
          window.URL.revokeObjectURL(link.href)
        }
      },
      err => {
        reject(err)
      }
    )
  })
}

//数组对象方法排序: 升序
export function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  })
}


//数组对象方法排序: 降序
export function sort(array, key) {
  return array.sort(function (a, b) {
    return (b[key] - a[key])
  });
}
