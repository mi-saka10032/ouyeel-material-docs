### 3 table固定列



完整代码：

```vue
<template>
  <oy-table-fixscroll
      :table-headlists="tableHeadlists"
      :table-data="tableData"
      :table-label="tableLabel"
      :empty-text="' '"
      :loading-cfg="{isShowLoading: false}"
  >
    <el-table-column slot="operate" label="操作" width="250">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="showList(scope)">{{scope.$index}}查看发送名单</el-button>
        <el-button type="text" size="small">查看邮件</el-button>
      </template>
    </el-table-column>
  </oy-table-fixscroll>
</template>

<script>
export default {
  name: "TableFixscroll",
  data() {
    return {
      tableData: [
        {
          "hetong": "2016-05-02",
          "name": "王小虎",
          "prod": "上海",
          "spesc": "普陀区",
          "weight": "上海市普陀区金沙江路 1518 弄",
          "origin": 200333,
          "link": "https://www.qq.com"
        },
        {
          "hetong": "2016-05-08",
          "name": "王小虎2",
          "prod": "上海",
          "spesc": "普陀区",
          "weight": "上海市普陀区金沙江路 1518 弄",
          "origin": 200333,
          "link": "https://www.163.com"
        }],
      tableLabel: [
        {
          "label": "合同子项号",
          "param": "hetong",
          "align": "center",
          "width": "200",
          "fixed": true,
          "href": (row) => row.link
        },
        {
          "label": "品名",
          "param": "name",
          "align": "center",
          "width": "200",
          "fixed": true,
          "formatter": row => row.name
        },
        {"label": "牌号", "param": "prod", "align": "center", "width": "200", "fixed": true},
        {
          "label": "规格",
          "param": "spesc",
          "align": "center",
          "width": "200",
          "href": "https://www.163.com"
        },
        {"label": "重量", "param": "weight", "align": "center", "width": "200"},
          {
          "label": "产地",
          "param": "origin",
          "align": "center",
          "width": "200"
        },
        {"slot": "operate"}
      ],
      tableHeadlists: {
        tableDesc: {
          align: 'right',
          descLists: [
              ['件数',10,'条'],
              ['件数',20,'条']
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
    showList({row}) {
      console.log(row);
    }
  },
}
</script>
```



## 以下为属性分析

**table-label**

表头数据，Array<Object>类型。

内部属性：

label：表头标题（必须）

param：对应data元素对象中的属性名称（必须）

align：水平对齐方式

width：宽度

fixed：是否冻结固定

href：可写为固定字符串的url链接，也可以写为 row => { return `${row.url}` }类似的函数

formatter：row => { return `${row.name}` }类似的函数，用于重写表格内容

slot：开启插槽，value为字符串，与具名插槽的名称一致



**table-data**

表格数据，Array<Object>类型。

属性名与table-label中的元素对象的paramvalue值相同时，可实现值的映射。



**table-headlists**

表格头部文字说明，Object类型

有两个属性，tableDesc和tableTitle



tableDesc有两个属性，align和descLists

align为水平对齐方式，descLists为内容描述数组，Array类型，每个元素也是Array类型，总体为二维数组



tableTitle有两个属性，aling和name

align为水平对齐方式，name为文字说明标题



**loading-cfg**

Object类型，含有属性isShowLoading，默认为false。为true时表格会一直呈现“加载中”效果



**empty-text**

string类型，表格数据为空的时候在表格中呈现的字符串内容。



| 参数           | 说明                 | 类型   | 默认值                 | 可选值                |
| :------------- | :------------------- | :----- | :--------------------- | :-------------------- |
| loading-cfg    | 加载配置项           | Object | {isShowLoading: false} | {isShowLoading: true} |
| empty-text     | 表格数据为空时的显示 | string | ''                     | - -                   |
| tableLabel     | 表头数据             | Array  | - -                    | - -                   |
| tableDatas     | 表格数组             | Array  | - -                    | - -                   |
| tableHeadlists | 表格头部文字说明     | Object | - -                    | - -                   |