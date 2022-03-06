### 3.只带小时日期选择

示例：

```vue
<template>
  <oy-date-picker
      style="margin-bottom: 500px"
      :date-value="dateValue"
      v-model="dateValue"
      :type="type"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :placeholder="placeholder"
      @change="handleChange"
  ></oy-date-picker>
</template>

<script>
export default {
  name: "DateRange",
  data() {
    return {
      dateValue: '',
      type: 'datetime',
      valueFormat: 'yyyy-MM-dd',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      placeholder: '选择日期时间'
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
}
</script>
```
