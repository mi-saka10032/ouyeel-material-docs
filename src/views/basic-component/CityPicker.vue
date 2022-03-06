<template>
  <div>
    <oy-city-picker
      v-model="value"
      trigger="click"
      :level="level"
      :unlimit="unlimit"
      @change="handleChange"
    ></oy-city-picker>
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
import CityMarkdown from '@/assets/markdown/basic-component/city/city.md'
import CityMarkdownAttr from '@/assets/markdown/basic-component/city/city-attr.md'
export default {
  name: 'CityPicker',
  components: {
    CityMarkdown,
    CityMarkdownAttr
  },
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

<style scoped>

</style>
