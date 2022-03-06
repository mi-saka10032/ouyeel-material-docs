<template>
  <div>
    <oy-table-fixscroll
      :table-headlists="tableHeadlists"
      :table-data="tableData"
      :table-label="tableLabel"
      :empty-text="' '"
      :loading-cfg="{isShowLoading: false}"
    >
      <el-table-column slot="operate" label="操作" width="250">
        <template slot-scope="scope">
          <oy-button type="text" size="small" @click="showList(scope)">{{ scope.$index }}查看发送名单</oy-button>
          <oy-button type="text" size="small">查看邮件</oy-button>
        </template>
      </el-table-column>
    </oy-table-fixscroll>
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/table-list/table/table3.md'

export default {
  name: 'TableFixscroll',
  components: {
    Markdown
  },
  data() {
    return {
      tableData: [
        {
          'hetong': '2016-05-02',
          'name': '王小虎',
          'prod': '上海',
          'spesc': '普陀区',
          'weight': '上海市普陀区金沙江路 1518 弄',
          'origin': 200333,
          'link': 'https://www.qq.com'
        },
        {
          'hetong': '2016-05-08',
          'name': '王小虎2',
          'prod': '上海',
          'spesc': '普陀区',
          'weight': '上海市普陀区金沙江路 1518 弄',
          'origin': 200333,
          'link': 'https://www.163.com'
        }],
      tableLabel: [
        {
          'label': '合同子项号',
          'param': 'hetong',
          'align': 'center',
          'width': '200',
          'fixed': true,
          'href': (row) => row.link
        },
        {
          'label': '品名',
          'param': 'name',
          'align': 'center',
          'width': '200',
          'fixed': true,
          'formatter': row => {
            console.log(row)
            return row.name
          }
        },
        { 'label': '牌号', 'param': 'prod', 'align': 'center', 'width': '200', 'fixed': true },
        {
          'label': '规格',
          'param': 'spesc',
          'align': 'center',
          'width': '200',
          'href': 'https://www.163.com'
        },
        { 'label': '重量', 'param': 'weight', 'align': 'center', 'width': '200' },
        {
          'label': '产地',
          'param': 'origin',
          'align': 'center',
          'width': '200'
        },
        { 'slot': 'operate' }
      ],
      tableHeadlists: {
        tableDesc: {
          align: 'right',
          descLists: [
            ['件数', 10, '条'],
            ['件数', 20, '条']
          ]
        },
        tableTitle: {
          align: 'left',
          name: '合同子项'
        }
      }
    }
  },
  methods: {
    showList({ row }) {
      console.log(row)
    }
  }
}
</script>
