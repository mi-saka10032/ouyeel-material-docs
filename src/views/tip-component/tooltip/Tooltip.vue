<template>
  <div>
    <div>
      <oy-tooltip
        class="tooltip"
        :maintext="mainText"
        :content="'tooltip悬浮内容'"
      />
    </div>
    <br><br>
    <div>
      <oy-tooltip
        class="tooltip"
        :maintext="mainText"
      >
        <template #content >
          <div>tooltip插槽内容</div>
          <div>test</div>
        </template>
      </oy-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  data() {
    return {
      mainText: `<el-button><a href="https://www.baidu.com"> tooltip文本</a></el-button>`
    }
  }
}
</script>

<style scoped>
.tooltip {
  width: 100px;
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
}
</style>
