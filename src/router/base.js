import Layout from '@/layout'

export default {
  path: '/basic-component',
  component: Layout,
  redirect: '/basic-component/button',
  name: 'BasicComponent',
  meta: { title: '基础组件' },
  children: [
    {
      path: '/basic-component/button',
      name: 'Button',
      component: () => import('@/views/basic-component/Button'),
      meta: { title: '按钮' }
    },
    {
      path: '/basic-component/check',
      name: 'Check',
      component: () => import('@/views/basic-component/Check'),
      meta: { title: '复选框' }
    },
    {
      path: '/basic-component/dateRange',
      name: 'DateRange',
      component: () => import('@/views/basic-component/DateRange'),
      meta: { title: '日期选择器' }
    },
    {
      path: '/basic-component/cityPicker',
      name: 'CityPicker',
      component: () => import('@/views/basic-component/CityPicker'),
      meta: { title: '城市选择器' }
    },
    {
      path: '/basic-component/inputNumber',
      name: 'InputNumber',
      component: () => import('@/views/basic-component/InputNumber'),
      meta: { title: '计数器' }
    },
    {
      path: '/basic-component/form',
      name: 'Form',
      component: () => import('@/views/basic-component/Form'),
      meta: { title: 'Form表单' }
    }
  ]
}
