import Layout from '@/layout'

export default {
  path: '/condition',
  component: Layout,
  name: 'Condition',
  redirect: '/condition/filter',
  meta: { title: '条件过滤器' },
  children: [
    {
      path: '/condition/filter',
      name: 'ConditionFilterViews',
      component: () => import('@/views/condition-filter'),
      meta: { title: '条件过滤器' }
    }
  ]
}
