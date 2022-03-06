<template>
  <div>
    <oy-steps
      style="margin-bottom: 30px;"
      :type="type"
      :active="active"
      :steps="steps"
    />
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
import Markdown from '@/assets/markdown/navy/steps/steps.md'
import MarkdownAttr from '@/assets/markdown/navy/steps/steps-attr.md'

export default {
  name: 'Steps',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      type: 1,
      active: -1,
      steps: [
        { 'type': 1, 'name': '自提单', 'badgeNum': 12 },
        { 'type': 1, 'name': '全部资源', 'badgeNum': 13 },
        { 'type': 1, 'name': '管材类', 'badgeNum': 14 },
        { 'type': 2, 'name': '线材类', 'badgeNum': 15 },
        { 'type': 0, 'name': '加工提单', 'badgeNum': 16 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
