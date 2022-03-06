**rightOperation**

标题栏右侧常用配置列表，Array<Object>类型

结构组成示例：

```vue
rightOperation: [
  {
    type: 'link', 
    text: '测试链接1', 
    link: 'https://www.baidu.com'},
  {
    type: 'button',
    props: {
      text: '测试按钮1'
    }
  }
]
```



**customContent**

插槽名字，用于在右侧添加link和button之外的自定义内容，也可以不写rightOperation，直接定义插槽实现

结构组成示例：

```vue
<OyTitle :mainTitle="mainTitle">
      <template #customContent>
        <div>右侧自定义内容</div>
      </template>
</OyTitle>
```



完整代码示例：

```vue
<template>
  <oy-title
      :mainTitle="mainTitle"
      :rightOperation="rightOperation"
      @operateClick="showObject"
  >
    <template v-slot:customContent>
      <span>自定义内容1</span>&nbsp;&nbsp;
      <span>自定义内容2</span>
    </template>
  </oy-title>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      mainTitle: '挂牌资源',
      rightOperation: [
        {
          type: 'link',
          text: '测试链接1',
          link: 'https://www.baidu.com'},
        {
          type: 'button',
          props: {
            text: '测试按钮1'
          }
        }
      ]
    }
  },
  methods: {
    showObject(data) {
      console.log(data);
    }
  },
}
</script>
```
