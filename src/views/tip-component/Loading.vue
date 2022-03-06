<template>
  <div>
    <Oy-Loading
      v-loading="fullScreenLoading"
      element-loading-custom-class="oy-common-module"
      element-loading-spinner="oy-common-loading"
    />
    <div>
      <button @click="openLoading1">点击开启指令方式Loading</button>
      <br><br><br>
      <button @click="openLoading2">点击开启服务方式Loading</button>
    </div>
    <div class="markdown-body">
      <Markdown/>
    </div>
    <hr>
    <div class="markdown-body">
      <MarkdownAttr/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/tip-component/loading/loading.md'
import MarkdownAttr from '@/assets/markdown/tip-component/loading/loading-attr.md'

export default {
  name: 'Loading',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      fullScreenLoading: false
    }
  },
  methods: {
    openLoading1() {
      this.fullScreenLoading = true
      setTimeout(() => {
        this.fullScreenLoading = false
      }, 2000)
    },
    openLoading2() {
      this.loading(true)
      setTimeout(() => {
        this.loading(false)
      }, 2000)
    }
  }
}
</script>
