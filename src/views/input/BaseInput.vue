<template>
  <oy-input
      v-model="value"
      :data="data"
      :del="false"
      :select="true"
      label="Activity Name"
      maxHeight="200"
      placeholder="请输入内容"
      suffix-icon="icon_check"
      @handle-select="handleSelect"
      @handle-click="handleClick"
  ></oy-input>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      data: [
        {label: '11111', value: 'bottle'},
        {label: '22222', value: 'huahua'}
      ],
      value: ''
    }
  },
  methods: {
    handleSelect({label, value}) {
      this.value = value;
    },
    handleClick() {
      this.value = '';
    }
  },
}
</script>

<style scoped>

</style>