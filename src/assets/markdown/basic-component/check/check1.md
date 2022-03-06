### 1.普通单选、复选框

示例：

```vue
<template>
  <div>
    <div>
      <oy-checkbox
          v-for="(item,index) in checkLists"
          :key="index"
          :label="item.label"
          v-model="check"
          :disabled="item.disabled"
      >{{item.label}}
      </oy-checkbox>
    </div>
    <div>
      <oy-radio
          v-for="(item,index) in radioLists"
          :key="index"
          :label="item.label"
          v-model="radio"
          :disabled="item.disabled"
      >{{item.label}}
      </oy-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioCheckBox",
  data() {
    return {
      checkLists: [
        {label: '默认', disabled: false},
        {label: '选中', disabled: false},
        {label: '被选', disabled: true}
      ],
      radioLists: [
        {label: '备选项1', disabled: false},
        {label: '备选项2', disabled: false},
        {label: '备选项3', disabled: true}
      ],
      check: ['默认'],
      radio: '备选项1'
    }
  }
}
</script>
```



**单选框属性**

| 参数            | 说明           | 类型                      | 可选值 | 默认值 |
| :-------------- | :------------- | :------------------------ | :----- | :----- |
| value / v-model | 绑定值         | string / number / boolean | —      | —      |
| label           | Radio 的 value | string / number / boolean | —      | —      |
| disabled        | 是否禁用       | boolean                   | —      | false  |



**通用事件**

| 事件名称 | 说明                   | 回调参数                       |
| :------- | :--------------------- | :----------------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio/Checkbox label 值 |
