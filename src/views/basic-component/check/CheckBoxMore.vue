<template>
  <oy-checkbox-more
      :check-lists="checkLists"
      :show-fold="false"
  ></oy-checkbox-more>
</template>

<script>
export default {
  name: "CheckBoxMore",
  data() {
    return {
      checkLists: [
        {"label": "选项1选项1", "check": false, "disabled": true},
        {"label": "选项Z", "check": true, "disabled": true},
        {"label": "备选选项3备选选项3", "check": false, "disabled": true},
        {"label": "选项4", "check": false, "disabled": true},
        {"label": "备选选项55", "check": false, "disabled": true},
        {"label": "选项6", "check": false, "disabled": true}]
    }
  }
}
</script>

<style scoped>

</style>