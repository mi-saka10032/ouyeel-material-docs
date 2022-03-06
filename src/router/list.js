import Layout from '@/layout'
import AppMain from '@/layout/components/AppMain'

export default {
  path: '/table-list',
  component: Layout,
  redirect: '/table-list/table',
  name: 'TableList',
  meta: { title: '表格与列表' },
  children: [
    {
      path: '/table-list/table',
      component: AppMain,
      redirect: '/table-list/table/composition',
      name: 'Table',
      meta: { title: '表格' },
      children: [
        {
          path: '/table-list/table/composition',
          name: 'TableCompositionTable',
          component: () => import('@/views/table-list/table/TableCompositionTable'),
          meta: { title: 'OY-composition-table' }
        },
        {
          path: '/table-list/table/render',
          name: 'TableRender',
          component: () => import('@/views/table-list/table/TableRender'),
          meta: { title: 'oy-table-render' }
        },
        {
          path: '/table-list/table/fixScroll',
          name: 'TableFixscroll',
          component: () => import('@/views/table-list/table/TableFixscroll'),
          meta: { title: 'oy-table-fixscroll' }
        }
      ]
    },
    {
      path: '/table-list/pagination',
      name: 'Pagination',
      component: () => import('@/views/table-list/Pagination'),
      meta: { title: '分页器' }
    },
    {
      path: '/table-list/list',
      name: 'AllList',
      component: () => import('@/views/table-list/AllList'),
      meta: { title: '列表' }
    }
  ]
}
