### 2 对比列表 3 固定定位对比框

需要两者配合使用

示例代码：

```vue
<template>
  <div>
    <oy-contrast-list
        ref="contrast"
        :contrastList="contrastList"
        :activeId="activeId"
        @checked-handle="checkedHandle"
    />
    <oy-fixed-contrast
        :fixedTop="fixedTop"
        :contrastLists="contrastLists"
        :litTitle="listTitle"
        @start-contrast="startContrast"
        @del-handle="delHandle"
    />
    <button @click="activeId = 4">点击修改id</button>
  </div>
</template>

<script>
export default {
  name: 'ContrastList',
  data() {
    return {
      activeId: 3,
      contrastList: {
        lists: [
          {
            '_id': 0,
            'proName': 'SCSC',
            'proMod': 'Q/HG',
            'proVersion': '2013',
            'proDesc': '镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带',
            'selectStatus': false
          },
          {
            '_id': 1,
            'proName': 'SDSK',
            'proMod': 'Q/DB',
            'proVersion': '2015',
            'proDesc': '镀锌钢板',
            'selectStatus': false
          },
          {
            '_id': 2,
            'proName': 'SCSC',
            'proDesc': '镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带',
            'selectStatus': true
          },
          {
            '_id': 3,
            'proName': 'SPHC',
            'proMod': 'Q/TB545',
            'proDesc': '镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带镀锌钢板和钢带',
            'selectStatus': false
          },
          {
            '_id': 4,
            'proName': 'SDSK',
            'proMod': 'Q/DB',
            'proVersion': '2015',
            'proDesc': '镀锌钢板',
            'selectStatus': false
          },
          {
            '_id': 5,
            'proName': 'SDSK',
            'proMod': 'Q/DB',
            'proVersion': '2015',
            'proDesc': '镀锌钢板',
            'selectStatus': false
          }
        ],
        title: '牌号/后缀'
      },
      contrastData: {},
      contrastLists: [],
      listTitle: '牌号',
      fixedTop: '500px'
    }
  },
  watch: {
    activeId: {
      immediate: true,
      handler(id) {
        this.contrastData = this.contrastList.lists.filter(item => item._id === id)[0]
        this.$nextTick(() => {
          this.$refs.contrast.active = id
        })
      }
    },
    contrastData: {
      deep: true,
      handler(value) {
        const lists = [...this.contrastLists]
        if (lists.length === 0 || lists.length < 3 && !lists.some(item => item._id === this.contrastData._id)) {
          this.contrastLists.push(this.contrastData)
        } else return
      }
    }
  },
  methods: {
    checkedHandle(data) {
      console.log(data)
      this.activeId = data._id
      this.contrastData = data
    },
    startContrast(data) {
      console.log('对比开始')
      console.log(data)
      console.log('对比结束')
    },
    delHandle(data) {
      console.log('删除开始')
      this.contrastLists = this.contrastLists.filter(item => item._id !== data._id)
    }
  }
}
</script>
```

需要注意的是，该示例开启了两个监听方法，完成了对比框的数据初始化与后续数据添加。实现方法有很多，不限于监听方法。



**对比列表参数**

属性

| 参数         | 说明           | 类型            | 默认值 | 可选值 |
| :----------- | :------------- | :-------------- | :----- | :----- |
| contrastList | 列表数据       | Object          | {}     | - -    |
| activeId     | 选中项(必传项) | String / Number | 0      |        |



事件

| 事件            | 说明         | 回调           |
| :-------------- | :----------- | :------------- |
| @checked-handle | 每项点击事件 | 当前点击得对象 |



**固定定位对比框参数**

属性

| 参数          | 说明            | 类型   | 默认值 | 可选值 |
| :------------ | :-------------- | :----- | :----- | :----- |
| fixedTop      | 固定定位 top 值 | String | 150px  | - -    |
| contrastLists | 对比列表        | Array  | []     |        |
| litTitle      | 对比类型        | String | - -    | - -    |



事件

| 事件            | 说明         | 回调           |
| :-------------- | :----------- | :------------- |
| @start-contrast | 开始对比按钮 | 选中的对比数据 |
| @del-handle     | 删除         | 删除行的数据   |

