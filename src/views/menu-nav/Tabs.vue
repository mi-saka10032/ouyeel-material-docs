<template>
  <div>
    <div>
      <PrimaryTabs/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <SecondTabs/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
    <hr>
    <div>
      <TabsNav/>
      <div class="markdown-body">
        <Markdown3/>
      </div>
    </div>
    <hr>
    <div>
      <TabsStyle/>
      <div class="markdown-body">
        <Markdown4/>
      </div>
    </div>
    <hr>
    <div>
      <TopNavList/>
      <div class="markdown-body">
        <Markdown5/>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryTabs from '@/views/menu-nav/tabs/PrimaryTabs'
import SecondTabs from '@/views/menu-nav/tabs/SecondTabs'
import TabsStyle from '@/views/menu-nav/tabs/TabsStyle'
import TabsNav from '@/views/menu-nav/tabs/TabsNav'
import TopNavList from '@/views/menu-nav/tabs/TopNavList'
import Markdown1 from '@/assets/markdown/navy/tabs/tabs1.md'
import Markdown2 from '@/assets/markdown/navy/tabs/tabs2.md'
import Markdown3 from '@/assets/markdown/navy/tabs/tabs3.md'
import Markdown4 from '@/assets/markdown/navy/tabs/tabs4.md'
import Markdown5 from '@/assets/markdown/navy/tabs/tabs5.md'

export default {
  name: 'Tabs',
  components: {
    PrimaryTabs,
    SecondTabs,
    TabsStyle,
    TabsNav,
    TopNavList,
    Markdown1,
    Markdown2,
    Markdown3,
    Markdown4,
    Markdown5
  }
}
</script>

<style scoped>

</style>
