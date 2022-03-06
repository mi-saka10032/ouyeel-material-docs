### 1 一级标签&二级标签（模式0）

只设置tabs数据时，为一级标签

示例代码：

```vue
<template>
  <oy-tabs
      style="margin-bottom: 20px;"
      :mode="0"
      :active="active"
      :tabs="tabs"
      @tabChange="showChange"
  />
</template>

<script>
export default {
  name: "PrimaryTabs",
  data() {
    return {
      active: 0,
      tabs: [
        {"icon": "icon-quanbuziyuan", "name": "自提单", "badgeNum": 12},
        {"icon": "icon-pinzhong", "name": "全部资源", "badgeNum": 13},
        {"icon": "icon-guancaitiaogang", "name": "管材类", "badgeNum": 14},
        {"icon": "icon-xiancailei", "name": "线材类", "badgeNum": 15},
        {"name": "加工提单", "badgeNum": 16}
      ]
    }
  },
  methods: {
    showChange(data, index) {
      if (data !== null) {
        this.active = index;
      }
    }
  },
}
</script>
```

