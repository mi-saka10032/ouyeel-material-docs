Loading存在两种方式：以布尔值控制的指令方式，和以方法控制的服务方式。

```vue
<template>
  <div>
    <Oy-Loading
        v-loading="fullScreenLoading"
        element-loading-custom-class="oy-common-module"
        element-loading-spinner="oy-common-loading"
    />
    <button @click="openLoading1" >点击开启指令方式Loading</button>
    <el-button @click="openLoading2" >点击开启服务方式Loading</el-button>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      fullScreenLoading: false
    }
  },
  methods: {
    openLoading1() {
      this.fullScreenLoading = true;
      setTimeout(() => {
        this.fullScreenLoading = false
      }, 2000);
    },
    openLoading2() {
      this.loading(true);
      setTimeout(() => {
        this.loading(false)
      }, 2000);
    }
  },
}
</script>
```
