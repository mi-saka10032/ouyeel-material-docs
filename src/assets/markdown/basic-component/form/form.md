## **search-demos**

Array<Object>类型

属性：

filed：点击查询后输出的对象属性名key，对应当前input输入框中的value值

type：输入框类型，input则是普通文本输入框，checkbox为多选框，select为下拉框，datepicker为日期选择器，monthpicker为月份选择器，inputs为多个输入框

label：输入框的标签名

placeholder：无输入时的提示语句

value：双向绑定的输入框value值



**btn-value**

String类型

查询按钮的名称



示例：

```vue
<template>
  <oy-search-more
      :is-showreset="true"
      :btn-value="btnValue"
      :label-width="labelWidth"
      :search-demos="searchDemos"
      @submit-click="submitClick"
  ></oy-search-more>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      btnValue: '测试查询',
      labelWidth: '100',
      searchDemos: [
        {
          "filed": "search",
          "type": "input",
          "label": "",
          "placeholder": "订单号/捆包号",
          "value": "好多嘛他们"
        },
        {
          "filed": "dingdanhao",
          "type": "input",
          "label": "订单号:",
          "placeholder": "请输入内容",
          "value": "agw"
        },
        {
          "filed": "dingdanhao",
          "type": "input",
          "label": "订单号:",
          "placeholder": "请输入内容",
          "value": "wrg"
        },
        {
          "filed": "ziyuanhao",
          "type": "input",
          "label": "钢厂资源号:",
          "placeholder": "请输入内容",
          "value": ""
        },
        {
          "filed": "ziyuanhao",
          "type": "input",
          "label": "钢厂资源号:",
          "placeholder": "请输入内容",
          "value": ""
        },
        {
          "filed": "kunbaohao",
          "type": "input",
          "label": "捆包号:",
          "placeholder": "请输入内容",
          "value": ""
        },
        {
          "filed": "chehao", "type": "input", "label": "车号:", "placeholder": "请输入内容", "value": ""
        },
        {
          "filed": "chandi",
          "type": "select",
          "value": "选项2",
          "placeholder": "请选择",
          "label": "产地:",
          "align": "left",
          "options": [{"value": "选项1", "label": "黄金糕"}, {"value": "选项2", "label": "双皮奶"}]
        },
        {
          "filed": "time", "type": "datePicker", "label": "生成时间:", "value": ""
        },
        {
          "filed": "monthData",
          "type": "monthPicker",
          "label": "交货日期:",
          "value": ""
        },
        {
          "filed": "isRespond", "type": "checkbox", "label": "待响应", "value": ""
        },
        {
          "filed": "weight",
          "type": "inputs",
          "width": ["50", "50"],
          "label": ["厚度:", "-"],
          "placeholder": ["最小值", "最大值"],
          "value": ["", ""],
          "icon": [null, null]
        }
      ]
    }
  },
  methods: {
    submitClick(data) {
      console.log(data)
    }
  },
}
</script>
```
