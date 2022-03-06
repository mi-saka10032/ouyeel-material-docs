```vue
<template>
  <div>
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="禁止信息"
      type="stop"
    />
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="错误状态"
      type="error"
    />
    <oy-alert
      :closable="true"
      display="block"
      size="large"
      title="成功状态"
      type="success"
    />
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="提醒信息"
      type="notice"
    />
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="提示信息"
      type="tips"
    />
    <oy-alert
      :closable="true"
      display="block"
      size="large"
      title="疑问信息"
      type="question"
    />
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="警示信息"
      type="warning"
    />
    <oy-alert
      :closable="false"
      display="block"
      size="large"
      title="即将到期提示信息"
      type="dueSoon"
    />
  </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>
```



属性

| 参数     | 说明       | 类型    | 默认值 | 可选值                                                  |
| :------- | :--------- | :------ | :----- | :------------------------------------------------------ |
| title    | 渲染的文本 | String  | -      | -                                                       |
| type     | 类型       | String  | -      | success/notice/tips/error/stop/warning/question/dueSoon |
| size     | 尺寸       | String  | -      | large/small/middle 默认large                            |
| display  | 布局       | String  | block  | block/inline-block/inline                               |
| closable | 是否关闭   | Boolean | false  | true/false                                              |
|          |            |         |        |                                                         |

**注意**：该组件可使用插槽，将文本嵌入组件中