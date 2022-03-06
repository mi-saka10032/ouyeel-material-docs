

示例：

```vue
<template>
  <div>
    <oy-transfer
      :active-index="activeIndex"
      :data="transferData"
      :target-title="targetTitle"
      :value="value"
      @input="changeTransfer"
      @update:activeIndex="switchTransfer"
    />
  </div>
</template>

<script>
export default {
  name: 'Shuttle',
  data() {
    return {
      activeIndex: 0,
      transferData: [
        {
          'label': '按供应商展示',
          'list': [
            { 'key': 0, 'label': '供应商0' },
            { 'key': 1, 'label': '供应商1' },
            { 'key': 2, 'label': '供应商2' },
            { 'key': 3, 'label': '供应商3' },
            { 'key': 4, 'label': '供应商4' },
            { 'key': 5, 'label': '供应商5' },
            { 'key': 6, 'label': '供应商6' },
            { 'key': 7, 'label': '供应商7' },
            { 'key': 8, 'label': '供应商8' },
            { 'key': 9, 'label': '供应商9' }
          ]
        },
        {
          'label': '按群组展示按群组展示',
          'list': [
            { 'key': 0, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组0' },
            { 'key': 1, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组1' },
            { 'key': 2, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组2' },
            { 'key': 3, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组3' },
            { 'key': 4, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组4' },
            { 'key': 5, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组5' },
            { 'key': 6, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组6' },
            { 'key': 7, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组7' },
            { 'key': 8, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组8' },
            { 'key': 9, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组9' }
          ]
        }
      ],
      targetTitle: '群组',
      value: []
    }
  },
  methods: {
    changeTransfer(index) {
      console.log('穿梭', index)
      this.value = index
    },
    switchTransfer(index) {
      console.log('切换展示模式', index)
      this.activeIndex = index
    }
  }
}
</script>
```



## 以下为属性分析

**active-index**

左侧内容展示目录，默认为0，可选0 和 1



**data**

左侧内容数据，Array<Object>类型，每个Object包含 label 和 list 属性，list当中是包含 { key, label } 对象的数组 



**target-title**

右侧顶部的标题



**value**

右侧穿梭进去的内容，Array < number >类型，默认为 []



## 以下为事件分析

**@input**

穿梭框加入、移除事件，回调参数为 [number] 类型，需要在事件函数中加入：

```js
this.value = index
```



**@update:activeIndex**

顶部title切换事件，回调参数为number类型，0 或 1，实现左侧内容切换需要在事件函数中加入：

```js
this.activeIndex = index
```