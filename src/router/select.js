import Layout from '@/layout'

export default {
  path: '/select',
  component: Layout,
  redirect: '/select-component',
  name: 'Select',
  meta: { title: '下拉框' },
  children: [
    {
      path: '/select-component',
      name: 'SelectComponent',
      component: () => import('@/views/select/SelectComponent'),
      meta: { title: '下拉框' }
    }
  ]
}
