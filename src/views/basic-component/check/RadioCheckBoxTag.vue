<template>
  <div>
    <oy-icon-radio
        :iconradio-list="iconradioList"
    ></oy-icon-radio>
    <div class="markdown-body">
      <CheckMarkdown3/>
    </div>
    <hr>
    <el-row>
      <oy-icon-checkbox
          v-for="(item,index) in iconCheckboxList"
          :key="index"
          :check-text="item.checkText"
          :is-check="item.isCheck"
          :str-length="item.strLength"
      >{{item.checkText}}</oy-icon-checkbox>
    </el-row>
    <div class="markdown-body">
      <CheckMarkdown4/>
    </div>
  </div>
</template>

<script>
import CheckMarkdown4 from '@/assets/markdown/basic-component/check/check4.md'
import CheckMarkdown3 from '@/assets/markdown/basic-component/check/check3.md'

export default {
  name: "RadioCheckBoxTag",
  components: {
    CheckMarkdown4,
    CheckMarkdown3
  },
  data() {
    return {
      iconradioList: [
        {"label": "按订单收取", "isChecked": true},
        {"label": "按订单收取2", "isChecked": false}
      ],
      iconCheckboxList: [
        {checkText: '热轧', isCheck: true, strLength: 0},
        {checkText: '普冷', isCheck: true, strLength: 0},
        {checkText: '热镀锌热镀锌1', isCheck: false, strLength: 0},
        {checkText: '酸洗1', isCheck: true, strLength: 0},
        {checkText: '热镀锌热镀锌2', isCheck: false, strLength: 0},
        {checkText: '酸洗2', isCheck: false, strLength: 0},
      ]
    }
  }
}
</script>

<style scoped>
.icon-checkbox {
  margin: 20px;
}
</style>
