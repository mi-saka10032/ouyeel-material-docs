### 2.popover

示例：

```vue
<template>
  <oy-popover
    :oy-popover-parmas="popoverParams"
  >
    <template #reference>
      <el-button>popover</el-button>
    </template>
  </oy-popover>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      popoverParams: {
        'placement': 'top',
        'width': 200,
        'trigger': 'hover',
        'popoverContent': '弹框内容直接显示1'
      }
    }
  }
}
</script>
```



属性

| 参数           | 说明               | 类型           | 可选值                                                       | 默认值         |
| :------------- | :----------------- | :------------- | :----------------------------------------------------------- | :------------- |
| trigger        | 触发方式           | String         | click/focus/hover/manual                                     | click          |
| popoverContent | 显示的内容         | String         | -                                                            | -              |
| width          | 宽度               | String, Number | -                                                            | 最小宽度 150px |
| placement      | 出现位置           | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom         |
| popper-class   | 为 popper 添加类名 | String         | -                                                            | -              |

**注意**：以上属性均需要包裹在对象中，传递给 oyPopoverParmas 这个属性

**注意**：popover目前显示有bug，popover文本不能正常显示，待修复！！