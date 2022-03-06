<template>
  <oy-search-input
      width="300"
      v-model="value"
  ></oy-search-input>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>