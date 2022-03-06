<template>
  <div>
    <div>
      <List/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <ContrastList/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/views/table-list/list/List'
import ContrastList from '@/views/table-list/list/ContrastList'
import Markdown1 from '@/assets/markdown/table-list/list/list1.md'
import Markdown2 from '@/assets/markdown/table-list/list/list2.md'

export default {
  name: 'AllList',
  components: {
    List,
    ContrastList,
    Markdown1,
    Markdown2
  }
}
</script>

<style scoped>

</style>
