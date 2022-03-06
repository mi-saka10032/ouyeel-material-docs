**row**

自定义的行数据，Object类型



**initVal**

初始数值，Number类型



示例：

```vue
<template>
  <oy-input-number
      :initVal="initVal"
      v-model="value"
      :row="{CP_VISIBALE: false}"
      :min="1"
      :max="10"
      @change="handleChange"
      @handle-check="handleCheck"
      @handle-close="handleClose"
  ></oy-input-number>
</template>

<script>
export default {
  name: "InputNumber",
  data() {
    return {
      value: '',
      initVal: 5
    }
  },
  methods: {
    handleChange(newValue, oldValue, row) {
      console.log(arguments);
    },
    handleCheck(newValue, oldValue, row) {
      console.log(arguments);
    },
    handleClose(newValue, oldValue, row) {
      console.log(arguments);
    }
  },
}
</script>
```
