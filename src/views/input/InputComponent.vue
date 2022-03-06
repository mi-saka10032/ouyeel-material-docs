<template>
  <div>
    <div>
      <base-input/>
      <div class="markdown-body">
        <Markdown1/>
      </div>
    </div>
    <hr>
    <div>
      <SearchInput/>
      <div class="markdown-body">
        <Markdown2/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput'
import SearchInput from './SearchInput'
import Markdown1 from '@/assets/markdown/input/input1.md'
import Markdown2 from '@/assets/markdown/input/input2.md'

export default {
  name: 'InputComponent',
  components: {
    BaseInput,
    SearchInput,
    Markdown1,
    Markdown2
  }
}
</script>
