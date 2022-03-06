<template>
  <oy-menu :activeId="activeId" :menuList="menuList"/>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      activeId: 5,
      menuList: [
        { '_id': 'gndx2iq8m800000000', 'path': '', 'name': '知钢主页' },
        { '_id': 'efez1omec740000000', 'path': '', 'name': '知钢工具' },
        { '_id': 'm1onu3yu5g00000000', 'path': '', 'name': '钢厂资料' },
        { '_id': 'i2im0ggswvk0000000', 'path': '', 'name': '产品手册' },
        { '_id': '75ek356hedw0000000', 'path': '', 'name': '环保|证书' },
        { '_id': 'b2qxyumvrcs0000000', 'path': '', 'name': '企业档案' },
        { '_id': 'iylijswibmo0000000', 'path': '', 'name': '专家问答专家问答' },
        { '_id': 'bq4ffjgbk5k0000000', 'path': '', 'name': '钢材定制' },
        { '_id': 'a5j6c8wkmmo0000000', 'path': '', 'name': '技术服务' },
        { '_id': '1blncxbp441s000000', 'path': '', 'name': '在线培训' },
        { '_id': '4mbxw2hvgfs0000000', 'path': '', 'name': '书籍购买' },
        { '_id': 'qh4h10umblc0000000', 'path': '', 'name': '会员充值' }
      ]
    }
  }
}
</script>
