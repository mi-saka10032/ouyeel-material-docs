同时设置tabs和subTabs数据，可显示两级数据，需要添加template插槽



示例：

```vue
<template>
  <div>
    <oy-tabs
        :mode="0"
        :active="active"
        :subActive="subActive"
        :tabs="tabs"
        :subTabs="subTabs"
        @tabChange="showChange"
    >
      <template slot="frName">
        <a href="#">外部地址</a>
      </template>
      <template v-slot:subcontent="{ item }">
        <span>{{item.firstName}}</span>
        <span class="subContent_item_quantity">{{item.quantity}}</span>
        <span>{{item.lastName}}</span>
      </template>
    </oy-tabs>
  </div>
</template>

<script>
export default {
  name: "SecondTabs",
  data() {
    return {
      active: 0,
      subActive: 0,
      tabs: [
        {"icon": "icon-quanbuziyuan", "name": "自提单", "type": 1, "badgeNum": 12},
        {"type": 2, "icon": "icon-pinzhong", "name": "全部资源", "badgeNum": 13},
        {"type": 2, "icon": "icon-guancaitiaogang", "name": "管材类", "badgeNum": 14},
        {"type": 2, "icon": "icon-xiancailei", "name": "线材类", "badgeNum": 15},
        {"name": "加工提单", "type": 0}
      ],
      subTabs: [
        {"firstName": "全部", "lastName": "单", "quantity": 2044, "type": 0},
        {"id": 2, "firstName": "待指定提货", "lastName": "单", "quantity": 447, "type": 0},
        {"id": 3, "firstName": "待收货确认", "lastName": "单", "quantity": 41, "type": 0},
        {"id": 4, "firstName": "待付仓货费", "lastName": "单", "quantity": 1, "type": 0},
        {"id": 1111, "firstName": "异议仓费", "lastName": "单", "quantity": 2, "type": 0}
      ]
    }
  },
  methods: {
    showChange(data, index) {
      if (data !== null) {
        this.active = index;
        this.subActive = index;
      }
    }
  }
}
</script>
```

