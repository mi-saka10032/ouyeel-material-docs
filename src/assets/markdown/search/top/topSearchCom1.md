最常用的头部搜索框组件



完整代码：

```vue
<template>
  <div>
    <oy-top-search-com
      :ipt-value="iptValue"
      :placeholder="placeholder"
      :common-citiao="commonWord"
      :ipt-width="555"
      :btn-width="90"
      :history-search="historySearch"
      :hot-search="hotSearch"
      :drop-down-list="dropDownList"
      :btn-prams="btnPrams"
      :search-btn-txt="searchBtnTxt"
      :zg-code="zgCode"
      @hot-search-click="hotSearchClick"
      @his-search-click="hisSearchClick"
      @drop-down-click="dropDownClick"
      @search-btn="searchBtnClick"
      @btn-click="rightButtonClick"
      @handle-focus="handleFocus"
      @handle-input="handleInput"
      @handle-blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'ComTopSearch',
  data() {
    return {
      iptValue: '',
      placeholder: 'placeholder输入框提示文本',
      commonWord: '这是一段普通的common词条',
      historySearch: {
        'title': '历史搜索:',
        'list': ['SPCC', 'SPHC']
      },
      hotSearch: {
        'title': '热门搜索:',
        'hotList': ['SPCC', 'SPHC', 'Q235B', '翘皮', '离层', '结疤', '随意加的']
      },
      dropDownList: [
        { 'dropID': 1, 'content': '200×500', 'flagDesc': '牌号' },
        { 'dropID': 2, 'content': '200×400' },
        { 'dropID': 5, 'content': '200×900' },
        { 'dropID': 8, 'content': '200×400', 'flagDesc': '后缀' },
        { 'dropID': 10, 'content': '200×900' },
        { 'dropID': 15, 'content': 'SCw' },
        { 'dropID': 58, 'content': 'SCa', 'flagDesc': '店铺' },
        { 'dropID': 95, 'content': 'SCPP', 'flagDesc': '店铺' },
        { 'dropID': 89, 'content': 'SCPa', 'flagDesc': '店铺' },
        { 'dropID': 98, 'content': 'SCgP', 'flagDesc': '店铺' },
        { 'dropID': 78, 'content': 'SCPDF', 'flagDesc': '店铺' }
      ],
      btnPrams: {
        'control': true,
        'txt': '建立文档',
        'icon': 'el-icon-search'
      },
      searchBtnTxt: '大搜索',
      zgCode: {
        'codeSrc': 'https://test.ouyeel.com/zhigang/resource/assets/images/WechatIMG58.jpg',
        'desc1': '微信',
        'desc2': '小程序'
      }
    }
  },
  methods: {
    hotSearchClick(value) {
      console.log('热词列表点击', value)
    },
    hisSearchClick(value) {
      console.log('历史搜索列表点击', value)
    },
    dropDownClick(value) {
      console.log('下拉列表点击', value)
    },
    searchBtnClick(iptValue) {
      console.log('input输入内容', iptValue)
    },
    rightButtonClick(value) {
      console.log('右侧按钮点击', value)
      console.log('当前输入框的值为', this.iptValue)
    },
    handleFocus(iptValue) {
      console.log('输入框聚焦', iptValue)
    },
    handleInput(iptValue) {
      console.log('输入框内的值改变', iptValue)
      // 实现iptValue双向绑定的关键
      this.iptValue = iptValue
    },
    handleBlur(iptValue) {
      console.log('输入框失焦', iptValue)
    }
  },
  mounted() {
    setTimeout(() => {
      this.iptValue = '输入框的值改变'
    }, 1000)
  }
}
</script>
```



## 以下为属性分析

**ipt-value**

基础属性，代表搜索框的输入值。

需要注意的是，该属性并不是双向绑定的，既传入的值可以引发输入框值的改变，但页面输入框内的输入变化并不会引发ipt-value的属性值改变，该问题可以在input事件中加入赋值语句解决。



**placeholder**

输入框没有输入值时的默认提示语句



**common-citiao**

出现在输入框下面的灰色提示语句。当历史搜索和热词搜索存在时，该语句在最下面。



**ipt-width、btn-width**

输入框的宽度和搜索按钮的宽度，默认为 555 和 90



**history-search**

历史搜索的数据，Object类型，含有title和list两个属性



**hot-search**

热词搜索的数据，Object类型，同样含有title和list两个属性



**drop-down-list**

下拉列表的数据，Array<Object>类型，Object中含有 dropID content flagDesc（可选，后缀描述）属性



**btn-prams**

搜索框右侧按钮，Object类型，含有 control txt icon 属性

如果control 为 false，则按钮不显示，反之则显示



**search-btn-txt**

搜索按钮内容，String类型，默认为 “搜索” 二字



**zg-code**

右侧二维码跟蚊子，Object类型，含有 codeSrc desc1 desc2 属性