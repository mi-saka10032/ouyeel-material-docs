<template>
  <div>
    <div>
      <Select/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <h1>其他下拉设计自定义组件</h1>
      <div>
        <div style="height: 10px">
          <SelectCustom1/>
        </div>
        <div class="markdown-body">
          <Markdown2/>
        </div>
      </div>
      <hr>
      <div>
        <div style="height: 10px">
          <SelectCustom2/>
        </div>
        <div class="markdown-body">
          <Markdown3/>
        </div>
      </div>
      <hr>
      <div>
        <div class="markdown-body">
          <Markdown4/>
        </div>
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
import Select from './Select'
import SelectCustom1 from './SelectCustom1'
import SelectCustom2 from './SelectCustom2'
import Markdown1 from '@/assets/markdown/select/select1.md'
import Markdown2 from '@/assets/markdown/select/select2.md'
import Markdown3 from '@/assets/markdown/select/select3.md'
import Markdown4 from '@/assets/markdown/select/select4.md'
import MarkdownAttr from '@/assets/markdown/select/select-attr.md'

export default {
  name: 'SelectComponent',
  components: {
    Select,
    SelectCustom1,
    SelectCustom2,
    Markdown1,
    Markdown2,
    Markdown3,
    Markdown4,
    MarkdownAttr
  }
}
</script>

<style scoped>

</style>
