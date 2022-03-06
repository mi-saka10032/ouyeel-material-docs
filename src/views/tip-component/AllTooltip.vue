<template>
  <div>
    <div>
      <Tooltip/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <Popover/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/views/tip-component/tooltip/Tooltip'
import Popover from '@/views/tip-component/tooltip/Popover'
import Markdown1 from '@/assets/markdown/tip-component/tooltip/tooltip1.md'
import Markdown2 from '@/assets/markdown/tip-component/tooltip/tooltip2.md'

export default {
  name: 'AllTooltip',
  components: {
    Tooltip,
    Popover,
    Markdown1,
    Markdown2
  }
}
</script>

<style scoped>

</style>
