### 2.面包屑导航

示例：

```vue
<template>
  <oy-bread-crumb
      :BreadCrumbList="breadCrumbList"
  />
</template>

<script>
export default {
  name: "Bread",
  data() {
    return {
      breadCrumbList: [
        {"title": "我是买家", "href": "/buyer-ng/order/myOrder"},
        {"title": "统购分销意向", "href": "/buyer-ng/order/myOrder"},
        {"title": "意向详情", "href": "/buyer-ng/onlineOrdering/table-list", "current": true}
      ]
    }
  }
}
</script>
```



属性

| 参数           | 说明     | 类型  | 默认值 |
| :------------- | :------- | :---- | :----- |
| BreadCrumbList | 导航列表 | Array | --     |

