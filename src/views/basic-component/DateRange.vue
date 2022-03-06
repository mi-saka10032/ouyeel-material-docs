<template>
  <div>
    <div>
      <Date1/>
      <div class="markdown-body">
        <DateMarkdown1/>
      </div>
    </div>
    <hr>
    <div>
      <Date2/>
      <div class="markdown-body">
        <DateMarkdown2/>
      </div>
    </div>
    <hr>
    <div>
      <Date3/>
      <div class="markdown-body">
        <DateMarkdown3/>
      </div>
    </div>
    <hr>
    <div>
      <div class="markdown-body">
        <DateMarkdownAttr/>
      </div>
    </div>
  </div>
</template>

<script>
import Date1 from '@/views/basic-component/date/Date1'
import Date2 from '@/views/basic-component/date/Date2'
import Date3 from '@/views/basic-component/date/Date3'
import DateMarkdown1 from '@/assets/markdown/basic-component/date/date1.md'
import DateMarkdown2 from '@/assets/markdown/basic-component/date/date2.md'
import DateMarkdown3 from '@/assets/markdown/basic-component/date/date3.md'
import DateMarkdownAttr from '@/assets/markdown/basic-component/date/date-attr.md'

export default {
  name: 'DateRange',
  components: {
    Date1,
    Date2,
    Date3,
    DateMarkdown1,
    DateMarkdown2,
    DateMarkdown3,
    DateMarkdownAttr
  }
}
</script>

<style scoped>

</style>
