<template>
  <oy-tabs
      :mode="2"
      :data="tabData"
      @handle-close="showClose"
  />
</template>

<script>
export default {
  name: "TabsStyle",
  data() {
    return {
      tabData: [
        {"title": "T20433", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的1"}, {
          "title": "T20439",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的2"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的3"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的4"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的5"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}, {
          "title": "T12345678910",
          "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"
        }, {"title": "T12345678910", "subTitle": "二级标题希望这一次可以设置差不多20个字左右就蛮好的"}]
    }
  },
  methods: {
    showClose(item, index) {
      console.log(item);
      console.log(index);
    },
  }
}
</script>

<style>
.tabs_style_item {
  width: 152px;
  float: left;
  padding: 10px;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  position: relative;
  max-height: 58px;
  overflow: hidden;
}

.tabs_style_item p {
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
}

.tabs_style_item:hover .icon-close {
  display: block;
}

.tabs_style_item .icon-close {
  position: absolute;
  font-weight: bold;
  top: 5px;
  right: 5px;
  font-size: 14px;
  display: none;
  cursor: pointer;
}
</style>