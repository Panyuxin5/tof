import { post, get, postJson, Delete, put, putJson, Patch } from "./axios"

/**
 * 报警记录
 */
export const yt_alarm = p => get('/yt-production/alarm/export', p) //导出报警记录
export const yt_alarm_Workshop = p => get('/yt-production/alarm/getMapForWorkshop', p) //车间信息
export const yt_alarm_selectAll = p => get('/yt-production/alarm/selectAll', p) //查询列表
export const yt_alarm_selectProcessList = p => get('/yt-production/alarm/selectProcessList', p) //查询工艺字段

/**
 * 过程监控
 */
export const yt_monitor_allPoints = p => get('/yt-production/monitor/allPoints', p) //全部点位  列表
export const yt_monitor_getMapForWorkshop = p => get('/yt-production/monitor/getMapForWorkshop', p) //获取车间信息
export const yt_monitor_selectProcessList = p => get('/yt-production/monitor/selectProcessList', p) //获取工艺信息
export const yt_monitor_getTrend = p => get('/yt-production/monitor/getTrend', p) //点位趋势
export const yt_monitor_keyPoints = p => get('/yt-production/monitor/keyPoints', p) //关键点位  列表


/**
 * 批次管理
 */
export const yt_batch_post = p => postJson('/yt-production/batch', p) //新增
export const yt_batch_put = p => get('/yt-production/batch', p) //编辑
export const yt_batch_dele = p => Delete('/yt-production/batch', p) //删除
export const yt_batch_sele = p => get('/yt-production/batch/' + p) //查询工艺字段
export const yt_batch_selectAll = p => get('/yt-production/batch/selectAll', p) //分页查询



export const yt_batch_getEffectiveList = p => get('/yt-production//batch/getEffectiveList', p) //指令单号
export const yt_batch_getAllBomNoPage = p => get('/yt-production/batch/getAllBomNoPage', p) //物料清单
export const yt_batch_getProductionBatchId = p => get('/yt-production/batch/getProductionBatchId', p) //获取生产批号
export const yt_batch_getProcessListByWorkshopId = p => get('/yt-production/batch/getProcessListByWorkshopId', p) //获取工艺段

export const yt_batch_traceTheSource = p => get('/yt-production/batch/traceTheSource', p) //列表

export const yt_batch_selectProductList = p => get('/yt-production/batch/selectProductList', p) //查询成品


export const yt_batch_selectOne = p => get('/yt-production/batch/selectOne/' + p) //查询成品





/*
 *统计
 */
export const yt_statistics_getAlarmDisposalStatistics = p => get('/yt-production/statistics/getAlarmDisposalStatistics', p) //生产报警处置率统计
export const yt_statistics_getOutputByCurrentWorkshop = p =>
    get('/yt-production/statistics/getOutputByCurrentWorkshop', p) //产品产量统计
export const yt_statistics_getAlarmSpread = p =>
    get('/yt-production/statistics/getAlarmSpread', p) //关键点位报警分布
export const yt_statistics_getMapForWorkshop = p =>
    get('/yt-production/statistics/getMapForWorkshop', p) //车间
export const yt_statistics_getAlarmStatistics = p =>
    get('/yt-production/statistics/getAlarmStatistics', p) //关键点位

export const yt_statistics_getNetContents = p =>
    get('/yt-production/app/statistics/getNetContents', p) //领导 收率

export const yt_statistics_getNetContentsByCurrentWorkshop = p =>
    get('/yt-production/app/statistics/getNetContentsByCurrentWorkshop', p) //收率

export const yt_statistics_getOutput = p =>
    get('/yt-production/statistics/getOutput', p) //领导产品产量统计



export const yt_statistics_selectProductList = p => get('/yt-production/statistics/selectProductList', p) //查询成品
    // export const yt_statistics_getOutputByCurrentWorkshop = p =>
    //     get('/yt-production/statistics/getOutputByCurrentWorkshop', p) //产品产量统计

export const yt_statistics_selectProcessList = p => get('/yt-production/statistics/selectProcessList', p) //查询工艺段





/*
 *大屏
 */
export const yt_bigScreen_getAllMaterial = p => get('/yt-production/bigScreen/getAllMaterial', p) //查询工艺段

export const yt_bigScreen_getData = p => get('/yt-production/bigScreen/getData', p) //查询工艺段

export const yt_bigScreen_getToDayPointAlarm = p => get('/yt-production/bigScreen/getToDayPointAlarm', p) //当天工艺段查看

export const yt_bigScreen_getTrend = p => get('/yt-production/bigScreen/getTrend', p) //当天工艺段查看的查看
