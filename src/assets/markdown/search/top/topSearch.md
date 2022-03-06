完整代码：

```vue
<template>
  <div>
    <oy-search
      ref="oysearch"
      placeholder="店铺名称"
      :hot-search="hotSearch"
      :oysearch-id="oysearchId"
      :oysearch-ids="oysearchIds1"
      :focus-data="focusData"
      :auto-complete-list="autoCompleteList"
      :search-button-list="searchButtonList"
      :search-cart="searchCart"
      :search-input-width="searchInputWidth"
      @hotSearchClick="hotSearchClick"
      @searchButtonClick="SearchButtonClick"
      @searchInputFocus="searchInputFocus"
      @deleteSearchValue="deleteSearchValue"
      @dropdownlistItemClick="FocusListItemClick"
      @handleInputValue="handleInputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'NormalSearch',
  data() {
    return {
      oysearchId: 'oysearchId1',
      oysearchIds1: {
        'focusId': 'search-focus-id',
        'autocompleteId': 'autocomplete-id'
      },
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
      searchButtonList: [
        { 'value': '搜全站' },
        { 'value': '搜专区' }
      ],
      searchCart: {
        'shopCartNum': '99+',
        'isShowShopCart': true,
        'shopCartType': 'rectangle'
      },
      searchInputWidth: 400
    }
  },
  methods: {
    hotSearchClick(value) {
      console.log('热词点击', value)
    },
    SearchButtonClick(value) {
      console.log('搜索框右侧按钮', value)
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



## 以下为属性分析



**hot-search**

热词列表，Array类型

每个元素可以是字符串，也可以是 { imgUrl: 'xxxxx.png', link: 'xxxx' } 的对象，会加载图片并提供链接



**oysearch-id**	**oysearch-ids**

组件的id值，一般默认为

```js
oysearchId: 'oysearchId1',
oysearchIds1: {
	focusId: 'search-focus-id',
	autocompleteId: 'autocomplete-id'
}
```



**focus-data**

下拉菜单列表，Array<Object>类型，Object格式为

```js
{
	'name': '邦鼎集团',
	'code': 'T109015',
	'url': '/search-ng/shop/==QNxATOwEDV/index/',
	'logo': '/S3?fileName=1.png&path=public_hy_shopLogo/T109015.png',
	'type': 1,
	'typeName': '店铺',
	'searchField': 'provider'
}
```



**auto-complete-list**

在input输入时根据输入内容弹出的自动补全数据内容，同样是Array<Object>类型，Object格式与focus-data的一致。



**search-button-list**

搜索按钮列表，Array类型

```js
[
  { 'value': '搜全站' },
  { 'value': '搜专区' }
]
```



**search-cart**

购物车数据选项，注意购物车设置后跳转链接固定为 '/buyer-ng/cart/myCart' ，选项暂时不能修改。

shopCartType 除了 rectangle 外， 还有 circle 效果，变成圆形按钮

```js
searchCart: {
  'shopCartNum': '99+',
  'isShowShopCart': true,
  'shopCartType': 'rectangle'
}
```



**search-input-width**

搜索input框的宽度，number类型



**属性**

| 参数             | 说明               | 类型   | 默认值                                                       | 可选值      |
| :--------------- | :----------------- | :----- | :----------------------------------------------------------- | :---------- |
| placeholder      | 输入框占位文本     | String | -                                                            | - -         |
| hotSearch        | 热词列表           | Array  | []                                                           | - -         |
| searchButtonList | 搜索框右侧按钮列表 | Array  | [{value: "搜全站"}]                                          | - -         |
| focusData        | 最近搜索列表       | Array  | []                                                           | - -         |
| autoCompleteList | 下拉匹配列表       | Array  | []                                                           | - -         |
| searchInputWidth | 搜索输入框的宽度   | Number | 464                                                          | - -         |
| searchCart       | 右侧购物车相关     | Object | {ShopCartNum: 0,isShowShopCart: false,shopCartType:"circle"} | "rectangle" |



**事件**

| 事件                  | 说明                               | 回调                                            |
| :-------------------- | :--------------------------------- | :---------------------------------------------- |
| hotSearchClick        | 热词列表点击                       | 当前对象                                        |
| searchButtonClick     | 搜索框右侧按钮                     | {value:当前点击对象,searchVal:input 输入的内容} |
| dropdownlistItemClick | 下拉列表的点击事件                 | item:当前点击对象;index:当前对象的索引          |
| deleteSearchValue     | 下拉列表右侧的删除事件             | item:当前点击对象;index:当前对象的索引          |
| searchInputFocus      | 输入框获取焦点事件                 | -                                               |
| handleInputValue      | 输入事件                           | input 输入的内容                                |
| shopCartClick         | 购物车点击事件（该事件暂无法使用） | 当前对象                                        |