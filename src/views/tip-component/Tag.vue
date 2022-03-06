<template>
  <div id="tag">
    <div>
      <div>
        <oy-tag size="medium">中型标签</oy-tag>
        <oy-tag >默认标签</oy-tag>
        <oy-tag size="small">小标签</oy-tag>
        <oy-tag size="mini">最小标签</oy-tag>
      </div>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <oy-tag closable >可关闭标签</oy-tag>
        <oy-tag :closable="false">不可关闭，默认属性</oy-tag>
      </div>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <oy-tag color="#F43651" closable v-on:click="tagClick">改背景色1</oy-tag>
        <oy-tag color="#FFFFEE">改背景色2</oy-tag>
      </div>
      <div class="markdown-body">
        <Markdown3/>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <oy-tag width="50px">最大宽度最大宽度最大宽度</oy-tag>
      </div>
      <div>
        <oy-tag closable @click="tagClick" @close="tagClick()">{{closableContent}}</oy-tag>
      </div>
      <div class="markdown-body">
        <Markdown4/>
      </div>
    </div>
    <hr>
    <div>
      <div class="markdown-body">
        <MarkdownAttr/>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown1 from '@/assets/markdown/tip-component/tag/tag1.md'
import Markdown2 from '@/assets/markdown/tip-component/tag/tag2.md'
import Markdown3 from '@/assets/markdown/tip-component/tag/tag3.md'
import Markdown4 from '@/assets/markdown/tip-component/tag/tag4.md'
import MarkdownAttr from '@/assets/markdown/tip-component/tag/tag-attr.md'

export default {
  name: 'Tag',
  components: {
    Markdown1,
    Markdown2,
    Markdown3,
    Markdown4,
    MarkdownAttr
  },
  data() {
    return {
      closableContent: '触发点击事件'
    }
  },
  methods: {
    // click事件无效
    tagClick() {
      console.log(this.closableContent);
    }
  }
}
</script>

<style scoped>
#tag {
  padding: 50px 50px;
}
.oy-tag {
  margin: 20px 20px;
}
</style>
