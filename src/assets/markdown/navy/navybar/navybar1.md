**特别注意**

导航栏中涉及的链接跳转均为普通链接跳转，浪费了vue-router性能，使用时注意



### top

注意：oy-user-card组件需要zhpt组件库支持，且数值较为复杂，该组件不做过多描述

如无特殊需求，请默认使用zpht组件库的 top-label 组件，并在 main.js 中 设定 window.Global = 静态资源路径

```vue
<template>
  <oy-top
    :islogin="islogin"
    :top-left="topLeft"
    :top-right="topRight"
    :phone-cfg="phoneCfg"
    @oy-click="handleClick"
    @oy-click-text="handleClickText"
  >
    <template slot="userInfo">
      <oy-user-card
        ref="userCard"
        :users-cfg="usersCfg"
        @oy-click="handleClick"
        @oy-click-text="handleClickText"
      ></oy-user-card>
    </template>
    <template slot="netNav">
      <oy-net-nav
        :rows="rows"
        @oy-click="handleClick"
      ></oy-net-nav>
    </template>
  </oy-top>
</template>

<script>
import OyUserCard from '@ouyeel/vue-zhpt-statics/components/OyUserCard'

export default {
  name: 'Top',
  components: {
    OyUserCard
  },
  data() {
    return {
      islogin: true,
      phoneCfg: {
        'img': 'http://mziu.club/w2.jpg',
        'title': '欧冶钢好',
        'text': '扫码立即下载',
        'path': 'http://mziu.club/w2.jpg'
      },
      topLeft: [
        {
          'icon': 'iconfont icon-zuobiao',
          'title': '华东',
          'selection': true,
          'data': [
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' }
          ]
        },
        { 'title': '首页', 'path': 'OyTop' }
      ],
      topRight: [
        {
          'title': '采购业务',
          'selection': true,
          'data': [
            { 'name': '华东动画', 'path': 'huadong' },
            { 'name': '华谊影视', 'path': 'huadong' },
            { 'name': '企鹅电竞文化', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' }
          ]
        },
        {
          'title': '销售业务',
          'selection': true,
          'data': [
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' }
          ]
        }, {
          'title': '业务准入',
          'selection': true,
          'width': '190px',
          'data': [
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东华东华东', 'path': 'huadong' }
          ]
        }, {
          'title': '收藏夹',
          'selection': true,
          'width': '190px',
          'data': [
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东华东华东', 'path': 'huadong' }
          ]
        }, {
          'title': '客户服务',
          'selection': true,
          'newMsg': '新消息',
          'data': [
            { 'name': '华东', 'path': 'huadong', 'newMsg': '新消息1' },
            { 'name': '华东1', 'path': 'huadong', 'newMsg': '' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' },
            { 'name': '华东', 'path': 'huadong' }
          ]
        }
      ],
      usersCfg: {
        userCodeStart: 'T',
        compayNameShow: '',
        phone: 12345678,
        data: {
          username: '你的名字竟然有十个字',
          sellerMedal: '3',
          buyer_user_credit: 60,
          buyer_user_level: 0,
          provider_user_credit: 10,
          provider_user_level: -1,
          provider_return_model: '-',
          balance: {
            '2000': 2000
          },
          unit: '999',
          kt: '60',
          bzjEDu: '90',
          bzjunit: '99',
          zt: 1,
          baiTiaoEDu: 1000,
          btunit: '92',
          points: 88
        },
        path: ''
      },
      rows: [
        {
          'title': '精选主题',
          'groups': [
            { 'items': [{ 'title': '欧冶商城', 'path': '' }, { 'title': '产能预售', 'path': '' }] },
            { 'items': [{ 'title': '打包抢购', 'path': '' }, { 'title': '商家直营', 'path': '' }] },
            { 'items': [{ 'title': '统购分销', 'path': '' }, { 'title': '分析中心', 'path': '' }] },
            { 'items': [{ 'title': '知钢', 'path': '' }, { 'title': '询比价专区', 'path': '' }] },
            { 'items': [{ 'title': '小夏管家', 'path': '' }, { 'title': '', 'path': '' }] }
          ]
        },
        {
          'title': '欧冶服务',
          'groups': [
            { 'items': [{ 'title': '交易中心', 'path': '' }, { 'title': '欧冶物流', 'path': '' }] },
            { 'items': [{ 'title': '欧冶采购', 'path': '' }, { 'title': '欧冶国际', 'path': '' }] },
            { 'items': [{ 'title': '能力开放', 'path': '' }, { 'title': '循环宝', 'path': '' }] },
            { 'items': [{ 'title': '云管家', 'path': '' }, { 'title': '', 'path': '' }] }
          ]
        }, {
          'title': '友情链接',
          'groups': [
            { 'items': [{ 'title': '宝武集团', 'path': '' }, { 'title': '马钢集团', 'path': '' }] },
            { 'items': [{ 'title': '首钢集团', 'path': '' }, { 'title': '邯郸钢铁', 'path': '' }] },
            { 'items': [{ 'title': '唐山钢铁', 'path': '' }, { 'title': '本钢集团', 'path': '' }] },
            { 'items': [{ 'title': '重庆钢铁', 'path': '' }, { 'title': '韶关钢铁', 'path': '' }] },
            { 'items': [{ 'title': '云筑网', 'path': '' }] }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick() {
      console.log('点击当前对象')
      console.log(arguments)
    },
    handleClickText() {
      console.log('点击文本对象')
      console.log(arguments)
    }
  },
  created() {
    window.Global = {
      staticsPath: 'https://dev-resource-ng.ouyeel.com/statics/'
    }
  }
}
</script>
```



属性

| 参数     | 说明         | 类型    | 默认值 | 可选值     |
| :------- | :----------- | :------ | :----- | :--------- |
| islogin  | 登录状态     | Boolean | false  | true/false |
| topLeft  | 左上导航信息 | Array   | - -    | - -        |
| topRight | 右上导航信息 | Array   | [ ]    | - -        |
| usersCfg | 用户信息     | Object  | - -    | - -        |
| rows     | 导航列表     | Array   | - -    | - -        |
| newMsg   | 新消息tag    | String  | - -    | - -        |

