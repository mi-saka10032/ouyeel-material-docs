import Layout from '@/layout'

export default {
  path: '/condition',
  component: Layout,
  name: 'Condition',
  redirect: '/condition/filter',
  meta: { title: '条件过滤器' },
  children: [
    {
      path: 'filter',
      name: 'ConditionFilterViews',
      component: () => import('@/views/condition-filter'),
      meta: { title: '条件过滤器' }
    },
    {
      path: 'customFilter',
      name: 'CustomFilterViews',
      component: () => import('@/views/condition-filter/CustomFilter'),
      meta: { title: '自定义过滤器' }
    }
  ]
}
