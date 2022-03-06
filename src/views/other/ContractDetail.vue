<template>
  <div>
    <oyorder-info :data="list">
      <template #specialLine>
        <div>信息插槽</div>
      </template>
      <template #default>
        <div style="margin-left: 200px">
          <oy-button>撤销</oy-button>
          <oy-button>延期</oy-button>
        </div>
      </template>
    </oyorder-info>
    <div class="markdown-body">
      <Markdown/>
    </div>
    <hr>
    <div class="markdown-body">
      <MarkdownAttr/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/other/contractDetail.md'
import MarkdownAttr from '@/assets/markdown/other/contractDetail-attr.md'

export default {
  name: 'ContractDetail',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      list: [
        { 'lable': '订单合计', 'value': '1件, 0.469吨', 'type': 1 },
        { 'lable': '商品总额', 'value': '￥2344.53', 'isDivider': true, 'type': 0 },
        { 'lable': '运费', 'value': '￥0.00' },
        { 'lable': '代运补贴', 'value': '￥0.00' },
        { 'lable': '满量送券', 'value': '￥0.00' },
        { 'lable': '竞价加价', 'value': '￥0.00' },
        { 'lable': '其他', 'value': '￥0.00' },
        { 'lable': '不含税金额', 'value': '￥2074.81' },
        { 'lable': '增值税', 'value': '￥269.72' },
        { 'lable': '结算总额', 'value': '2344.53' }
      ]
    }
  }
}
</script>

<style scoped>
::v-deep .divider:after {
  height: 0;
}
</style>
