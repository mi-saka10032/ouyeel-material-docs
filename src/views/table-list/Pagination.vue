<template>
  <div>
    <oy-pagination
      :certain-btn="true"
      :current-page="1"
      :page-size="10"
      :page-sizes="[10, 20, 30, 40, 50]"
      :total="100"
      layout="prev,pager,next,sizes,total,jumper"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      @define-btn-click="defineBtnClick"
    />
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
import Markdown from '@/assets/markdown/table-list/pagination/pagination.md'
import MarkdownAttr from '@/assets/markdown/table-list/pagination/pagination-attr.md'

export default {
  name: 'Pagination',
  components: {
    Markdown,
    MarkdownAttr
  },
  methods: {
    handleCurrentChange(page) {
      console.log('当前页切换', page)
    },
    handleSizeChange(size) {
      console.log('页码切换', size)
    },
    handlePrevClick(page) {
      console.log('切换到上一页', page)
    },
    handleNextClick(page) {
      console.log('切换到下一页', page)
    },
    defineBtnClick() {
      console.log('点击确定按钮')
    }
  }
}
</script>
