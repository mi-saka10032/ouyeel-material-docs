<template>
  <div>
    <div>
      <oy-button @click="visibility = true">测试弹窗</oy-button>
      <oy-dialog
        ref="dialog"
        :visible="visibility"
        title="测试弹框"
        @confirm="visibility = false"
        @cancel="visibility = false"
        @close="visibility = false"
      >
        <div>Hello</div>
        <div>World</div>
        <template #footer>
          <div>替换底部按钮</div>
          <el-button @click="visibility = false">取消</el-button>
          <el-button @click="visibility = false">确定</el-button>
        </template>
      </oy-dialog>
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
import Markdown from '@/assets/markdown/tip-component/dialog/dialog.md'
import MarkdownAttr from '@/assets/markdown/tip-component/dialog/dialog-attr.md'

export default {
  name: 'Dialog',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      visibility: false
    }
  }
}
</script>
