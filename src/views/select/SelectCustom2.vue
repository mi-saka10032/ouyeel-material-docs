<template>
  <div>
    <oy-select-custom
        :automaticDropdown="false"
        :collapseTags="false"
        :defaultCheckList="defaultCheckList"
        filterInputPlaceholder="搜索结果"
        :filterOption="true"
        :filterable="false"
        :isAppendBody="true"
        :multiple="true"
        :multipleType="1"
        optionType=""
        renderKey="label"
        :selectList="selectList"
        select-placeholder="请选择"
        :showOperate="true"
        width="200"
    />
  </div>
</template>

<script>
export default {
  name: "SelectCustom2",
  data() {
    return {
      defaultCheckList: ["成都"],
      selectList: [
        {"value": "Beijing", "label": "北京北京北京北京北京北京北京北京北京北京北京北京北京北京北京北京"},
        {"value": "Shanghai", "label": "上海"},
        {"value": "Nanjing", "label": "南京"},
        {"value": "Chengdu", "label": "成都"},
        {"value": "Shenzhen", "label": "深圳"},
        {"value": "Guangzhou", "label": "广州"},
        {"value": "选项1", "label": "黄金糕"},
        {"value": "选项2", "label": "双皮奶"},
        {"value": "选项3", "label": "蚵仔煎"},
        {"value": "选项4", "label": "龙须面"},
        {"value": "选项5", "label": "北京烤鸭"}
      ]
    }
  }
}
</script>