**trigger**

触发方式有click和hover，代表点击选择城市、鼠标悬浮触发。默认为点击触发



**multiple**

是否支持多选，默认不支持



**level unlimit**

level：选择层级，1省 2市 3区/县

unlimit：是否显示不限，不限的value值为-1



**value**

绑定的选中数据值，通常情况下为二维数组；当选择 不限 时，值为-1。



示例：

```vue
<template>
  <oy-city-picker
      v-model="value"
      trigger="click"
      :level="level"
      :unlimit="unlimit"
      @change="handleChange"
  ></oy-city-picker>
</template>

<script>
export default {
  name: "CityPicker",
  data() {
    return {
      value: [],
      level: 3,
      multiple: false,
      trigger: 'click',
      unlimit: true
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
