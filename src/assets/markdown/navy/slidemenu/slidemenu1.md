**特别注意**

菜单提供的url索引为普通url跳转，浪费了vue-router性能，使用时请注意。



## 1.基础菜单

```vue
<template>
  <oy-slide-menu
    :tab-cur-index="tabCurIndex"
    :hide-switch-tab="hideSwitchTab"
    :tab-list="tabList"
    :buyer-or-single-list="buyerOrSingleList"
    :seller-list="sellerList"
    :other-list="otherList"
    :active-index="curInd"
  >
  </oy-slide-menu>
</template>

<script>
export default {
  name: 'SlideMenu1',
  data() {
    return {
      curInd: 'xhcgdd',
      hideSwitchTab: false,
      tabList: [
        { 'name': '采购', 'index': 0, 'url': 'https://www.baidu.com' },
        { 'name': '销售', 'index': 1, 'url': 'https://www.baidu.com' }
      ],
      tabCurIndex: 0,
      buyerOrSingleList: [
        {
          'mainTitle': '上传中心',
          'pageUrl': '',
          'hasSubMenu': false
        },
        {
          'mainTitle': '采购管理',
          'pageUrl': '#',
          'hasSubMenu': true,
          'subMenuList': [
            { 'title': '现货采购订单', 'pageUrl': 'https://www.163.com', 'index': 'xhcgdd' },
            { 'title': '采购合同', 'pageUrl': '#', 'index': 'cght' },
            { 'title': '采购管理', 'pageUrl': '#', 'index': 'chcggl' }
          ]
        },
        {
          'mainTitle': '物流管理',
          'pageUrl': '#',
          'hasSubMenu': true,
          'subMenuList': [
            { 'title': '我的业务审批', 'pageUrl': '#', 'index': 'ywsp' },
            { 'title': '我要提单', 'pageUrl': '#', 'index': 'wytd' }
          ]
        },
        {
          'mainTitle': '物流管理1',
          'pageUrl': '#',
          'hasSubMenu': true,
          'subMenuList': [
            { 'title': '我的业务审批', 'pageUrl': '#', 'index': 'ywsp3' },
            { 'title': '我要提单', 'pageUrl': '#', 'index': 'wytd4' }
          ]
        }
      ],
      sellerList: [
        {
          'mainTitle': '资源管理1',
          'pageUrl': '#',
          'hasSubMenu': true,
          'subMenuList': [
            { 'title': '挂牌资源', 'pageUrl': '#', 'index': 'xhcg' },
            { 'title': '特价资源', 'pageUrl': '#', 'index': 'tjzy' },
            { 'title': '抢购资源', 'pageUrl': '#', 'index': 'qgzy' },
            { 'title': '定向资源', 'pageUrl': '#', 'index': 'dxzy' }
          ]
        },
        {
          'mainTitle': '销售管理',
          'pageUrl': '#',
          'hasSubMenu': true,
          'subMenuList': [
            { 'title': '销售订单', 'pageUrl': '#', 'index': 'xsdd' },
            { 'title': '分销订单', 'pageUrl': '#', 'index': 'fxdd' }
          ]
        }
      ],
      otherList: [{ 'index': '96', 'title': '仓储服务0', 'pageUrl': '#', type: 'link' }]
    }
  }
}
</script>
```



**tabCurIndex**

默认显示的tab，number类型，指向tab



**activeIndex**

默认高亮显示的菜单，string类型，指向submenu



**hideSwitchTab**

是否隐藏tab，默认false



**tabList**

tab菜单数据，Array<Object>类型



**buyerOrSingleList**

左tab菜单的list数据，Array<Object>类型

在开启了hasSubMenu：true这个属性后，允许开启二级菜单



**sellerList**

右tab菜单的list数据，Array<Object>类型



**otherList**

底部插槽数据，Array<Object>类型

Object中默认三个属性：index、pageUrl、title。

开启第四属性 type: 'link' 后，会失去原有的el-link提供的样式，恢复为原始的a标签样式。