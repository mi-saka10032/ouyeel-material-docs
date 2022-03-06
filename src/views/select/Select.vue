<template>
  <oy-select
      placeholder="请选择"
      v-model="value"
      align="left"
      :hover="false"
      :options="options"
      :show3="false"
      :show5="false"
      type="def"
  ></oy-select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      value: '',
      options: [
        {"value": "1", "label": " 11111", "disabled": true},
        {"value": "浦发银行", "label": "蚵仔煎"},
        {"value": "2", "label": "蚵仔煎"},
        {"value": "3", "label": "蚵仔煎"},
        {"value": "4", "label": "龙须面"},
        {"value": "5", "label": "北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭"},
        {"value": "6,7,8,9", "label": ["北京烤鸭", "南京烤鸡", "东京烤地瓜", "西京烤肠"]},
        {"value": "10", "label": "北京烤鸭1"},
        {"value": "11", "label": "北京烤鸭2"},
        {"value": "12", "label": "北京烤鸭3"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
