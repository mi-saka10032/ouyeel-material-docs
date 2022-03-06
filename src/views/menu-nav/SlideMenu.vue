<template>
  <div>
    <div>
      <SlideMenu1/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <SlideMenu2/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
    <hr>
    <div class="markdown-body">
      <MarkdownAttr/>
    </div>
  </div>
</template>

<script>
import SlideMenu1 from '@/views/menu-nav/slide-menu/SlideMenu1'
import SlideMenu2 from '@/views/menu-nav/slide-menu/SlideMenu2'
import Markdown1 from '@/assets/markdown/navy/slidemenu/slidemenu1.md'
import Markdown2 from '@/assets/markdown/navy/slidemenu/slidemenu2.md'
import MarkdownAttr from '@/assets/markdown/navy/slidemenu/slidemenu-attr.md'

export default {
  name: 'SlideMenu',
  components: {
    SlideMenu1,
    SlideMenu2,
    Markdown1,
    Markdown2,
    MarkdownAttr
  }
}
</script>

<style scoped>

</style>
