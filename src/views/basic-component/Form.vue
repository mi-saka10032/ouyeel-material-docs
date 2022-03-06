<template>
  <div>
    <oy-search-more
      :is-showreset="true"
      :btn-value="btnValue"
      :label-width="labelWidth"
      :search-demos="searchDemos"
      @submit-click="submitClick"
    />
    <div class="markdown-body">
      <CityMarkdown/>
    </div>
    <hr>
    <div class="markdown-body">
      <CityMarkdownAttr/>
    </div>
  </div>
</template>

<script>
import CityMarkdown from '@/assets/markdown/basic-component/form/form.md'
import CityMarkdownAttr from '@/assets/markdown/basic-component/form/form-attr.md'

export default {
  name: 'Form',
  components: {
    CityMarkdown,
    CityMarkdownAttr
  },
  data() {
    return {
      btnValue: '测试查询',
      labelWidth: '100',
      searchDemos: [
        {
          'filed': 'search',
          'type': 'input',
          'label': '测试输入:',
          'placeholder': '订单号/捆包号',
          'value': '好多嘛他们'
        },
        {
          'filed': 'dingdanhao',
          'type': 'input',
          'label': '订单号:',
          'placeholder': '请输入内容',
          'value': 'agw'
        },
        {
          'filed': 'dingdanhao',
          'type': 'input',
          'label': '订单号:',
          'placeholder': '请输入内容',
          'value': 'wrg'
        },
        {
          'filed': 'ziyuanhao',
          'type': 'input',
          'label': '钢厂资源号:',
          'placeholder': '请输入内容',
          'value': ''
        },
        {
          'filed': 'ziyuanhao',
          'type': 'input',
          'label': '钢厂资源号:',
          'placeholder': '请输入内容',
          'value': ''
        },
        {
          'filed': 'kunbaohao',
          'type': 'input',
          'label': '捆包号:',
          'placeholder': '请输入内容',
          'value': ''
        },
        {
          'filed': 'chehao', 'type': 'input', 'label': '车号:', 'placeholder': '请输入内容', 'value': ''
        },
        {
          'filed': 'chandi',
          'type': 'select',
          'value': '选项2',
          'placeholder': '请选择',
          'label': '产地:',
          'align': 'left',
          'options': [{ 'value': '选项1', 'label': '黄金糕' }, { 'value': '选项2', 'label': '双皮奶' }]
        },
        {
          'filed': 'time', 'type': 'datePicker', 'label': '生成时间:', 'value': ''
        },
        {
          'filed': 'monthData',
          'type': 'monthPicker',
          'label': '交货日期:',
          'value': ''
        },
        {
          'filed': 'isRespond', 'type': 'radio', 'label': '待响应', 'value': ''
        },
        {
          'filed': 'weight',
          'type': 'inputs',
          'width': ['50', '50'],
          'label': ['厚度:', '-'],
          'placeholder': ['最小值', '最大值'],
          'value': ['', ''],
          'icon': [null, null]
        }
      ]
    }
  },
  methods: {
    submitClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
