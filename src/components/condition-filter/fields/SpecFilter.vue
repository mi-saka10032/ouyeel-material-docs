<template>
  <div class="spec_filter">
    <div class="spec_filter_item">
      <span class="spec_filter_label">厚度</span>
      <input-number v-model="thicknessPrefix" />
      <span class="spec_filter_line" />
      <input-number v-model="thicknessSuffix" />
    </div>
    <div class="spec_filter_item">
      <span class="spec_filter_label">宽度</span>
      <input-number v-model="widthPrefix" />
      <span class="spec_filter_line" />
      <input-number v-model="widthSuffix" />
    </div>
    <filter-button @click="onConfirm">确定</filter-button>
  </div>
</template>

<script>
/**
 * 规格筛选器
 */
import InputNumber from '@/pages/exchange/components/InputNumber.vue'
import FilterButton from '../elements/FilterButton.vue'

export default {
  name: 'SpecFilter',
  components: {
    InputNumber,
    FilterButton,
  },
  props: {
    /**
     * 厚度绑定值，支持 sync 修饰符
     */
    thickness: { type: Array, default: () => [undefined, undefined] },
    /**
     * 宽度绑定值，支持 sync 修饰符
     */
    width: { type: Array, default: () => [undefined, undefined] },
  },
  data() {
    return {
      thicknessPrefix: undefined,
      thicknessSuffix: undefined,
      widthPrefix: undefined,
      widthSuffix: undefined,
    }
  },
  watch: {
    thickness: {
      handler(value) {
        this.thicknessPrefix = value[0]
        this.thicknessSuffix = value[1]
      },
      immediate: true,
    },
    width: {
      handler(value) {
        this.widthPrefix = value[0]
        this.widthSuffix = value[1]
      },
      immediate: true,
    },
  },
  methods: {
    onConfirm() {
      this.reviseInputValue('thicknessPrefix')
      this.reviseInputValue('thicknessSuffix')
      this.reviseInputValue('widthPrefix')
      this.reviseInputValue('widthSuffix')

      const { thicknessPrefix, thicknessSuffix, thickness, widthPrefix, widthSuffix, width } = this
      this.$emit('update:thickness', [thicknessPrefix, thicknessSuffix])
      this.$emit('update:width', [widthPrefix, widthSuffix])

      if (
        thicknessPrefix !== thickness[0] ||
        thicknessSuffix !== thickness[1] ||
        widthPrefix !== width[0] ||
        widthSuffix !== width[1]
      ) {
        this.$emit('on-change')
      }
    },
    reviseInputValue(key) {
      if (this[key] === 0) this[key] = undefined
    },
  },
}
</script>

<style lang="scss" scoped>
.spec_filter {
  display: flex;
  align-items: center;
  font-size: 12px;

  &_item {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 30px;
    }
  }

  &_label {
    margin-right: 10px;
  }

  &_line {
    margin: 0 6px;
    width: 10px;
    height: 1px;
    background-color: #979797;
  }
}
</style>
