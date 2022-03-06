import Layout from '@/layout'

export default {
  path: '/menu-nav',
  component: Layout,
  redirect: '/menu-nav/slideMenu',
  name: 'MenuNav',
  meta: { title: '菜单导航' },
  children: [
    {
      path: '/menu-nav/slideMenu',
      name: 'SlideMenu',
      component: () => import('@/views/menu-nav/SlideMenu'),
      meta: { title: '菜单' }
    },
    {
      path: '/menu-nav/sidebar',
      name: 'Sidebar',
      component: () => import('@/views/menu-nav/Sidebar'),
      meta: { title: '侧边栏导航' }
    },
    {
      path: '/menu-nav/tabs',
      name: 'Tabs',
      component: () => import('@/views/menu-nav/Tabs'),
      meta: { title: 'Tabs标签页' }
    },
    {
      path: '/menu-nav/step',
      name: 'Step',
      component: () => import('@/views/menu-nav/Steps'),
      meta: { title: '步骤条' }
    },
    {
      path: '/menu-nav/navy',
      name: 'Navy',
      component: () => import('@/views/menu-nav/Navy'),
      meta: { title: '导航栏' }
    },
    {
      path: '/menu-nav/title',
      name: 'Title',
      component: () => import('@/views/menu-nav/Title'),
      meta: { title: '标题栏' }
    }
  ]
}
