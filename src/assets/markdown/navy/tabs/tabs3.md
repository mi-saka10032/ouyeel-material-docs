### 2 tabs导航（模式1）

示例：

```vue
<template>
  <oy-tabs
      style="margin-top: 30px;margin-bottom: 30px"
      :mode="1"
      :active="active"
      :tabs="tabs"
      @tabChange="showChange"
  />
</template>

<script>
export default {
  name: "TabsNav",
  data() {
    return {
      active: 0,
      tabs: [
        {"title": "全部订单", "total": 8888, "lastName": "元"},
        {"title": "本期成交量", "total": 888, "lastName": "元"},
        {"title": "本期已生效", "total": 888, "lastName": "元"},
        {"title": "累计未生效", "total": 888, "lastName": "元"}]
    }
  },
  methods: {
    showChange(data, index) {
      if (data !== null) {
        this.active = index;
      }
    }
  }
}
</script>
```

