<template>
  <div>
    <oy-title
      :mainTitle="mainTitle"
      :rightOperation="rightOperation"
      @operateClick="showObject"
    >
      <template v-slot:customContent>
        <span>自定义内容1</span>&nbsp;&nbsp;
        <span>自定义内容2</span>
      </template>
    </oy-title>
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
import Markdown from '@/assets/markdown/navy/title/title.md'
import MarkdownAttr from '@/assets/markdown/navy/title/title-attr.md'

export default {
  name: 'Title',
  components: {
    Markdown,
    MarkdownAttr
  },
  data() {
    return {
      mainTitle: '挂牌资源',
      rightOperation: [
        {
          type: 'link',
          text: '测试链接1',
          link: 'https://www.baidu.com'
        },
        {
          type: 'button',
          props: {
            text: '测试按钮1'
          }
        }
      ]
    }
  },
  methods: {
    showObject(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
