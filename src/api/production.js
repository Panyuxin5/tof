
import { post, get, postJson, Delete, put, putJson, Patch } from "./axios"

/**
 * 公用接口    模块相关时，不能使用common 公共模块
 */
// export const common_workshop = p => get('/yt-common/common/workshop/selectAll')
/**
 * 获取生产相关的车间接口
*/

export const sc_instruct_workshop = p => get('/yt-production/instruct/workshop')
export const sc_batch_workshop = p => get('/yt-production/batch/workshop')
export const sc_picking_workshop = p => get('/yt-production/picking/workshop')
export const sc_pleasecheck_workshop = p => get('/yt-production/please-check/workshop')  //请检管理
export const sc_alarm_workshop = p => get('/yt-production/alarm/workshop')
export const sc_daily_workshop = p => get('/yt-production/daily/workshop')
export const sc_handovershift_workshop = p => get('/yt-production/handover-shift/workshop')
export const sc_monitorall_workshop = p => get('/yt-production/monitor/all-points/workshop') //过程监控  全部点位
export const sc_monitorkey_workshop = p => get('/yt-production/monitor/key-point/workshop') //过程监控  关键点位
export const sc_monitorconfiguration_workshop = p => get('/yt-production/monitor/configuration/workshop') //过程监控  组态

export const sc_process_workshop = p => get('/yt-production/common/processPoint/getMapForWorkshop') //工艺点位


export const sc_reactor_workshop = p => get('/yt-production/reactor/workshop') //车间设备

export const sc_statistics_workshop = p => get('/yt-production/statistics/yield/workshop')//统计  报错403
/**
 * 计划排产
 */
// export const sc_plan = p => get('/yt-production/plan', p)
// export const sc_plan_save = p => postJson('/yt-production/plan/insert', p)
// export const sc_plan_buyId = p => get('/yt-production/plan/' + p)
// export const sc_plan_del = p => Delete('/yt-production/plan/del/' + p)
// export const sc_plan_update = p => putJson('/yt-production/plan/update', p)
// export const sc_plan_approved = p => Patch('/yt-production/plan/approved/' + p)
// export const sc_plan_product = p => get('/yt-production/plan/getProductMaterialList', p)
export const sc_schedule = p => get('/yt-production/schedule/selectAll', p)//列表
export const sc_schedule_update = p => putJson('/yt-production/schedule/update', p)//修改
export const sc_schedule_insert = p => postJson('/yt-production/schedule/insert', p)//添加
export const sc_schedule_delete = p => Delete('/yt-production/schedule/delete', p)//删除
export const sc_schedule_info = p => get('/yt-production/schedule/'+p)//详情
export const sc_schedule_review = p => postJson('/yt-production/schedule/review?id='+ p)//审核
export const sc_schedule_selectProductList = p => get('/yt-production/schedule/selectProductList', p)//产品列表

/**
 * 生产指令
 */
// export const sc_instruct = p => get('/yt-production/instruct', p)
// export const sc_instruct_plan = p => get('/yt-production/instruct/getChooseList', p)
// export const sc_instruct_product = p => get('/yt-production/instruct/getProductMaterialList', p)
// export const sc_instruct_del = p => Delete('/yt-production/instruct/del/'+ p)
// export const sc_instruct_save = p => postJson('/yt-production/instruct/insert', p)
// export const sc_instruct_xiafa = p => putJson('/yt-production/instruct/issue/'+ p)
// export const sc_instruct_edit = p => get('/yt-production/instruct/reset/'+ p)
// export const sc_instruct_byId = p => get('/yt-production/instruct/' + p)
// export const sc_instruct_guo = p => get('/yt-production/instruct/selectList/' + p)
// export const sc_instruct_sure = p => putJson('/yt-production/instruct/confirm', p)
export const sc_productionOrder_selectAll = p => get('/yt-production/productionOrder/selectAll', p)//列表
export const sc_productionOrder_delete = p => Delete('/yt-production/productionOrder/delete', p)//删除
export const sc_productionOrder_insert = p => postJson('/yt-production/productionOrder/insert', p)//添加
export const sc_productionOrder_info = p => get('/yt-production/productionOrder/selectOne/'+p)//详情
export const sc_productionOrder_sendButton = p => post('/yt-production/productionOrder/sendButton', p)//列表下发
export const sc_productionOrder_sendInsert = p => postJson('/yt-production/productionOrder/sendInsert', p)//添加下发
export const sc_productionOrder_sure = p => post('/yt-production/productionOrder/sure', p)//确认
export const sc_productionOrder_update = p => putJson('/yt-production/productionOrder/update', p)//修改
export const sc_productionOrder_getProductionOrderId = p => get('/yt-production/productionOrder/getProductionOrderId', p)//指令单号
export const sc_productionOrder_getMapForWorkshop = p => get('/yt-production/productionOrder/getMapForWorkshop', p)//车间
export const sc_productionOrder_getAllBomNoPage = p => get('/yt-production/productionOrder/getAllBomNoPage', p)//物料

/**
 * 领料管理
 */
// export const sc_picking = p => get('/yt-production/picking', p)
// export const sc_picking_buyId = p => get('/yt-production/picking/' + p)
// export const sc_getGenerateCode = p => get('/yt-production/picking/getGenerateCode')
// export const sc_picking_save = p => postJson('/yt-production/picking/insert', p)
// export const sc_picking_update = p => putJson('/yt-production/picking/update', p)
// export const sc_picking_pro = p => get('/yt-production/picking/getProductMaterialList', p)
// export const sc_picking_zld = p => get('/yt-production/picking/getCodeList', p)
// export const sc_picking_buyInstruct = p => get('/yt-production/picking/getDataByInstructId',p)
export const sc_picking_delete = p => Delete('/yt-production/pick/picking/delete',p)//删除
export const sc_picking_getMapForWorkshop = p => get('/yt-production/pick/picking/getMapForWorkshop',p)//车间
export const sc_picking_insert = p => postJson('/yt-production/pick/picking/insert',p)//保存
export const sc_picking_selectAll = p => get('/yt-production/pick/picking/selectAll',p)//列表
export const sc_picking_info = p => get('/yt-production/pick/picking/selectOne/'+p)//详情
export const sc_picking_update = p => putJson('/yt-production/pick/picking/update',p)//更新
export const sc_picking_getAllBomNoPage = p => get('/yt-production/pick/picking/getAllBomNoPage',p)//物料+产品
export const sc_picking_getEffectiveList = p => get('/yt-production/pick/picking/getEffectiveList',p)//指令单
export const sc_picking_getPickingCode = p => get('/yt-production/pick/picking/getPickingCode',p)//单号
export const sc_picking_selectMaterialList = p => get('/yt-production/pick/picking/selectMaterialList',p)//物料

/**
 * 领料查看
 */
export const sc_pickingChack_selectAll = p => get('/yt-production/pick/pickingWareHouse/selectAll',p)//列表
export const sc_pickingChack_getMapForWorkshop = p => get('/yt-production/pick/pickingWareHouse/getMapForWorkshop',p)//车间
export const sc_pickingChack_info = p => get('/yt-production/pick/pickingWareHouse/selectOne/'+p)//详情
export const sc_pickingChack_update = p => putJson('/yt-production/pick/pickingWareHouse/update',p)//修改

/**
* 批次管理
*/
export const sc_batch = p => get('/yt-production/batch', p)
export const sc_batch_buyId = p => get('/yt-production/batch/' + p)
export const sc_tracing_buyId = p => get('/yt-production/batch/tracing' + p)
export const sc_batch_product = p => get('/yt-production/batch/getProductMaterialList', p)
export const sc_batch_tracing = p => get('/yt-production/batch/tracing/'+p)
export const sc_batch_update = p => putJson('/yt-production/batch/update',p)

/**
 * 请检管理
 */
export const sc_plcheck = p => get('/yt-production/please-check', p)
export const sc_plcheck_product = p => get('/yt-production/please-check/getProductList', p)
export const sc_plcheck_buyId = p => get('/yt-production/please-check/getByInstructReactorId', p)
export const sc_plcheck_save = p => postJson('/yt-production/please-check/insert', p)
export const sc_plcheck_update = p => putJson('/yt-production/please-check/update', p)
export const sc_pro_buyDate = p => get('/yt-production/please-check/getListByDate', p)
export const sc_Reactors_buyIdDate = p => get('/yt-production/please-check/getReactorsById', p)

/**
 *过程监控
 */
export const sc_monitor_all = p => get('/yt-production/monitor/all-points', p)
export const sc_monitor_process = p => get('/yt-production/monitor/all-points/getProcessProduceList', p)
export const sc_process_echart = p => get('/yt-production/monitor/all-points/gegetmonitorDataByIdstTrend', p)
export const sc_monitor_key = p => get('/yt-production/monitor/key-point', p)
export const getmonitorworkshop = p => get('/yt-production/monitor/configuration/workshop', p)
export const getmonitorProduceList = p => get('/yt-production/monitor/configuration/getProcessProduceList', p)
export const getmonitorconfiguration = p => get('/yt-production/monitor/configuration', p)
export const getmonitorDataByIds = p => get('/yt-production/monitor/configuration/getDataByIds', p)


/**
 * 报警记录
 */
export const sc_alarm = p => get('/yt-production/alarm', p)
export const sc_alarm_process = p => get('/yt-production/alarm/getProcessProduceList', p)


/**
 * 生产报表
 */
export const sc_daily = p => get('/yt-production/daily/selectAllForDaily', p)
export const sc_daily_buyId = p => get('/yt-production/daily/' + p)
export const sc_daily_byReactorId = p => get('/yt-production/daily/getByReactorId', p)
export const sc_daily_electAllForMonth = p => get('/yt-production/daily/selectAllForMonth', p)
export const sc_daily_selectAllForQuarter = p => get('/yt-production/daily/selectAllForQuarter', p)
export const sc_daily_selectAllForYear = p => get('/yt-production/daily/selectAllForYear', p)
export const sc_daily_selectOne = p => get('/yt-production/daily/selectOne/'+p)
export const sc_daily_selectProductList = p => get('/yt-production/daily/selectProductList', p)
export const sc_daily_getMapForWorkshopType2 = p => get('/yt-production/daily/getMapForWorkshopType2', p)


/**
* 考勤记录
*/
export const sc_attendance = p => get('/yt-production/attendance-record', p)
export const sc_group = p => get('/yt-production/attendance-record/groupList')

/**
* 考勤报表
*/
export const sc_atten_report = p => get('/yt-production/attendance-report', p)
/**
* 交接班记录
*/
export const sc_handover = p => get('/yt-production/handover-shift', p)

/**
 * 物料清单接口
 */
export const sc_formula = p => get('/yt-production/common/bom/selectAll', p)
export const sc_formula_pro = p => get('/yt-production/common/bom/selectProductList', p)
export const sc_formula_save = p => postJson('/yt-production/common/bom/insert', p)
export const sc_formula_del = p => Delete('/yt-production/common/bom/delete',p)
export const sc_formula_buyId = p => get('/yt-production/common/bom/' + p)
export const sc_formula_update = p => putJson('/yt-production/common/bom/update', p)
export const sc_formula_yl = p => get('/yt-production/common/bom/selectMaterialList', p)
export const sc_selectProductList = p => get('/yt-production/common/bom/selectProductList', p)



/**
 * 物料管理
 */
export const sc_material = p => get('/yt-production/common/material/selectAll', p)
export const sc_material_insert = p => postJson('/yt-production/common/material/insert', p)
export const sc_material_update = p => putJson('/yt-production/common/material/update', p)
export const sc_material_byid = p => get('/yt-production/common/material/' + p)
export const sc_material_del = p => Delete('/yt-production/common/material/delete',p)


/**
 * 工艺段设置
 */
export const sc_process_d = p => get('/yt-production/common/process/selectAll', p)
export const sc_process_getMapForWorkshop = p => get('/yt-production/common/process/getMapForWorkshop', p)
export const sc_process_selectPointList = p => get('/yt-production/common/process/selectPointList', p)
export const sc_process_save_d = p => postJson('/yt-production/common/process/insert', p)
export const sc_process_update_d = p => putJson('/yt-production/common/process/update', p)
export const sc_process_byId_d = p => get('/yt-production/common/process/' + p)
export const sc_process_del_d = p => Delete('/yt-production/common/process/delete',p)

/**
 * 工艺点位设置
 */
//   export const sc_process_type = p => get('/yt-production/process/getSelectList', p)
export const sc_process = p => get('/yt-production/common/processPoint/selectAll', p)
export const sc_process_del = p => Delete('/yt-production/common/processPoint/delete',p)
export const sc_process_save = p => postJson('/yt-production/common/processPoint/insert', p)
export const sc_process_update = p => putJson('/yt-production/common/processPoint/update', p)
export const sc_process_buyId = p => get('/yt-production/common/processPoint/' + p)
export const sc_process_list = p => get('/yt-production/common/processPoint/getMapForWorkshop', p)

/**
 * 车间设置
 */
export const sc_reactor = p => get('/yt-production/reactor', p)
export const sc_reactor_del = p => Delete('/yt-production/reactor/del/' + p)
export const sc_reactor_save = p => postJson('/yt-production/reactor/insert', p)
export const sc_reactor_update = p => putJson('/yt-production/reactor/update', p)
export const sc_reactor_buyId = p => get('/yt-production/reactor/' + p)
export const sc_reactor_codeList = p => get('/yt-production/reactor/selectList/' + p)


/**
 * 报警统计
 */
export const sc_alarm_statis = p => get('/yt-production/statistics/alarm', p)
export const sc_alarm_chart = p => get('/yt-production/statistics/alarm/chart', p)

/**
 * 产量统计
 */
export const sc_yield_statis = p => get('/yt-production/statistics/yield', p)
export const sc_yield_chart = p => get('/yt-production/statistics/yield/getEchartsList', p)

/**
 * 组态设置
 */
export const getconfiguration = p => get('/yt-production/configuration', p)
export const addtjc = p => postJson('/yt-production/configuration/insert', p)
export const getProcessProduceList = p => get('/yt-production/configuration/getProcessProduceList', p)
export const getworkshop = p => get('/yt-production/configuration/workshop', p)
export const gettjc_detail = p => get('/yt-production/configuration/'+p)
export const edittjc = p => putJson('/yt-production/configuration/update',p)
export const delconfiguration = p => Delete('/yt-production/configuration/del/'+p)
export const getCode_s = p => get('/yt-production/configuration/process',p)
export const getFactValue = p => get('/yt-production/configuration/getDataByIds', p)
