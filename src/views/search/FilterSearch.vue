<template>
  <div>
    <oy-filter-search
      :data="data"
      @handle-click="handleClick"
      @handle-select="handleSelect"
      @handle-submit="handleSubmit"
      @handle-search="handleSearch"
    />
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>
<script>
import Markdown from '@/assets/markdown/search/filter/search.md'

export default {
  components: {
    Markdown
  },
  data() {
    return {
      data: [
        { label: '默认', type: 'default' },
        { label: '默认2', type: 'union' },
        { label: '默认3', type: 'union' },
        { label: '默认4', type: 'union' },
        { label: '默认5', type: 'union' },
        { label: '新货优先', type: 'checkbox', checked: false, value: 0 },
        { label: '价格', type: 'sort', value: 0 },
        { label: '价格区间', min: '最低价', max: '最高价', type: 'input', value: [1, 20] },
        { label: '上架日期', type: 'sort', value: 0 },
        { label: '重量', type: 'sort', value: 0 },
        { label: '厚度/直径', type: 'sort', value: 0 },
        { label: '宽度', type: 'sort', value: 0 },
        {
          label: '其他排序', type: 'selectSelf', value: 0,
          data: [
            { label: '产地排序', value: 1 },
            { label: '产地降序', value: 2 },
            { label: '牌号升序', value: 3 },
            { label: '牌号降序', value: 4 }
          ]
        },
        {
          label: '时间', type: 'selectOther', value: 0,
          data: [
            { label: '全部', value: 0 },
            { label: '一周', value: 1 },
            { label: '一月', value: 2 },
            { label: '一年', value: 3 }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(e) {
      console.log('标题点击事件', e)
    },
    handleSelect(e) {
      console.log('下拉选择', e)
    },
    handleSubmit(e) {
      console.log('提交', e)
    },
    handleSearch(e) {
      console.log('搜索按钮', e)
    }
  }
}
</script>
