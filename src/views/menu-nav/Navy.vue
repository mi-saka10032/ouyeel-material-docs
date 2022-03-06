<template>
  <div>
    <div>
      <Top/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <Bread/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
    <hr>
    <div>
      <Menu/>
      <div class="markdown-body">
        <Markdown3/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/views/menu-nav/navy/Top'
import Bread from '@/views/menu-nav/navy/Bread'
import Menu from '@/views/menu-nav/navy/Menu'
import Markdown1 from '@/assets/markdown/navy/navybar/navybar1.md'
import Markdown2 from '@/assets/markdown/navy/navybar/navybar2.md'
import Markdown3 from '@/assets/markdown/navy/navybar/navybar3.md'

export default {
  name: 'Navy',
  components: {
    Top,
    Bread,
    Menu,
    Markdown1,
    Markdown2,
    Markdown3
  }
}
</script>

<style scoped>

</style>
