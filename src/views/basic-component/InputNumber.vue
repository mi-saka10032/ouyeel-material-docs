<template>
  <div>
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
    <div class="markdown-body">
      <CityMarkdown/>
    </div>
    <hr>
    <div class="markdown-body">
      <CityMarkdownAttr/>
    </div>
  </div>
</template>

<script>
import CityMarkdown from '@/assets/markdown/basic-component/inputnumber/inputnumber.md'
import CityMarkdownAttr from '@/assets/markdown/basic-component/inputnumber/inputnumber-attr.md'

export default {
  name: 'InputNumber',
  components: {
    CityMarkdown,
    CityMarkdownAttr
  },
  data() {
    return {
      value: '',
      initVal: 5
    }
  },
  methods: {
    handleChange(newValue, oldValue, row) {
      console.log(arguments)
    },
    handleCheck(newValue, oldValue, row) {
      console.log(arguments)
    },
    handleClose(newValue, oldValue, row) {
      console.log(arguments)
    }
  }
}
</script>

<style scoped>

</style>
