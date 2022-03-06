<template>
  <div>
    <oy-shop-left
      :has-follow="hasFollow"
      :logoParams="logoParams"
      :qrCodeParams="qrCodeParams"
      @switchAttention="switchAttention"
      @jumpShopPage="jumpShopPage"
    />
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/search/top/shopleftSearch.md'

export default {
  name: 'ShopLeftSearch',
  components: {
    Markdown
  },
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
