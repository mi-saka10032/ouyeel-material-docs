<template>
  <div>
    <OY-composition-table
      ref="ttt"
      show-head
      :head-crumbs="headCrumbs"
      show-foot
      :left="false"
      :foot-crumbs="footCrumbs"
      :footer-operations="footerOperations"
      :current-page="currentPage"
      :total="total"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :data="tableData"
      :columns="columns"
      row-key="id"
      @operationClick="handleOperationClick"
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      @selection-change="handleSelectionChange"
    >
      <template v-slot:expand="{ row }">
        <div style="padding-left: 50px">
          <p>名字:{{ row.name }}</p>
          <p>薪资:{{ row.age }}</p>
          <p>加载: {{ row._expand.name }}</p>
        </div>
      </template>
    </OY-composition-table>
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>
<script>
import Markdown from '@/assets/markdown/table-list/table/table1.md'

export default {
  name: 'TableCompositionTable',
  components: {
    Markdown
  },
  data() {
    return {
      headCrumbs: [['显示', '100', '条'], ['已经选择', '0', '条']],
      footCrumbs: [['选中', '0', '条'], ['总价', '0', '元']],
      footerOperations: [
        // test属性必须，icon属性可选
        { text: '清空全部', icon: 'el-icon-delete' },
        { text: '提交数据', icon: 'el-icon-message' }
      ],
      currentPage: 5,
      total: 100,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40, 50],
      tableData: [
        { id: '001', name: 'mary', age: 18, gender: 'female' },
        { id: '002', name: 'tom', age: 16, gender: 'male' },
        { id: '003', name: 'jerry', age: 20, gender: 'male' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'expand', width: 25,
          remote: (row, i) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve({ name: '成功展开' })
              }, 500)
            })
          }
        },
        {
          label: '名字', prop: 'name', align: 'center', width: '400',
          type: 'link',
          href: ({ row }) => `?name=${row.name}&age=${row.age}`
        },
        {
          label: '年龄', prop: 'age', align: 'center', width: '400', type: 'render',
          render: (h, { row }) => {
            return <div>{row.age}</div>
          }
        },
        {
          label: '性别', prop: 'gender', align: 'center', width: '400'
        },
        {
          label: '操作', type: 'operation', align: 'center', width: '400',
          prop: 'operation',
          operations: [
            { type: 'text', text: '新增' },
            { type: 'icon', icon: 'el-icon-edit' },
            { type: 'link', text: '链接', link: '#/' },
            { type: 'button', props: { type: 'danger', icon: 'el-icon-delete' } }
          ]
        }
      ]
    }
  },
  mounted() {
    this.clearValue()
  },
  methods: {
    clearValue: function clearValue() {
      document.getElementsByClassName('el-pagination__jump')[0].getElementsByClassName('el-pagination__editor')[0].getElementsByClassName('el-input__inner')[0].value = this.currentPage
    },
    handleOperationClick({ row, type, text }, index) {
      console.log(row)
      console.log(index)
      switch (index) {
        case 3: {
          this.tableData = this.tableData.filter(item => item.id !== row.id)
        }
      }
    },
    handlePageSizeChange(val) {
      console.log('分页数' + val)
    },
    handleCurrentChange(val) {
      console.log('当前页码' + val)
    },
    handlePrevClick(val) {
      console.log('上一页页码', val)
    },
    handleNextClick(val) {
      console.log('下一页页码', val)
    },
    handleSelectionChange(checkedData) {
      console.log(checkedData)
    }
  }
}
</script>
