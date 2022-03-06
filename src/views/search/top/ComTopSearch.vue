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
    <div class="markdown-body">
      <Markdown1/>
    </div>
    <hr>
    <div class="markdown-body">
      <Markdown2/>
    </div>
    <hr>
    <div class="markdown-body">
      <MarkdownAttr/>
    </div>
  </div>
</template>

<script>
import Markdown1 from '@/assets/markdown/search/top/topSearchCom1.md'
import Markdown2 from '@/assets/markdown/search/top/topSearchCom2.md'
import MarkdownAttr from '@/assets/markdown/search/top/topSearchCom-attr.md'

export default {
  name: 'ComTopSearch',
  components: {
    Markdown1,
    Markdown2,
    MarkdownAttr
  },
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
