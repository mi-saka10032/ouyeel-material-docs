<template>
  <div>
    <div>
      <oy-checkbox
        v-for="(item,index) in checkLists"
        :key="index"
        :label="item.label"
        v-model="check"
        :disabled="item.disabled"
      >{{ item.label }}
      </oy-checkbox>
    </div>
    <div style="margin-top: 25px;margin-bottom: 50px">
      <oy-radio
        v-for="(item,index) in radioLists"
        :key="index"
        :label="item.label"
        v-model="radio"
        :disabled="item.disabled"
      >{{ item.label }}
      </oy-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioCheckBox',
  data() {
    return {
      checkLists: [
        { label: '默认', disabled: false },
        { label: '选中', disabled: false },
        { label: '被选', disabled: true }
      ],
      radioLists: [
        { label: '备选项1', disabled: false },
        { label: '备选项2', disabled: false },
        { label: '备选项3', disabled: true }
      ],
      check: ['默认'],
      radio: '备选项1'
    }
  }
}
</script>
