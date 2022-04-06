

import { post, get, postJson, Delete, put, putJson } from './axios'
// 实时监控模块
/**
 * 危险工艺
 */
// export const Wx_getCodeData = p => get('/yt-security/realMonitoring/hazardousProcess', p)
// export const Wx_getData = p => get('/yt-security/realMonitoring/hazardousProcess/alarm', p)
// export const Wx_getDetail = p => get('/yt-security/realMonitoring/hazardousProcess/chart', p)
// export const Wx_getDepartmentList = p => get('/yt-security/realMonitoring/hazardousProcess/departmentList', p)
// export const Wx_updateDoname = p => put('/yt-security/realMonitoring/hazardousProcess/dispose', p)
// export const Wx_getMessageByCodel = p => get('/yt-security/realMonitoring/hazardousProcess/operationLog', p)
// export const Wx_getUserList = p => get('/yt-security/realMonitoring/hazardousProcess/userList', p)
// export const Wx_getSubcomList = p => get('/yt-security/realMonitoring/hazardousProcess/subcomList', p)

export const Wx_getCodeData = p => get('/yt-security/realMonitoring/hazardousProcess', p)
export const Wx_getData = p => get('/yt-security/realMonitoring/hazardousProcess/alarm', p)
export const Wx_getDetail = p => get('/yt-security/realMonitoring/hazardousProcess/chart', p)
export const Wx_getDepartmentList = p => get('/yt-security/realMonitoring/hazardousProcess/departmentList', p)
export const Wx_updateDoname = p => put('/yt-security/realMonitoring/hazardousProcess/dispose', p)
export const Wx_getMessageByCodel = p => get('/yt-security/realMonitoring/hazardousProcess/operationLog', p)
export const Wx_getUserList = p => get('/yt-security/realMonitoring/hazardousProcess/userList', p)
export const Wx_getSubcomList = p => get('/yt-security/realMonitoring/hazardousProcess/subcomList', p)

/**
  * 气体报警
  */
export const Qt_getCodeData = p => get('/yt-security/realMonitoring/gasAlarm', p)
export const Qt_getData = p => get('/yt-security/realMonitoring/gasAlarm/alarm', p)
export const Qt_getDetail = p => get('/yt-security/realMonitoring/gasAlarm/chart', p)
export const Qt_updateDoname = p => put('/yt-security/realMonitoring/gasAlarm/dispose', p)
export const Qt_getMessageByCodel = p => get('/yt-security/realMonitoring/gasAlarm/operationLog', p)

/**
  * 消防栓
  */
export const Xfs_getCodeData = p => get('/yt-security/realMonitoring/hydrantAlarm', p)
export const Xfs_getData = p => get('/yt-security/realMonitoring/hydrantAlarm/alarm', p)
export const Xfs_getDetail = p => get('/yt-security/realMonitoring/hydrantAlarm/chart', p)
export const Xfs_updateDoname = p => put('/yt-security/realMonitoring/hydrantAlarm/dispose', p)
export const Xfs_getMessageByCodel = p => get('/yt-security/realMonitoring/hydrantAlarm/operationLog', p)

/**
  * 消防报警
  */
export const Xf_getData = p => get('/yt-security/realMonitoring/fireAlarm/alarm', p)
export const Xf_updateDoname = p => put('/yt-security/realMonitoring/fireAlarm/dispose', p)
export const Xf_getCodeData = p => get('/yt-security/realMonitoring/fireAlarm/list', p)
export const Xf_getMessageByCodel = p => get('/yt-security/realMonitoring/fireAlarm/operationLog', p)

/**
  * 电气报警
  */
export const Dq_getCodeData = p => get('/yt-security/realMonitoring/electricalAlarm', p)
export const Dq_getData = p => get('/yt-security/realMonitoring/electricalAlarm/alarm', p)
export const Dq_getDetail = p => get('/yt-security/realMonitoring/electricalAlarm/chart', p)
export const Dq_getElectricUser = p => get('/yt-security/realMonitoring/electricalAlarm/electricUser', p)
export const Dq_getMessageByCodel = p => get('/yt-security/realMonitoring/electricalAlarm/operationLog', p)

/**
  * 环保处理
  */
export const Hb_getCodeData = p => get('/yt-security/realMonitoring/environment', p)
export const Hb_getData = p => get('/yt-security/realMonitoring/environment/alarm', p)
export const Hb_getDetail = p => get('/yt-security/realMonitoring/environment/chart', p)
export const Hb_updateDoname = p => put('/yt-security/realMonitoring/environment/dispose', p)
export const Hb_getMessageByCodel = p => get('/yt-security/realMonitoring/environment/operationLog', p)

/**
  * 仓库罐区
  */
export const Ck_getCodeData = p => get('/yt-security/realMonitoring/warehouse', p)
export const Ck_getData = p => get('/yt-security/realMonitoring/warehouse/alarm', p)
export const Ck_getDetail = p => get('/yt-security/realMonitoring/warehouse/chart', p)
export const Ck_updateDoname = p => put('/yt-security/realMonitoring/warehouse/dispose', p)
export const Ck_getMessageByCodel = p => get('/yt-security/realMonitoring/warehouse/operationLog', p)

/**
  * 废气废水
  */
export const FsFq_getCodeData = p => get('/yt-security/realMonitoring/wasteMaterial', p)
export const FsFq_getData = p => get('/yt-security/realMonitoring/wasteMaterial/alarm', p)
export const FsFq_getDetail = p => get('/yt-security/realMonitoring/wasteMaterial/chart', p)
export const FsFq_updateDoname = p => put('/yt-security/realMonitoring/wasteMaterial/dispose', p)
export const FsFq_getMessageByCodel = p => get('/yt-security/realMonitoring/wasteMaterial/operationLog', p)

/**
  * 园区点位清单
  */
export const Yq_getAddressAll = p => get('/yt-security/realMonitoring/pointList', p)
export const Yq_getDownload = p => get('/yt-security/realMonitoring/pointList/download', p)

// 故障信息模块
export const GzqtgetCodeData = p => get('/yt-security/faultInformation/gasFault', p)
export const GzsxgetCodeData = p => get('/yt-security/faultInformation/cameraNetwork', p)
export const GzwqgetCodeData = p => get('/yt-security/faultInformation/gatewayFailure', p)
export const GzxfgetCodeData = p => get('/yt-security/faultInformation/fireFailure', p)
export const Gz_Xf_putDispose = p => put('/yt-security/faultInformation/fireFailure/dispose', p)
export const hydrantFaultDispose = p => put('/yt-security/faultInformation/hydrantFault/dispose', p)
/** *** 数据记录 *****/
/**
 * 危险工艺
 */
export const Sjwxget = p => get('/yt-security/dataRecord/hazardousProcess', p)
export const SjwxgetChart = p => get('/yt-security/dataRecord/hazardousProcess/chart', p)
export const SjwxgetCodeList = p => get('/yt-security/dataRecord/hazardousProcess/codeList', p)
export const SjwxgetDownload = p => get('/yt-security/dataRecord/hazardousProcess/download', p)
export const SjwxgetProcessList = p => get('/yt-security/dataRecord/hazardousProcess/processList', p)
/**
 * 气体报警
 */
export const gasAlarm = p => get('/yt-security/dataRecord/gasAlarm', p)
export const gasAlarmChart = p => get('/yt-security/dataRecord/gasAlarm/chart', p)
export const gasAlarmCodeList = p => get('/yt-security/dataRecord/gasAlarm/codeList', p)
export const gasAlarmDownload = p => get('/yt-security/dataRecord/gasAlarm/download', p)

/**
 * 环保处理
 */
export const environment = p => get('/yt-security/dataRecord/environment', p)
export const environmentChart = p => get('/yt-security/dataRecord/environment/chart', p)
export const environmentCodeList = p => get('/yt-security/dataRecord/environment/codeList', p)
export const environmentDownload = p => get('/yt-security/dataRecord/environment/download', p)
export const environmentProcessList = p => get('/yt-security/dataRecord/environment/processList', p)
/**
 * 仓库罐区
 */
export const warehouse = p => get('/yt-security/dataRecord/warehouse', p)
export const warehouseChart = p => get('/yt-security/dataRecord/warehouse/chart', p)
export const warehouseCodeList = p => get('/yt-security/dataRecord/warehouse/codeList', p)
export const warehouseDownload = p => get('/yt-security/dataRecord/warehouse/download', p)
export const warehouseProcessList = p => get('/yt-security/dataRecord/warehouse/processList', p)
/**
 * 废水废气
 */
export const wasteMaterial = p => get('/yt-security/dataRecord/wasteMaterial', p)
export const wasteMaterialColumn = p => get('/yt-security/dataRecord/wasteMaterial/column', p)
export const wasteMaterialDeviceList = p => get('/yt-security/dataRecord/wasteMaterial/deviceList', p)
export const wasteMaterialDownload = p => get('/yt-security/dataRecord/wasteMaterial/download', p)

/**
 * 消防栓报警
 */
export const hydrant = p => get('/yt-security/dataRecord/hydrant', p)
export const hydrantChart = p => get('/yt-security/dataRecord/hydrant/chart', p)
export const hydrantCodeList = p => get('/yt-security/dataRecord/hydrant/codeList', p)
export const hydrantDownload = p => get('/yt-security/dataRecord/hydrant/download', p)

/** *** 历史记录 *****/
/**
 * 仓库罐区
 */
export const Lsckgqbjgetlist = p => get('/yt-security/history/warehouse', p)
export const LsckgqbjDownload = p => get('/yt-security/history/warehouse/download', p)
export const LsckgqbjOperationLog = p => get('/yt-security/history/warehouse/operationLog', p)

/**
 * 危险工艺
 */
export const Lswxgybjgetlist = p => get('/yt-security/history/hazardousProcess', p)
export const LswxgybjDetail = p => get('/yt-security/history/hazardousProcess/operationLog', p)
export const LswxgybjDownload = p => get('/yt-security/history/hazardousProcess/download', p)

/**
 * 废水废气
 */
export const Lsfsfqbjgetlist = p => get('/yt-security/history/wasteMaterial', p)
export const LsfsfqbjDownload = p => get('/yt-security/history/wasteMaterial/download', p)
export const LsfsfqbjOperationLog = p => get('/yt-security/history/wasteMaterial/operationLog', p)

/**
 * 摄像头网络故障
 */
export const Lssxtwlgzgetlist = p => get('/yt-security/history/cameraNetwork', p)
export const LssxtwlgzDownload = p => get('/yt-security/history/cameraNetwork/download', p)

/**
 * 气体报警
 */
export const Lsqtbjgetlist = p => get('/yt-security/history/gasAlarm', p)
export const LsqtbjgetSubcom = p => post('/yt-security/history/gasAlarm/getSubcom', p)
export const LsqtbjDownload = p => get('/yt-security/history/gasAlarm/download', p)
export const LsqtbjOperationLog = p => get('/yt-security/history/gasAlarm/operationLog', p)

/**
 * 气体故障
 */
export const Lsqtgzgetlist = p => get('/yt-security/history/gasFault', p)
export const LsqtgzgetSubcom = p => post('/yt-security/history/gasFault/getSubcom', p)
export const LsqtgzDownload = p => get('/yt-security/history/gasFault/download', p)

/**
 * 消防报警
 */
export const Lsxfbjgetlist = p => get('/yt-security/history/fireAlarm', p)
export const LsxfbjDownload = p => get('/yt-security/history/fireAlarm/download', p)
export const LsxfbjOperationLog = p => get('/yt-security/history/fireAlarm/operationLog', p)

/**
 * 消防故障
 */
export const Lsxfgzgetlist = p => get('/yt-security/history/fireFault', p)
export const LsxfgzDownload = p => get('/yt-security/history/fireFault/download', p)

/**
 * 消防栓故障
 */
export const GzxfsgetCodeData = p => get('/yt-security/faultInformation/hydrantFault', p)

/**
 * 环保处理报警
 */
export const Lshjclbjgetlist = p => get('/yt-security/history/environment', p)
export const LshjclbjDownload = p => get('/yt-security/history/environment/download', p)
export const LshjclbjOperationLog = p => get('/yt-security/history/environment/operationLog', p)

/**
 * 电气报警
 */
export const Lsdqbjgetlist = p => get('/yt-security/history/electricalAlarm', p)
export const LsdqbjDownload = p => get('/yt-security/history/electricalAlarm/download', p)
export const LsdqbjOperationLog = p => get('/yt-security/history/electricalAlarm/operationLog', p)

/**
 * 消防栓报警
 */
export const Lsxfsbjgetlist = p => get('/yt-security/history/hydrantAlarm', p)
export const LsxfsbjDownload = p => get('/yt-security/history/hydrantAlarm/download', p)
export const LsxfsbjOperationLog = p => get('/yt-security/history/hydrantAlarm/operationLog', p)

/** *** 基础数据 *****/
export const getSubcom = p => get('/yt-security/realMonitoring/hazardousProcess/subcomList', p)
// 所有排序
export const getProcessPhases = p => get('/yt-security/basicData/hazardousProcess/pointTable/addressList', p)
export const processSaveSort = p => put('/yt-security/basicData/hazardousProcess/pointTable/sort', p)

export const getgasPhases = p => get('/yt-security/basicData/gasSettingaddressList', p)
export const gasSaveSort = p => put('/yt-security/basicData/gasSetting/sort', p)

export const getfirePhases = p => get('/yt-security/basicData/fireSetting/addressList', p)
export const fireSaveSort = p => put('/yt-security/basicData/fireSetting/sort', p)

export const getelectricalPhases = p => get('/yt-security/basicData/electricalSettings/addressList', p)
export const electricalSaveSort = p => put('/yt-security/basicData/electricalSettings/sort', p)

export const getwarehousePhases = p => get('/yt-security/basicData/warehouse/pointTable/addressList', p)
export const warehouseSaveSort = p => put('/yt-security/basicData/warehouse/pointTable/sort', p)

export const getenvironmentPhases = p => get('/yt-security/basicData/environment/pointTable/addressList', p)
export const environmentSaveSort = p => put('/yt-security/basicData/environment/pointTable/sort', p)

export const getwasteMaterialPhases = p => get('/yt-security/basicData/wasteMaterial/addressList', p)
export const wasteMaterialSaveSort = p => put('/yt-security/basicData/wasteMaterial/sort', p)

// 危险工艺首页
export const getProcessSection = p => get('/yt-security/basicData/hazardousProcess/processSection', p)
export const deleteProcessSection = p => Delete('/yt-security/basicData/hazardousProcess/processSection/' + p.id)
export const getPointTable = p => get('/yt-security/basicData/hazardousProcess/pointTable', p)
export const getProcessSubcom = p => post('/yt-security/basicData/hazardousProcess/processSection/getSubcom', p)
export const deletePointTable = p => Delete('/yt-security/basicData/hazardousProcess/pointTable/' + p.id)
export const wxjx = p => put('/yt-security/basicData/hazardousProcess/pointTable/state', p)
// 危险工艺 工艺段添加页面
export const addProcessSection = p => postJson('/yt-security/basicData/hazardousProcess/processSection', p)
export const editProcessSection = p => putJson('/yt-security/basicData/hazardousProcess/processSection', p)
export const getIdProcessSection = p => get('/yt-security/basicData/hazardousProcess/processSection/' + p.id)
// 危险工艺 工艺点位添加页面
export const getProduceProcesss = p => get('/yt-security/basicData/hazardousProcess/processSection/processsList', p)
export const addPointTable = p => postJson('/yt-security/basicData/hazardousProcess/pointTable', p)
export const getIdPointTable = p => get('/yt-security/basicData/hazardousProcess/pointTable/' + p.id)
export const editPointTable = p => putJson('/yt-security/basicData/hazardousProcess/pointTable', p)

// 气体设置首页
export const jcsjaddressTable = p => get('/yt-security/basicData/gasSetting', p)
export const jcsjaddressTable_del = p => Delete('/yt-security/basicData/gasSetting/' + p.id)



// 气体设置  添加页面
export const getalarmPersons_add = p => postJson('/yt-security/basicData/gasSetting', p)
export const getalarmPersons_edit = p => putJson('/yt-security/basicData/gasSetting', p)
export const gasgetdetail = p => get('/yt-security/basicData/gasSetting/' + p.id)
export const gas_isRight = p => get('/yt-security/basicData/gasSetting/repeat', p)

// 消防设置首页
export const getFireSection = p => get('/yt-security/basicData/fireSetting', p)
export const getFireSubcom = p => post('/yt-security/basicData/fireSetting/getSubcom', p)
export const deleteFireSection = p => Delete('/yt-security/basicData/fireSetting/' + p.id)
// 消防设置 添加页面
export const addFireSection = p => postJson('/yt-security/basicData/fireSetting', p)
export const editFireSection = p => putJson('/yt-security/basicData/fireSetting', p)
export const getIdFireSection = p => get('/yt-security/basicData/fireSetting/' + p.id)

// 电气设置 首页
export const geteleSection = p => get('/yt-security/basicData/electricalSettings', p)
export const geteleSubcom = p => post('/yt-security/basicData/electricalSettings/getSubcom', p)
export const deleteeleSection = p => Delete('/yt-security/basicData/electricalSettings/' + p.id)
// 电气设置 添加
export const addeleSection = p => postJson('/yt-security/basicData/electricalSettings', p)
export const editeleSection = p => putJson('/yt-security/basicData/electricalSettings', p)
export const getIdeleSection = p => get('/yt-security/basicData/electricalSettings/' + p.id)

// 环保处理 首页
export const getenProcessSection = p => get('/yt-security/basicData/environment/processSection', p)
export const getenSubcom = p => post('/yt-security/basicData/environment/processSection/getSubcom', p)
export const deleteenProcessSection = p => Delete('/yt-security/basicData/environment/processSection/' + p.id)
export const getenPointTable = p => get('/yt-security/basicData/environment/pointTable', p)
export const deleteenPointTable = p => Delete('/yt-security/basicData/environment/pointTable/' + p.id)
export const hbjx = p => put('/yt-security/basicData/environment/pointTable/state', p)
// 环保处理 新增工艺段
export const addenProcessSection = p => postJson('/yt-security/basicData/environment/processSection', p)
export const editenProcessSection = p => putJson('/yt-security/basicData/environment/processSection', p)
export const getIdenProcessSection = p => get('/yt-security/basicData/environment/processSection/' + p.id)
// 环保处理 新增工艺点位
export const getenProduceProcesss = p => get('/yt-security/basicData/environment/processSection/processsList', p)
export const addenPointTable = p => postJson('/yt-security/basicData/environment/pointTable', p)
export const editenPointTable = p => putJson('/yt-security/basicData/environment/pointTable', p)
export const getIdenPointTable = p => get('/yt-security/basicData/environment/pointTable/' + p.id)

// 仓库罐区 首页
export const getwareProcessSection = p => get('/yt-security/basicData/warehouse/processSection', p)
export const getwareProcessSubcom = p => post('/yt-security/basicData/warehouse/processSection/getSubcom', p)
export const deletewareProcessSection = p => Delete('/yt-security/basicData/warehouse/processSection/' + p.id)
export const getwarePointTable = p => get('/yt-security/basicData/warehouse/pointTable', p)
export const deletewarePointTable = p => Delete('/yt-security/basicData/warehouse/pointTable/' + p.id)
export const ckjx = p => put('/yt-security/basicData/warehouse/pointTable/state', p)
// 仓库罐区 新增工艺点位
export const getwareProduceProcesss = p => get('/yt-security/basicData/warehouse/pointTable/processBySubcom', p)
export const addwarePointTable = p => postJson('/yt-security/basicData/warehouse/pointTable', p)
export const editwarePointTable = p => putJson('/yt-security/basicData/warehouse/pointTable', p)
export const getIdwarePointTable = p => get('/yt-security/basicData/warehouse/pointTable/' + p.id)
// 仓库罐区 新增工艺段
export const addwareProcessSection = p => postJson('/yt-security/basicData/warehouse/processSection', p)
export const editwareProcessSection = p => putJson('/yt-security/basicData/warehouse/processSection', p)
export const getIdwareProcessSection = p => get('/yt-security/basicData/warehouse/processSection/' + p.id)

// 废水废电
export const getfsfdList = p => get('/yt-security/basicData/wasteMaterial', p)
export const DelfsfdList = p => Delete('/yt-security/basicData/wasteMaterial/' + p)
export const jianxiuApi = p => put('/yt-security/basicData/wasteMaterial/state', p)
// 废水废电 添加页面
export const fsfdIsRight = p => get('/yt-security/basicData/wasteMaterial/repeat', p)
export const SavefsfdList = p => postJson('/yt-security/basicData/wasteMaterial', p)
export const getfsfd = p => get('/yt-security/basicData/wasteMaterial/' + p)
export const updatefsfdList = p => putJson('/yt-security/basicData/wasteMaterial', p)

// 消防栓设置首页
export const gethydrantSection = p => get('/yt-security/basicData/hydrant', p)
export const gethydrantSubcom = p => post('/yt-security/basicData/hydrant/getSubcom', p)
export const deletehydrantSection = p => Delete('/yt-security/basicData/hydrant/' + p.id)
// 消防栓设置 添加页面
export const addhydrantSection = p => postJson('/yt-security/basicData/hydrant', p)
export const edithydrantSection = p => putJson('/yt-security/basicData/hydrant', p)
export const getIdhydrantSection = p => get('/yt-security/basicData/hydrant/' + p.id)

// 摄像头设置 首页
export const definitionTable_getList = p => get('/yt-security/basicData/cameraSetting/definitionTable', p)
export const list_getList_gas = p => get('/yt-security/basicData/cameraSetting/gas', p)
export const list_getList_fire = p => get('/yt-security/basicData/cameraSetting/fire', p)
export const list_getList_produce = p => get('/yt-security/basicData/cameraSetting/produce', p)
export const list_getList_depottankfield = p => get('/yt-security/basicData/cameraSetting/depottankfield', p)
export const list_getList_wastewater = p => get('/yt-security/basicData/cameraSetting/wastewater', p)
export const list_getList_env = p => get('/yt-security/basicData/cameraSetting/env', p)
export const list_getList_electric = p => get('/yt-security/basicData/cameraSetting/electric', p)
export const list_edit = p => put('/yt-security/basicData/cameraSetting/gas', p)
export const ca_getAddressList = p => post('/yt-security/basicData/cameraSetting/gas/channelAddressList', p)
export const getsxtSubcom = p => post('/yt-security/basicData/cameraSetting/definitionTable/getSubcom', p)
export const definitionTable_del = p => Delete('/yt-security/basicData/cameraSetting/definitionTable/' + p.id)
export const list_del = p => Delete('/yt-security/basicData/cameraSetting/gas', p)
// 摄像头设置 添加页面
export const definitionTable_add = p => postJson('/yt-security/basicData/cameraSetting/definitionTable', p)
export const definitionTable_edit = p => putJson('/yt-security/basicData/cameraSetting/definitionTable', p)
export const definitionTable_detail = p => get('/yt-security/basicData/cameraSetting/definitionTable/' + p.id)
export const definitionTable_isRight = p => get('/yt-security/basicData/cameraSetting/definitionTable/repeat', p)
// 摄像头设置 添加各类摄像头页面
export const list_add_gas = p => post('/yt-security/basicData/cameraSetting/gas', p)
export const list_add_depottankfield = p => post('/yt-security/basicData/cameraSetting/depottankfield', p)
export const list_add_produce = p => post('/yt-security/basicData/cameraSetting/produce', p)
export const list_add_wastewater = p => post('/yt-security/basicData/cameraSetting/wastewater', p)
export const list_add_env = p => post('/yt-security/basicData/cameraSetting/env', p)
export const list_add_electric = p => post('/yt-security/basicData/cameraSetting/electric', p)
export const list_add_fire = p => post('/yt-security/basicData/cameraSetting/fire', p)
export const list_detail = p => get('/yt-security/basicData/cameraSetting/gas/detail', p)

// 时段设置
export const Jcsjsjszgetlist = p => get('/yt-security/basicData/timeSetting', p)
export const Delsjszlist = p => Delete('/yt-security/basicData/timeSetting/' + p)
// 时段设置 时段添加页面
export const Savesjszlist = p => postJson('/yt-security/basicData/timeSetting', p)
export const Putsjszlist = p => putJson('/yt-security/basicData/timeSetting/', p)

// 报警对象设置
export const Jcsjbjdxgetlist = p => get('/yt-security/basicData/objectSetting', p)
export const DelJcsjbjdxlist = p => Delete('/yt-security/basicData/objectSetting/' + p)
// 报警对象设置  添加页面
export const SaveJcsjbjdxlist = p => postJson('/yt-security/basicData/objectSetting', p)
export const Getjcsjbjdx = p => get('/yt-security/basicData/objectSetting/' + p)
export const PutJcsjbjdxlist = p => putJson('/yt-security/basicData/objectSetting', p)

//CAD
export const getpageInitaddress = p => get('/yt-security/basicData/facilities/address/pageInit', p)
export const getpageInitinfo = p => get('/yt-security/basicData/facilities/info/pageInit', p)
export const saveinfo = p => postJson('/yt-security/basicData/facilities/info', p)
export const getWorkshopListinfo = p => get('/yt-security/basicData/facilities/info/getWorkshopList', p)
export const Deleteinfo= p => Delete('/yt-security/basicData/facilities/info' ,p)
export const getDetailByIdinfo = p => get('/yt-security/basicData/facilities/info', p)
export const editinfo = p => putJson('/yt-security/basicData/facilities/info', p)
export const getAddressListaddress = p => get('/yt-security/basicData/facilities/address/getAddressList', p)
export const saveaddress = p => postJson('/yt-security/basicData/facilities/address', p)
export const Deleteaddress= p => Delete('/yt-security/basicData/facilities/address' ,p)
export const getDetailByIdinfos= p => get('/yt-security/basicData/facilities/info/getDetailById', p)

/** *** 巡检统计分析 *****/
// 巡检明细
export const getXjDetails = p => get('/yt-security/riskStatisticalAnalysis/detail', p)
export const getXjRisk = p => get('/yt-security/riskStatisticalAnalysis/detail/risk', p)
export const getXjSiti = p => get('/yt-security/riskStatisticalAnalysis/detail/siti', p)
// 巡检统计
// export const getXjtjDetails = p => get('/yt-security/riskStatisticalAnalysis/statistics/chart', p)
export const getTypeList = p => get('/yt-security/inspection/types/all', p)
// 工作统计
export const getWorkDetails = p => get('/yt-security/riskStatisticalAnalysis/work/chart', p)
export const listRiskDepartment = p => get('/yt-security/inspection/types/listRiskDepartment', p)

export const getXjtjDetails = p => get('/yt-security/inspection/statistics/riskchart', p)
export const getyhDetails = p => get('/yt-security/inspection/statistics/sitichart', p)
export const getXjrytjDetails = p => get('/yt-security/inspection/statistics/userchart', p)




//自定义摄像头
export const ZDY_definitionTable_g = p => get('/yt-security/basicData/cameraSetting/definitionTable',p)
export const ZDY_definitionTable_po = p => postJson('/yt-security/basicData/cameraSetting/definitionTable',p)
export const ZDY_definitionTable_p = p => putJson('/yt-security/basicData/cameraSetting/definitionTable',p)
export const ZDY_definitionTableget = p => get('/yt-security/basicData/cameraSetting/definitionTable/'+p)
export const ZDY_definitionTable_d = p => Delete('/yt-security/basicData/cameraSetting/definitionTable/'+p)
export const ZDY_repeat = p => get('/yt-security/basicData/cameraSetting/definitionTable/repeat',p)

//电器摄像头
export const DQ_electric_g = p => get('/yt-security/basicData/cameraSetting/electric',p)
export const DQ_electric_po = p => post('/yt-security/basicData/cameraSetting/electric',p)
export const DQ_electric_p = p => put('/yt-security/basicData/cameraSetting/electric',p)
export const DQ_electric_d = p => Delete('/yt-security/basicData/cameraSetting/electric',p)
export const DQ_channelAddressList_po = p => postJson('/yt-security/basicData/cameraSetting/electric/channelAddressList?type='+p.type)
export const DQ_detail = p => get('/yt-security/basicData/cameraSetting/electric/detail',p)

//仓库罐区摄像头
export const GQ_depottankfield_g = p => get('/yt-security/basicData/cameraSetting/depottankfield',p) //分页
export const GQ_depottankfield_po = p => post('/yt-security/basicData/cameraSetting/depottankfield',p) //添加
export const GQ_depottankfield_p = p => put('/yt-security/basicData/cameraSetting/depottankfield',p) //编辑
export const GQ_depottankfield_d = p => Delete('/yt-security/basicData/cameraSetting/depottankfield',p) //删除
export const GQ_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/depottankfield/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const GQ_detail_g = p => get('/yt-security/basicData/cameraSetting/depottankfield/detail',p) //详情

//危险工艺摄像头
export const WX_produce_g = p => get('/yt-security/basicData/cameraSetting/produce',p) //分页
export const WX_produce_po = p => post('/yt-security/basicData/cameraSetting/produce',p) //添加
export const WX_produce_p = p => put('/yt-security/basicData/cameraSetting/produce',p) //编辑
export const WX_produce_d = p => Delete('/yt-security/basicData/cameraSetting/produce',p) //删除
export const WX_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/produce/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const WX_detail_g = p => get('/yt-security/basicData/cameraSetting/produce/detail',p) //详情


//废水废气摄像头
export const FSFQ_wastewater_g = p => get('/yt-security/basicData/cameraSetting/wastewater',p) //分页
export const FSFQ_wastewater_po = p => post('/yt-security/basicData/cameraSetting/wastewater',p) //添加
export const FSFQ_wastewater_p = p => put('/yt-security/basicData/cameraSetting/wastewater',p) //编辑
export const FSFQ_wastewater_d = p => Delete('/yt-security/basicData/cameraSetting/wastewater',p) //删除
export const FSFQ_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/wastewater/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const FSFQ_detail_g = p => get('/yt-security/basicData/cameraSetting/wastewater/detail',p) //详情


//气体摄像头
export const QT_gas_g = p => get('/yt-security/basicData/cameraSetting/gas',p) //分页
export const QT_gas_po = p => post('/yt-security/basicData/cameraSetting/gas',p) //添加
export const QT_gas_p = p => put('/yt-security/basicData/cameraSetting/gas',p) //编辑
export const QT_gas_d = p => Delete('/yt-security/basicData/cameraSetting/gas',p) //删除
export const QT_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/gas/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const QT_detail_g = p => get('/yt-security/basicData/cameraSetting/gas/detail',p) //详情

//消防摄像头
export const XF_fire_g = p => get('/yt-security/basicData/cameraSetting/fire',p) //分页
export const XF_fire_po = p => post('/yt-security/basicData/cameraSetting/fire',p) //添加
export const XF_fire_p = p => put('/yt-security/basicData/cameraSetting/fire',p) //编辑
export const XF_fire_d = p => Delete('/yt-security/basicData/cameraSetting/fire',p) //删除
export const XF_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/fire/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const XF_detail_g = p => get('/yt-security/basicData/cameraSetting/fire/detail',p) //详情

//环保摄像头
export const HB_env_g = p => get('/yt-security/basicData/cameraSetting/env',p) //分页
export const HB_env_po = p => post('/yt-security/basicData/cameraSetting/env',p) //添加
export const HB_env_p = p => put('/yt-security/basicData/cameraSetting/env',p) //编辑
export const HB_env_d = p => Delete('/yt-security/basicData/cameraSetting/env',p) //删除
export const HB_channelAddressList = p => postJson('/yt-security/basicData/cameraSetting/env/channelAddressList?type='+p.type) //筛选摄像头点位列表
export const HB_detail_g = p => get('/yt-security/basicData/cameraSetting/env/detail',p) //详情

//人员
export const ry_doorpresent = p => get('/yt-security/location/doorPresent',p) //厂内人员
export const ry_allcount = p => get('/yt-security/location/doorPresent/allcount',p) //总人员
export const ry_doorpresent_download = p => get('/yt-security/location/doorPresent/download',p) //厂内人员导出
export const ry_doorpecord = p => get('/yt-security/location/doorRecord',p) //出入记录
export const ry_doorpecord_download = p => get('/yt-security/location/doorRecord/download',p) //出入记录导出
export const ry_doorpecord_listRiskDepartment = p => get('/yt-security/location/doorRecord/listRiskDepartment',p) //出入记录导出
export const ry_doorstatisticst = p => get('/yt-security/location/doorStatistics',p) //统计

//应急管理
export const jywz_list = p => get('/yt-security/rescue/material/list',p) //救援物质
export const jywz_add = p => post('/yt-security/rescue/material/add?name='+p.name+'&address='+p.address+'&num='+p.num+'&comment='+p.comment,p) //救援物质 新增
export const jywz_update = p => put('/yt-security/rescue/material/update',p) //救援物质 编辑
export const jywz_delete = p => Delete('/yt-security/rescue/material/delete',p) //救援物质 删除
export const jywz_deleteMany = p => Delete('/yt-security/rescue/material/deleteMany',p) //救援物质 删除更多
export const jywz_detail = p => get('/yt-security/rescue/material/detail',p) //救援物质 详情
export const yjya_list = p => get('/yt-security/rescue/emergencyPlan/list',p) //应急预案
export const yjya_add = p => postJson('/yt-security/rescue/emergencyPlan/add',p) //应急预案 添加
export const yjya_detail = p => get('/yt-security/rescue/emergencyPlan/detail',p) //应急预案 添加
export const yjya_delete = p => Delete('/yt-security/rescue/emergencyPlan/delete',p) //应急预案 删除
export const yjya_deleteMany = p => Delete('/yt-security/rescue/emergencyPlan/deleteMany',p) //应急预案 多删除
export const yjya_update = p => putJson('/yt-security/rescue/emergencyPlan/update',p) //应急预案 跟新
export const yjya_getSubcom = p => post('/yt-security/rescue/emergencyPlan/getSubcom',p) //应急预案 车间
export const yjrygl_list = p => get('/yt-security/rescue/emergencypeople',p) //应急人员
export const yjrygl_post = p => postJson('/yt-security/rescue/emergencypeople',p) //应急人员 保存
export const yjrygl_update = p => putJson('/yt-security/rescue/emergencypeople',p) //应急人员 修改
export const yjrygl_delete = p => Delete('/yt-security/rescue/emergencypeople',p) //应急人员 删除
export const yjrygl_detail = p => get('/yt-security/rescue/emergencypeople/detail',p) //应急人员 详情

//特殊作业


export const getticketEarth = p => get('/yt-security/ticket/ticketEarth',p) //动土作业列表
export const getticketHot = p => get('/yt-security/ticket/ticketHot',p) //动火作业列表
export const getticketSpace = p => get('/yt-security/ticket/ticketSpace',p) //受限空间列表
export const getticketHoisting = p => get('/yt-security/ticket/ticketHoisting',p) //吊装作业列表
export const getticketBreaking = p => get('/yt-security/ticket/ticketBreaking',p) //断路作业列表
export const getticketBlankoff = p => get('/yt-security/ticket/ticketBlankoff',p) //盲板列表
export const getticketHeight = p => get('/yt-security/ticket/ticketHeight',p) //高空列表
export const getticketElec = p => get('/yt-security/ticket/ticketElec',p) //临时用电

export const getAnalyzehot = p => get('/yt-security/ticket/ticketHot/getAnalyze',p)
export const getTickethot = p => get('/yt-security/ticket/ticketHot/getTicket',p)
export const getPeoplehot = p => get('/yt-security/ticket/ticketHot/getPeople',p)
export const getSecurityCheckhot = p => get('/yt-security/ticket/ticketHot/getSecurityCheck',p)
export const getFinishhot = p => get('/yt-security/ticket/ticketHot/getFinish',p)
export const getLogContent = p => get('/yt-security/ticket/app/getLogContent',p)

export const getAnalyzespace= p => get('/yt-security/ticket/ticketSpace/analysis',p)
export const getTicketspace = p => get('/yt-security/ticket/ticketSpace/getTicket',p)
export const getPeoplespace = p => get('/yt-security/ticket/ticketSpace/getPeople',p)
export const getSecurityCheckspace = p => get('/yt-security/ticket/ticketSpace/getSecurityCheck',p)
export const getFinishspace = p => get('/yt-security/ticket/ticketSpace/getFinish',p)

export const getTicketblankoff = p => get('/yt-security/ticket/ticketBlankoff/getTicket',p)
export const getPeopleblankoff = p => get('/yt-security/ticket/ticketBlankoff/getPeople',p)
export const getSecurityCheckblankoff = p => get('/yt-security/ticket/ticketBlankoff/getSecurityCheck',p)
export const getFinishblankoff = p => get('/yt-security/ticket/ticketBlankoff/getFinish',p)

export const getTicketheight = p => get('/yt-security/ticket/ticketHeight/getTicket',p)
export const getPeopleheight = p => get('/yt-security/ticket/ticketHeight/getPeople',p)
export const getSecurityCheckheight = p => get('/yt-security/ticket/ticketHeight/getSecurityCheck',p)
export const getFinishheight= p => get('/yt-security/ticket/ticketHeight/getFinish',p)

export const getTickethoisting = p => get('/yt-security/ticket/ticketHoisting/getTicket',p)
export const getPeoplehoisting = p => get('/yt-security/ticket/ticketHoisting/getPeople',p)
export const getSecurityCheckhoisting = p => get('/yt-security/ticket/ticketHoisting/getSecurityCheck',p)
export const getFinishhoisting= p => get('/yt-security/ticket/ticketHoisting/getFinish',p)

export const getTicketelec = p => get('/yt-security/ticket/ticketElec/getTicket',p)
export const getPeopleelec = p => get('/yt-security/ticket/ticketElec/getPeople',p)
export const getSecurityCheckelec = p => get('/yt-security/ticket/ticketElec/getSecurityCheck',p)
export const getFinishelec= p => get('/yt-security/ticket/ticketElec/getFinish',p)

export const getTicketbreaking = p => get('/yt-security/ticket/ticketBreaking/getTicket',p)
export const getPeoplebreaking = p => get('/yt-security/ticket/ticketBreaking/getPeople',p)
export const getSecurityCheckbreaking = p => get('/yt-security/ticket/ticketBreaking/getSecurityCheck',p)
export const getFinishbreaking= p => get('/yt-security/ticket/ticketBreaking/getFinish',p)


export const getTicketearth = p => get('/yt-security/ticket/ticketEarth/getTicket',p)
export const getPeopleearth = p => get('/yt-security/ticket/ticketEarth/getPeople',p)
export const getSecurityCheckearth = p => get('/yt-security/ticket/ticketEarth/getSecurityCheck',p)
export const getFinishearth= p => get('/yt-security/ticket/ticketEarth/getFinish',p)


export const aqcs_list = p => get('/yt-security/ticket/ticketSecurity',p) //安全措施
export const aqcs_info = p => get('/yt-security/ticket/ticketSecurity/'+p) //安全措施 id
export const aqcs_post = p => postJson('/yt-security/ticket/ticketSecurity',p) //安全措施 保存
export const aqcs_put = p => putJson('/yt-security/ticket/ticketSecurity',p) //安全措施 编辑
export const aqcs_delete = p => Delete('/yt-security/ticket/ticketSecurity',p) //安全措施 删除
export const aqcs_revert = p => post('/yt-security/ticket/ticketSecurity/revert',p) //安全措施 重置
export const qzlc_list = p => get('/yt-security/ticket/ticketFlowpath',p) //签字流程
export const qzlc_post = p => postJson('/yt-security/ticket/ticketFlowpath',p) //签字流程 保存
export const qzlc_put = p => putJson('/yt-security/ticket/ticketFlowpath',p) //签字流程 编辑
export const qzlc_delete = p => Delete('/yt-security/ticket/ticketFlowpath',p) //签字流程 删除
export const qzlc_info = p => get('/yt-security/ticket/ticketFlowpath/'+p) //签字流程 id
export const wgxm_list = p => get('/yt-security/ticket/ticketProjectFinish',p) //完工项目
export const wgxm_post = p => postJson('/yt-security/ticket/ticketProjectFinish',p) //完工项目
export const wgxm_put = p => putJson('/yt-security/ticket/ticketProjectFinish',p) //完工项目
export const wgxm_delete = p => Delete('/yt-security/ticket/ticketProjectFinish',p) //完工项目
export const wgxm_info = p => get('/yt-security/ticket/ticketProjectFinish/'+p) //完工项目
export const bdp_list = p => get('/yt-security/ticket/userInfor',p) //八大票
export const bdp_post = p => postJson('/yt-security/ticket/userInfor',p) //八大票
export const bdp_put = p => putJson('/yt-security/ticket/userInfor',p) //八大票
export const bdp_delete = p => Delete('/yt-security/ticket/userInfor',p) //八大票
export const bdp_info = p => get('/yt-security/ticket/userInfor/'+p) //八大票
export const bdp_getInfo = p => get('/yt-security/ticket/userInfor/getInfo',p) //八大票权限
export const bdp_userList = p => get('/yt-security/ticket/userInfor/userList',p) //八大票
export const wgqzr_list = p => get('/yt-security/ticket/ticketFinishPeople',p) //完工签字人
export const wgqzr_post = p => postJson('/yt-security/ticket/ticketFinishPeople',p) //完工签字人
export const wgqzr_put = p => putJson('/yt-security/ticket/ticketFinishPeople',p) //完工签字人
export const wgqzr_delete = p => Delete('/yt-security/ticket/ticketFinishPeople',p) //完工签字人
export const wgqzr_linfo= p => get('/yt-security/ticket/ticketFinishPeople/'+p) //完工签字人
export const gzaqfx_list = p => get('/yt-security/rescue/material/list',p) //工作安全分析


/**
 * 设备台账
 */
 export const SBTZ_getEquipmentList = p => get('/yt-security/equipment/monitor/info/getEquipmentList', p) //获取设备
 export const SBTZ_getPageInit = p => get('/yt-security/equipment/monitor/info/pageInit', p) //获取列表
 export const SBTZ_postInfo = p => postJson('/yt-security/equipment/monitor/info', p) //保存
 export const SBTZ_DeleteInfo = p => Delete('/yt-security/equipment/monitor/info', p) //删除
 export const SBTZ_putInfo = p => putJson('/yt-security/equipment/monitor/info', p) //编辑
 export const SBTZ_getInfo = p => get('/yt-security/equipment/monitor/info/queryDetailById', p) //根据id查
 export const SBTZ_getInfo2 = p => get('/yt-security/equipment/monitor/info', p) //根据id查
 export const SBTZ_upload = p => postJson('/yt-security/equipment/monitor/info/upload', p) //上传
 export const SBTZ_getWorkshopList = p => get('/yt-security/equipment/monitor/info/getWorkshopList', p) //车间
 export const SBTZ_getDepartmentList = p => get('/yt-security/equipment/monitor/info/getDepartmentList', p) //部门
 export const SBTZ_getList = p => get('/yt-security/equipment/info/monitor/getList', p) //获取设备种类
 export const SBTZ_getEquipmentType = p => get('/yt-security/equipment/monitor/info/getEquipmentType', p) //获取设备类型
 export const SBTZ_getEquipmentCategory = p => get('/yt-security/equipment/monitor/info/getEquipmentCategory', p) //获取设备类别
 export const SBTZ_getQueryDetailById = p => get('/yt-security/equipment/monitor/info/queryDetailById', p) //获取id详情
 export const SBTZ_getfile = p => get('/yt-security/equipment/monitor/info/' + p) //获取文件

 /**
 * 在线监测
 */
export const ZXJC_getList = p => get('/yt-security/equipment/monitor/online/getList', p) //获取在线监测
export const ZXJC_getWorkshopList = p => get('/yt-security/equipment/monitor/pointInfo/getWorkshopList', p) //获取车间

/**
 * 点位设置
 */
export const DWSZ_getPageInit = p => get('/yt-security/equipment/monitor/pointInfo/pageInit', p) //获取点位设置列表
export const DWSZ_getEquipmentList = p => get('/yt-security/equipment/monitor/pointInfo/getEquipmentList', p) //获取设备
export const DWSZ_getpointInfo = p => get('/yt-security/equipment/monitor/pointInfo', p) //根据id获取详情
export const DWSZ_getTypeList = p => get('/yt-security/monitor/pointInfo/getTypeList', p) //获取点位类型
export const DWSZ_deletepointInfo = p => Delete('/yt-security/equipment/monitor/pointInfo', p) //删除
export const DWSZ_postpointInfo = p => postJson('/yt-security/equipment/monitor/pointInfo', p) //保存
export const DWSZ_putpointInfo = p => putJson('/yt-security/equipment/monitor/pointInfo', p) //修改

/**
 * 报警记录
 */
export const BJJL_getPageInit = p => get('/yt-security/equipment/monitor/pointAlarm/pageInit', p) //获取报警记录列表
export const BJJL_getEquipmentList = p => get('/yt-security/equipment/monitor/pointAlarm/getEquipmentList', p) //获取设备
export const BJJL_postpointAlarm = p => postJson('/yt-security/monitor/pointAlarm', p) //保存
export const BJJL_getRunTrend = p => get('/yt-security/equipment/monitor/pointAlarm/getRunTrend', p) //获取趋势图

/**
 * 保养计划
 */
//保养提醒
export const BYJH_PageInit = p => get('/yt-security/equipment/maintain/plan/pageInit', p)
//获取设备
export const BYJH_getEquipmentList = p => get('/yt-security/equipment/maintain/plan/getEquipmentList', p)
//根据id保养
export const BYJH_Plang = p => get('/yt-security/equipment/maintain/plan', p)
//保存
export const BYJH_Planps = p => post('/yt-security/equipment/maintain/plan', p)
//编辑
export const BYJH_Planp = p => putJson('/yt-security/equipment/maintain/plan', p)
//删除
export const BYJH_Pland = p => Delete('/yt-security/equipment/maintain/plan', p)

/**
 * 保养记录
 */
export const BYJL_getMaintenanceItems = p => get('/yt-security/equipment/maintain/record/getMaintenanceItems', p)

export const BYJL_pageInit = p => get('/yt-security/equipment/maintain/record/pageInit', p) //列表

export const BYJL_record = p => get('/yt-security/equipment/maintain/record/queryDetailById', p) //根据id保养
export const BYJL_record2 = p => get('/yt-security/equipment/maintain/record', p) //根据id保养

export const BYJL_recordps = p => postJson('/yt-security/equipment/maintain/record', p) //保存

export const BYJL_recordp = p => putJson('/yt-security/equipment/maintain/record', p) //编辑

export const deletedep = p => Delete('/yt-security/equipment/maintain/record', p) //删除

export const BYJL_excelRecordExport = p => get('/yt-security/equipment/maintain/record/excelRecordExport', p) //导出

export const BYJL_getEquipmentList = p => get('/yt-security/equipment/maintain/record/getEquipmentList', p) //获取设备

export const BYJL_getList = p => get('/yt-security/equipment/maintain/record/getList', p) //获取设备种类数据

export const BYJL_getWorkshopList = p => get('/yt-security/equipment/maintain/record/getWorkshopList', p) //获取车间

export const BYJL_getEquipmentCategory = p => get('/yt-security/equipment/maintain/record/getEquipmentCategory', p) //获取设备类别

export const BYJL_getUser = p => get('/yt-security/equipment/maintain/record/getUser', p) //获取车间



/**
 * 保养提醒
 */
export const BYTX_PageInit = p => get('/yt-security/equipment/maintain/reminder/pageInit', p)
