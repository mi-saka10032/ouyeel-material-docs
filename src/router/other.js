import Layout from '@/layout'

export default {
  path: '/other',
  component: Layout,
  redirect: '/other/shuttle',
  name: 'Other',
  meta: { title: '其他' },
  children: [
    {
      path: '/other/shuttle',
      name: 'Shuttle',
      component: () => import('@/views/other/Shuttle'),
      meta: { title: '穿梭框' }
    },
    {
      path: '/other/contract-detail',
      name: 'ContractDetail',
      component: () => import('@/views/other/ContractDetail'),
      meta: { title: '合同详情页' }
    }
  ]
}
