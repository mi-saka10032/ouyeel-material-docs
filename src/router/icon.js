import Layout from '@/layout'

export default {
  path: '/icon',
  component: Layout,
  redirect: '/icon/iconfont',
  name: 'Icon',
  meta: { title: '图标' },
  children: [
    {
      path: '/icon/iconfont',
      name: 'Iconfont',
      component: () => import('@/views/icon/Iconfont'),
      meta: { title: '图标' }
    }
  ]
}
