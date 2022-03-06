**店铺左侧部分代码和文档不完整，需要zhpt中的ShopSearchLeft组件支持，且传参较为复杂， 本文档不作过多描述**



示例：

```vue
<template>
  <div>
    <oy-shop-left
      :has-follow="hasFollow"
      :logoParams="logoParams"
      :qrCodeParams="qrCodeParams"
      @switchAttention="switchAttention"
      @jumpShopPage="jumpShopPage"
    />
  </div>
</template>

<script>
export default {
  name: 'ShopLeftSearch',
  data() {
    return {
      hasFollow: false,
      logoParams: {
        'url': 'http://test-resource-ng.ouyeel.com/statics/S3?fileName=1.png&path=public_hy_shopLogo/SCDPT1068201.png&time=1628478039263',
        'altName': '宝山钢铁股份欧冶商城店'
      },
      qrCodeParams: {
        'url': 'http://test.ouyeel.com/search-ng/shop/SCDPT1068201/qrCode',
        'text': '扫码查看手机店铺'
      },
      shopDetailInfo: {
        'shopName': '宝山钢铁股份欧冶商城店',
        'rateNum': 80,
        'score': 3
      }
    }
  },
  methods: {
    switchAttention() {
      this.hasFollow = !this.hasFollow
      console.log('关注切换')
    },
    jumpShopPage(e) {
      console.log('左侧logo被点击了')
    }
  }
}
</script>
```



**属性**

| 参数           | 说明           | 类型                 |        |      |
| :------------- | :------------- | :------------------- | :----- | :--- |
| hasFollow      | 关注标识       | Boolean              | --     |      |
| logoParams ⬇   | logo信息       | Object               |        |      |
|                | 参数           | 说明                 | 默认值 |      |
|                | url            | 左侧店铺logo-url     | --     |      |
|                | altName        | 左侧店铺logo替代文本 | --     |      |
| qrCodeParams ⬇ | 右侧二维码相关 | Object               |        |      |
|                | 参数           | 说明                 | 默认值 |      |
|                | url            | 二维码图片           | --     |      |
|                | text           | 二维码下方提示文本   | --     |      |



**事件**

| 事件名          | 说明                      | 回调参数 |
| :-------------- | :------------------------ | :------- |
| switchAttention | 切换关注按钮状态事件      | --       |
| jumpShopPage    | 左侧logo+公司区域点击事件 | --       |