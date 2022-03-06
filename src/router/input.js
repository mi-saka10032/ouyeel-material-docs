import Layout from '@/layout'

export default {
  path: '/input',
  component: Layout,
  redirect: '/input-component',
  name: 'Input',
  meta: { title: '输入框' },
  children: [
    {
      path: '/input-component',
      name: 'InputComponent',
      component: () => import('@/views/input/InputComponent'),
      meta: { title: '输入框' }
    }
  ]
}
