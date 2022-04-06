import { post, get, Delete, postJson, postImg, putJson } from "@/api/axios"
// 质检标准
export const qs_getPageInit = p => get('/yt-quality/qc/qualityStandard/selectAll', p) //获取列表
//获得所有产品源ID NAME
export const qs_getProductData = p => get('/yt-quality/qc/qualityStandard/getAllProductData', p) //获得所有产品源ID
//质检标准添加
export const qs_insert = p => postJson('/yt-quality/qc/qualityStandard', p) //质检标准添加
//质检标准编辑
export const qs_update = p => putJson('/yt-quality/qc/qualityStandard', p) //质检标准编辑
//质检标准编辑
export const qs_delete = p => Delete('/yt-quality/qc/qualityStandard', p) //质检标准编辑
//质量管理
export const qc_getPageInit = p => get('/yt-quality/qc/qualityControl/selectAll', p) //获取列表
//质量管理-筛选好质检标准后，根据产品ID & 质检类型，查询待录入情况 符合条件列表 返回包括请检来源（车间 or 部门）
export const qc_getSourceByIdAndType = p => get('/yt-quality/qc/qualityControl/getSourceByIdAndType', p)
//查看详情
export const qc_selectOne = p => get('/yt-quality/qc/qualityControl/selectOne', p)
//在单条记录上点击录入，根据当前记录的产品ID & 质检类型，查询返回符合条件的质检标准
export const qc_getQualityStandardByPid = p => get('/yt-quality/qc/qualityControl/getQualityStandardByPid', p)
//列表中获取待录入状态产品的所有质检标准
export const qc_getQualityStandardToBeEntered = p => get('/yt-quality/qc/qualityControl/getQualityStandardToBeEntered', p)
//录入结果
export const qc_inputQc = p => postJson('/yt-quality/qc/qualityControl/inputQc', p)
//编辑
export const qc_edit = p => postJson('/yt-quality/qc/qualityControl/edit', p)
//编辑
export const qc_sure = p => putJson('/yt-quality/qc/qualityControl/sure?id=' + p.id)
//复核
export const qc_toReview = p => putJson('/yt-quality/qc/qualityControl/toReview?id='+p.id)
