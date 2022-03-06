import Layout from '@/layout'
import AppMain from '@/layout/components/AppMain'

export default {
  path: '/search',
  component: Layout,
  redirect: '/search/filter-search',
  name: 'Search',
  meta: { title: '搜索' },
  children: [
    {
      path: '/search/filter-search',
      name: 'FilterSearch',
      component: () => import('@/views/search/FilterSearch'),
      meta: { title: 'Filter Search' }
    },
    {
      path: '/search/top-search',
      name: 'TopSearch',
      redirect: '/search/top-search/normal',
      component: AppMain,
      meta: { title: '顶部搜索栏' },
      children: [
        {
          path: '/search/top-search/normal',
          name: 'NormalSearch',
          component: () => import('@/views/search/top/NormalSearch'),
          meta: { title: '搜索栏' }
        },
        {
          path: '/search/top-search/buyer',
          name: 'BuyerSearch',
          component: () => import('@/views/search/top/BuyerSearch'),
          meta: { title: '买家搜索栏' }
        },
        {
          path: '/search/top-search/shop-left',
          name: 'ShopLeftSearch',
          component: () => import('@/views/search/top/ShopLeftSearch'),
          meta: { title: '店铺左侧部分' }
        },
        {
          path: '/search/top-search/com-topSearch',
          name: 'ComTopSearch',
          component: () => import('@/views/search/top/ComTopSearch'),
          meta: { title: '头部搜索' }
        }
      ]
    }
  ]
}
