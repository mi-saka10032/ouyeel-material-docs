<template>
  <div class="dashboard-container">
    <h2 class="dashboard-title">Ouyeel组件库文档（内部版）</h2>
    <Meteor/>
  </div>
</template>

<script>
import Meteor from '@/components/Meteor/Meteor'

export default {
  name: 'Dashboard',
  components: {
    Meteor
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    position: relative;
    height: calc(100vh - 50px);
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }

  &-title {
    position: absolute;
    z-index: 999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    font-family: "PingFang SC";
    font-size: 50px;
    text-align: center;
  }
}
</style>
