<template>
  <el-date-picker
    v-model="innerValue"
    class="filter_date_picker"
    popper-class="filter_date_picker_popper"
    :placeholder="placeholder"
    :clearable="false"
  />
</template>

<script>
import { DatePicker } from 'element-ui'

export default {
  name: 'FilterDatePicker',
  components: {
    [DatePicker.name]: DatePicker,
  },
  mixins: [],
  props: {
    value: { type: Date },
    placeholder: { type: String, default: '' },
  },
  data() {
    return {}
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.filter_date_picker {
  width: 100px;
  font-size: 12px;

  ::v-deep .el-input {
    &__inner {
      height: 24px !important;
      line-height: 24px !important;
    }

    &__prefix {
      left: unset;
      right: 0;
    }

    &__icon {
      line-height: 24px;
    }
  }
}
</style>
