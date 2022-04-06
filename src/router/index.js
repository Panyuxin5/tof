import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/layout";
Vue.use(Router)


export const indexRouter = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },
  {
    path: '/data',
    component: Layout,
    meta: { title: '数据管理', icon: 'el-icon-s-data' },
    children: [
      {
        path: '/medical_waste_tracing',
        component: () => import('@/views/datas/medicalWasteTracing/index'),
        meta: { title: '医废追溯'}
      },
      {
        path: '/box_binding',
        component: () => import('@/views/datas/boxBinding/index'),
        meta: { title: '箱袋绑定'}
      },
      {
        path: '/medical_waste_produce',
        component: () => import('@/views/datas/medicalWasteProduce/index'),
        meta: { title: '医废产生' }
      },
      {
        path: '/data_complement',
        component: () => import('@/views/datas/dataComplement/index'),
        meta: { title: '数据补录'}
      }
    ]
  },
  {
    path: 'role',
    component: Layout,
    meta: { title: '角色管理', icon: 'el-icon-s-grid'},
    children: [
      {
        path: '/organization',
        component: () => import('@/views/roles/organization/index'),
        meta: { title: '组织体系管理'}
      },
      {
        path: '/other_roles',
        component: () => import('@/views/roles/otherRoles/index'),
        meta: { title: '其他角色管理'}
      },
      {
        path: '/cleaner_route',
        component: () => import('@/views/roles/cleanerRoute/index'),
        meta: { title: '清理人路线管理' }
      },
      {
        path: '/face',
        component: () => import('@/views/roles/face/index'),
        meta: { title: '人脸管理'}
      },
      {
        path: '/qr_code',
        component: () => import('@/views/roles/qrCode/index'),
        meta: { title: '二维码管理'}
      },
    ]
  },
  {
    path: '/organization/add',
    component: Layout,
    hidden: true,
    children: [
      {
        path:'/organization/add',
        component: () => import('@/views/roles/organization/add'),
        meta: {
          title: '新增组织体系',
          activeMenu: '/organization'
        }

      }
    ]
  },
  {
    path: '/other_roles/add',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/other_roles/add',
        component: () => import('@/views/roles/otherRoles/add'),
        meta: {
          title: '新增其他角色',
          activeMenu: '/other_roles'
        }
      }
    ]
  },

  {
    path:'/picking',
    component:Layout,
    meta: { title: '领料管理' },
    children:[
      {
        path:'picking_index',
        component:()=>import('@/views/production/pick/picking/index'),
        meta: { title: '领料管理' }
      },
      {
        path:'pickingcheck_index',
        component:()=>import('@/views/production/pick/picking/components/detailsTable'),
        meta: { title: '领料查看' }
      },
    ]
  },
  {
    path:'/batch',
    component:Layout,
    meta: { title: '批次管理' },
    children:[
      {
        path:'batch_index',
        component:()=>import('@/views/production/batch/index'),
        meta: { title: '批次管理' }
      },
    ]
  },
  {
    path:'/monitor',
    component:Layout,
    meta: { title: '过程监控' },
    children:[
      {
        path:'all-points',
        component:()=>import('@/views/production/monitor/allPoints/index'),
        meta: { title: '全部点位' }
      },
      {
        path:'key-point',
        component:()=>import('@/views/production/monitor/keyPoints/index'),
        meta: { title: '关键点位' }
      },
      {
        path:'configuration',
        component:()=>import('@/views/production/monitor/configuration/index'),
        meta: { title: '组态' }
      },
    ]
  },
  {
    path:'/alarm',
    component:Layout,
    meta: { title: '报警记录' },
    children:[
      {
        path:'alarm_index',
        component:()=>import('@/views/production/alarm/index'),
        meta: { title: '报警记录' }
      },
    ]
  },
  {
    path:'/daily',
    component:Layout,
    meta: { title: '生产报表' },
    children:[
      {
        path:'daily_index',
        component:()=>import('@/views/production/daily/index'),
        meta: { title: '生产报表' }
      },
    ]
  },
  {
    path:'/statistics',
    component:Layout,
    meta: { title: '生产统计' },
    children:[
      {
        path:'statistics_index',
        component:()=>import('@/views/production/statistics/index'),
        meta: { title: '生产统计' }
      },
    ]
  },
  {
    path:'/configuration',
    component:Layout,
    meta: { title: '组态设置' },
    children:[
      {
        path:'configuration_index',
        component:()=>import('@/views/production/configuration/index'),
        meta: { title: '组态设置' }
      },
    ]
  },
  {
    path:'/process',
    component:Layout,
    meta: { title: '基础设置' },
    children:[
      {
        path:'process_index',
        component:()=>import('@/views/production/common/processPoint/index'),
        meta: { title: '工艺点位设置' }
      },
      {
        path:'gyd_index',
        component:()=>import('@/views/production/common/process/index'),
        meta: { title: '工艺段设置' }
      },
      {
        path:'material_index',
        component:()=>import('@/views/production/common/material/index'),
        meta: { title: '物料管理' }
      },
      {
        path:'formula_index',
        component:()=>import('@/views/production/common/bom/index'),
        meta: { title: '物料清单' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: indexRouter
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
