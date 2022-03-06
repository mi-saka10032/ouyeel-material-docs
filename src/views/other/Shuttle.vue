<template>
  <div>
    <oy-transfer
      :active-index="activeIndex"
      :data="transferData"
      :target-title="targetTitle"
      :value="value"
      @input="changeTransfer"
      @update:activeIndex="switchTransfer"
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
import Markdown from '@/assets/markdown/other/shuttle.md'
import MarkdownAttr from '@/assets/markdown/other/shuttle-attr.md'

export default {
  name: 'Shuttle',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      activeIndex: 0,
      transferData: [
        {
          'label': '按供应商展示',
          'list': [
            { 'key': 0, 'label': '供应商0' },
            { 'key': 1, 'label': '供应商1' },
            { 'key': 2, 'label': '供应商2' },
            { 'key': 3, 'label': '供应商3' },
            { 'key': 4, 'label': '供应商4' },
            { 'key': 5, 'label': '供应商5' },
            { 'key': 6, 'label': '供应商6' },
            { 'key': 7, 'label': '供应商7' },
            { 'key': 8, 'label': '供应商8' },
            { 'key': 9, 'label': '供应商9' }
          ]
        },
        {
          'label': '按群组展示按群组展示',
          'list': [
            { 'key': 0, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组0' },
            { 'key': 1, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组1' },
            { 'key': 2, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组2' },
            { 'key': 3, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组3' },
            { 'key': 4, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组4' },
            { 'key': 5, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组5' },
            { 'key': 6, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组6' },
            { 'key': 7, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组7' },
            { 'key': 8, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组8' },
            { 'key': 9, 'label': '群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组9' }
          ]
        }
      ],
      targetTitle: '群组',
      value: []
    }
  },
  methods: {
    changeTransfer(index) {
      console.log('穿梭', index)
      this.value = index
    },
    switchTransfer(index) {
      console.log('切换展示模式', index)
      this.activeIndex = index
    }
  }
}
</script>
