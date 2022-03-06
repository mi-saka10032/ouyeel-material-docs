<template>
  <div>
    <oy-select-custom
        :default-check-list="defaultCheckList"
        :filter-input-placeholder="filterInputPlaceholder"
        :filter-option="filterOption"
        :filterable="filterable"
        :is-append-body="isAppendBody"
        :multiple="multiple"
        :multiple-type="multipleType"
        :option-type="optionType"
        :render-key="renderKey"
        :select-list="selectList"
        :select-placeholder="selectPlaceholder"
        :show-operate="showOperate"
        :width="width"
    ></oy-select-custom>
  </div>
</template>

<script>
export default {
  name: "SelectCustom1",
  data() {
    return {
      defaultCheckList: ['上海'],
      filterInputPlaceholder: '请输入搜索',
      filterOption: false,
      filterable: false,
      isAppendBody: false,
      multiple: false,
      multipleType: 1,
      optionType: '',
      renderKey: 'label',
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
      ],
      selectPlaceholder: '请选择',
      showOperate: false,
      width: '300'
    }
  }
}
</script>
