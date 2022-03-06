import Layout from '@/layout'

export default {
  path: '/tip-component',
  component: Layout,
  redirect: '/tip-component/tag',
  name: 'TipComponent',
  meta: { title: '提示类组件' },
  children: [
    {
      path: '/tip-component/tag',
      name: 'Tag',
      component: () => import('@/views/tip-component/Tag'),
      meta: { title: 'Tag标签' }
    },
    {
      path: '/tip-component/loading',
      name: 'Loading',
      component: () => import('@/views/tip-component/Loading'),
      meta: { title: 'Loading' }
    },
    {
      path: '/tip-component/alert',
      name: 'Alert',
      component: () => import('@/views/tip-component/Alert'),
      meta: { title: '提示框' }
    },
    {
      path: '/tip-component/tooltip',
      name: 'AllTooltip',
      component: () => import('@/views/tip-component/AllTooltip'),
      meta: { title: 'Tooltip' }
    },
    {
      path: '/tip-component/dialog',
      name: 'Dialog',
      component: () => import('@/views/tip-component/Dialog'),
      meta: { title: '弹窗' }
    }
  ]
}
