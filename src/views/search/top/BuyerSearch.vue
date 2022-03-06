<template>
  <div>
    <oy-top-search
      ref="oytopsearch"
      placeholder="牌号 / 品种 / 规格 / 产地 / 仓库 / 店铺名称"
      :is-require-fixed-search="isRequireFixedSearch"
      :is-show-shop-cart="isShowShopCart"
      :hot-search="hotSearch"
      :focus-data="focusData"
      :auto-complete-list="autoCompleteList"
      :search-button-list="searchButtonList"
      :search-input-width="searchInputWidth"
      :top-search-logo-param="topSearchLogoParam"
      :search-cart="searchCart"
      @hotSearchClick="hotSearchClick"
      @searchButtonClick="SearchButtonClick"
      @shopCartClick="shopCartClick"
      @searchInputFocus="searchInputFocus"
      @deleteSearchValue="deleteSearchValue"
      @dropdownlistItemClick="FocusListItemClick"
      @handleInputValue="handleInputValue"
    />
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/search/top/buyerSearch.md'

export default {
  name: 'BuyerSearch',
  components: {
    Markdown
  },
  data() {
    return {
      isRequireFixedSearch: true,
      isShowShopCart: false,
      autoCompleteList: [
        {
          'name': '点鑫广告',
          'code': 'T30439',
          'url': '/search-ng/shop/5MDNwMDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T30439.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        },
        {
          'name': '大泰实业',
          'code': 'T101480',
          'url': '/search-ng/shop/==AM4QTMwEDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T101480.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        },
        {
          'name': '大力神',
          'code': 'T24916',
          'url': '/search-ng/shop/2ETO0IDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T24916.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        },
        {
          'name': '东鼎国际',
          'code': 'T285314',
          'url': '/search-ng/shop/==ANxMTN4IDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T285314.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        },
        {
          'name': 'DC51D+Z',
          'code': 'DC51D+Z',
          'url': null,
          'logo': null,
          'type': 3,
          'typeName': '牌号',
          'searchField': 'shopSign'
        },
        {
          'name': 'DC51D',
          'code': 'DC51D',
          'url': null,
          'logo': null,
          'type': 3,
          'typeName': '牌号',
          'searchField': 'shopSign'
        }
      ],
      focusData: [
        {
          'name': '邦鼎集团',
          'code': 'T109015',
          'url': '/search-ng/shop/==QNxATOwEDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T109015.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        },
        {
          'name': '邦鼎集团',
          'code': 'T109015',
          'url': '/search-ng/shop/==QNxATOwEDV/index/',
          'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T109015.png',
          'type': 1,
          'typeName': '店铺',
          'searchField': 'provider'
        }
      ],
      hotSearch: [
        {
          'imgUrl': 'http://10.60.178.69:3300/assets/activityImg/ouyeel_1018.png',
          'link': 'javascript:;'
        },
        {
          'imgUrl': 'http://10.60.178.69:3300/assets/activityImg/ouyeel_1018.png',
          'link': 'javascript:;'
        },
        '韶钢',
        'T09417',
        '八一',
        'kb19901',
        'T00730',
        '鞍钢 DX54D+Z140B'
      ],
      searchButtonList: [{ 'value': '搜全站' }],
      searchInputWidth: 500,
      topSearchLogoParam: {
        'path': 'http://www.baidu.com',
        'logoType': 'logo'
      },
      searchCart: {
        'shopCartNum': '99+',
        'isShowShopCart': true,
        'shopCartType': 'rectangle'
      }
    }
  },
  methods: {
    hotSearchClick(value) {
      console.log('热词点击', value)
    },
    SearchButtonClick(value) {
      console.log('搜索框右侧按钮', value)
    },
    shopCartClick(value) {
      console.log('购物车按钮', value)
    },
    searchInputFocus(value) {
      console.log('输入框获取焦点', value)
    },
    deleteSearchValue(value) {
      console.log('下拉列表右侧删除内容', value)
    },
    FocusListItemClick(value) {
      console.log('下拉列表点击', value)
    },
    handleInputValue(value) {
      console.log('输入内容', value)
    }
  }
}
</script>
