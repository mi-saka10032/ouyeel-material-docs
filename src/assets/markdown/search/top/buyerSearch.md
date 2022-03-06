**is-require-fixed-search**

值设为true后，将开启搜索栏在页面下滑时的固定效果。



**is-show-shop-cart**

值需设为false，防止自带的购物车按钮在搜索框左侧出现。



**top-search-logo-param**

左侧logo相关，{ path:" " , logoType : "logo" , text: " " }



该买家搜索栏绝大部分属性与事件均与 oy-search一致，其余属性不再作详细分析



完整代码：

```vue
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
  </div>
</template>

<script>
export default {
  name: 'BuyerSearch',
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
```



**属性**

| 参数                 | 说明                   | 类型    | 默认值                                       | 可选值                                                       |
| :------------------- | :--------------------- | :------ | :------------------------------------------- | :----------------------------------------------------------- |
| placeholder          | 输入框占位文本         | String  | -                                            | - -                                                          |
| isShowShopCart       | 控制是否显示购物车按钮 | Boolean | true                                         | - -                                                          |
| hotSearch            | 热词列表               | Array   | []                                           | - -                                                          |
| searchButtonList     | 搜索框右侧按钮列表     | Array   | [{value: "搜全站"}]                          | - -                                                          |
| focusData            | 最近搜索列表           | Array   | []                                           | - -                                                          |
| autoCompleteList     | 下拉匹配列表           | Array   | []                                           | - -                                                          |
| searchInputWidth     | 搜索输入框的宽度       | Number  | 464                                          | - -                                                          |
| topSearchLogoParam   | 左侧logo相关           | Object  | { path:" " , logoType : "logo" , text: " " } | 【注:logoType：当前显示的logo图类型；默认logo: 179×64 ,logo1:144×52；text：logo右侧文字】 |
| isRequireFixedSearch | 页面是否固定搜索栏     | Boolean | true                                         | - -                                                          |



**事件**

| 事件                  | 说明                   | 回调                                           |
| :-------------------- | :--------------------- | :--------------------------------------------- |
| shopCartClick（无效） | 购物车点击事件         | 当前对象                                       |
| hotSearchClick        | 热词列表点击           | 当前对象                                       |
| searchButtonClick     | 搜索框右侧按钮         | {value:当前点击对象,searchVal:input输入的内容} |
| dropdownlistItemClick | 下拉列表的点击事件     | item:当前点击对象;index:当前对象的索引         |
| deleteSearchValue     | 下拉列表右侧的删除事件 | item:当前点击对象;index:当前对象的索引         |
| searchInputFocus      | 输入框获取焦点事件     | -                                              |
| handleInputValue      | 输入事件               | input输入的内容                                |