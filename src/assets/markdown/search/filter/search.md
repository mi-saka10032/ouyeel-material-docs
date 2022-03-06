该filter-search组件样式较简，应用较少。



完整代码：

```vue
<template>
  <div>
    <oy-filter-search
      :data="data"
      @handle-click="handleClick"
      @handle-select="handleSelect"
      @handle-submit="handleSubmit"
      @handle-search="handleSearch"
    />
  </div>
</template>
<script>

export default {
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
```



属性

| 参数   | 说明     | 类型           | 默认值   | 可选值                                   |
| :----- | :------- | :------------- | :------- | :--------------------------------------- |
| data ↓ |          | Array          | [ ]      |                                          |
|        | --参数-- | --说明--       | --类型-- |                                          |
|        | label    | 名字           | String   |                                          |
|        | type     | 类型           | String   | default/union/sort/select/input/checkbox |
|        | search   | 开启搜索框     | Boolean  |                                          |
|        | min      | 文本提示最小值 | String   |                                          |
|        | max      | 文本提示最大值 | String   |                                          |
|        | data ↓   | 下拉列表       | Array    |                                          |
|        |          | --参数--       | --说明-- | --类型--                                 |
|        |          | label          | 标签名   | String                                   |
|        |          | value          | 值       | String                                   |



事件

| 事件名        | 说明                            | 回调参数     |
| :------------ | :------------------------------ | :----------- |
| handle-click  | 标题点击事件                    | item         |
| handle-select | 下拉选择                        | item         |
| handle-submit | 提交（中间input框内藏提交按钮） | min值, max值 |
| handle-search | 搜索按钮（右侧搜索框）          | input值      |