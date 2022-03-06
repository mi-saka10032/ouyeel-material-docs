<template>
  <oy-slide-menu
    :tab-cur-index="tabCurIndex"
    :hide-switch-tab="hideSwitchTab"
    :tab-list="tabList"
    :buyer-or-single-list="buyerList"
    :active-index="curInd"
  >
  </oy-slide-menu>
</template>

<script>
export default {
  name: 'SlideMenu2',
  data() {
    return {
      curInd: '0',
      hideSwitchTab: false,
      tabList: [{ 'name': '采购', 'index': 0, 'url': 'https://www.baidu.com' }],
      tabCurIndex: 0,
      buyerList: [
        {
          'mainTitle': '上传中心',
          'pageUrl': '#',
          'hasSubMenu': false
        },
        {
          'mainTitle': '采购管理',
          'pageUrl': '#',
          'hasSubMenu': false
        },
        {
          'mainTitle': '物流管理',
          'pageUrl': '#',
          'hasSubMenu': false
        },
        {
          'mainTitle': '物流管理1',
          'pageUrl': '#',
          'hasSubMenu': false
        }
      ]
    }
  }
}
</script>
