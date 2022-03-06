current-page、page-size、page-sizes、total、layout这些属性不再赘述，与组合表格一致

@current-change、@size-change、@prev-click、@next-clcik这些事件不再赘述，与组合表格一致



完整代码：

```vue
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
  </div>
</template>

<script>
export default {
  name: 'Pagination',
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
```



**certain-btn**

页面是否显示确定按钮 可选,不写就没有右侧确定按钮
