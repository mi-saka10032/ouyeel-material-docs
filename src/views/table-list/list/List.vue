<template>
  <oy-list
    style="width: 500px;height: 220px;"
    :list="list"
    :btnOpts="btnOpts"
    :btnType="btnType"
    :listItemLine="listItemLine"
    @list-item-handle="showListContent"
    @btn-click="showClick"
  >
    <template v-slot:listTop>
      自定义头部
    </template>
    <template v-slot:imageDesc>
      自定义中间内容
    </template>
  </oy-list>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      btnOpts: {
        show: true,
        txt: '更多 >'
      },
      btnType: 'primary',
      list: [
        {
          '_id': 'jwyswl3fqb40000000',
          'desc': '宝钢12月份国内期货销售价格调整的公告',
          'time': '2020:4:15'
        },
        { '_id': 'v9xyer7x0kw0000000', 'desc': '宝钢、武钢11月价格调整政策' },
        {
          '_id': 'wht1on7dwww0000000',
          'desc': '关于2017年10月份宝钢股份线材产品国内期货销售价格调整的通知宝钢、武钢11月价格调整政策宝钢、武钢11月价格调整政策',
          'time': '2020:4:15'
        }
      ],
      listItemLine: true
    }
  },
  methods: {
    showListContent(data) {
      console.log(data)
    },
    showClick(v) {
      console.log(v)
      console.log('按钮被点击了')
    }
  }
}
</script>

<style scoped>

</style>
