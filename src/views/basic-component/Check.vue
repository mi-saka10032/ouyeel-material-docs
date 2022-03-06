<template>
  <div>
    <RadioCheckBox/>
    <div class="markdown-body">
      <CheckMarkdown1/>
    </div>
    <hr>
    <CheckBoxMore/>
    <div class="markdown-body">
      <CheckMarkdown2/>
    </div>
    <hr>
    <RadioCheckBoxTag/>
  </div>
</template>

<script>
import RadioCheckBox from '@/views/basic-component/check/RadioCheckBox'
import RadioCheckBoxTag from '@/views/basic-component/check/RadioCheckBoxTag'
import CheckBoxMore from '@/views/basic-component/check/CheckBoxMore'
import CheckMarkdown1 from '@/assets/markdown/basic-component/check/check1.md'
import CheckMarkdown2 from '@/assets/markdown/basic-component/check/check2.md'

export default {
  name: 'Check',
  components: {
    RadioCheckBox,
    RadioCheckBoxTag,
    CheckBoxMore,
    CheckMarkdown1,
    CheckMarkdown2
  }
}
</script>

<style scoped>

</style>
