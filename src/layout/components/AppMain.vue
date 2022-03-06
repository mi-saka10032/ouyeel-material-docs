<template>
  <section class="app-main" :class="this.$route.path.includes('dashboard') ? '' : 'non-dash-padding'">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>

<script>
import hljs from 'highlight.js'

export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
  /*methods: {
    hightlightCode() {
      const preEl = document.querySelectorAll('pre')
      preEl.forEach((el) => {
        hljs.highlightBlock(el)
      })
    }
  }*/
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.non-dash-padding {
  padding: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
