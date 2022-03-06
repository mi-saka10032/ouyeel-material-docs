### 4.带标签的多选样式

示例：

```vue
<template>
  <div>
    <el-row>
      <oy-icon-checkbox
          v-for="(item,index) in iconCheckboxList"
          :key="index"
          :check-text="item.checkText"
          :is-check="item.isCheck"
          :str-length="item.strLength"
      >{{item.checkText}}</oy-icon-checkbox>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RadioCheckBoxTag",
  data() {
    return {
      iconCheckboxList: [
        {checkText: '热轧', isCheck: true, strLength: 0},
        {checkText: '普冷', isCheck: true, strLength: 0},
        {checkText: '热镀锌热镀锌1', isCheck: false, strLength: 0},
        {checkText: '酸洗1', isCheck: true, strLength: 0},
        {checkText: '热镀锌热镀锌2', isCheck: false, strLength: 0},
        {checkText: '酸洗2', isCheck: false, strLength: 0},
      ]
    }
  }
}
</script>
```



属性

| 参数       | 说明                                  | 类型    | 默认值 |
| :--------- | :------------------------------------ | :------ | :----- |
| is-check   | 是否选中                              | Boolean | -      |
| check-text | tooltip文本内容                       | String  | -      |
| str-length | 根据文本字符长度来判断显示tooltip内容 | Number  | -      |

（提醒）该组件的数据通信存在潜在问题