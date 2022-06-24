<template>
  <div class="shop_sign_filter" :style="wrapperStyles">
    <filter-checkbox-group
      ref="checkboxGroup"
      v-show="showInlineCheckbox"
      :value="innerValue"
      class="shop_sign_checkbox_flat"
      :options="flatHash"
      hidden-checkbox
      @on-checkbox-change="onCheckboxChange"
    />

    <div class="operate_wrapper">
      <span v-show="showInput" class="operate_item operate_item_input">
        <el-input v-model="inputValue" class="operate_item_input_inner" placeholder="请输入牌号" />
        <filter-button @click="onSearchConfirm">确定</filter-button>
      </span>
      <span v-show="expanded || multiple" class="operate_item" @click="onClickChangeGroupType">
        {{ changeGroupTypeText }}
      </span>
      <span v-show="!multiple" class="operate_item" @click="onClickMultiple">
        多选
        <i class="ouyeelfont oyicon-plus" />
      </span>
      <span
        v-if="renderExpandButton"
        v-show="!multiple"
        class="operate_item"
        @click="onClickExpand"
      >
        {{ expandButtonText }}
        <i class="ouyeelfont" :class="expandButtonArrow" />
      </span>
    </div>

    <div v-show="groupType === 'category'">
      <ul class="group_tab_list">
        <li
          v-for="(item, index) in categoryHash"
          :key="index"
          class="group_tab_item"
          :class="{ group_tab_active: item.value === categoryGroupCurrentTab }"
          @click="onClickTabItem('categoryGroupCurrentTab', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(group, _index) in categoryHash"
          v-show="group.value === categoryGroupCurrentTab"
          :key="_index"
          class="checkbox_wrapper"
        >
          <div
            v-for="(column, index) in group.children"
            :key="column.value"
            class="checkbox_column"
          >
            <div
              class="checkbox_item checkbox_item_group"
              :class="{ checkbox_item_hidden: !multiple }"
            >
              <el-checkbox
                :title="column.label"
                :value="!!~innerValue.indexOf(column.value)"
                @change="onCheckboxChange(column, $event)"
              >
                {{ column.label }}
              </el-checkbox>
            </div>
            <div
              style="padding: 6px 0"
              class="checkbox_list"
              :class="{ checkbox_list_group: index > 0 }"
            >
              <div
                v-for="(item, index_) in column.children"
                :key="index_"
                class="checkbox_item checkbox_item_column"
                :class="{ checkbox_item_hidden: !multiple }"
              >
                <el-checkbox
                  :title="item.label"
                  :value="!!~innerValue.indexOf(item.value)"
                  @change="onCheckboxChange(item, $event)"
                >
                  {{ item.label }}
                </el-checkbox>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-show="groupType === 'letter'">
      <ul class="group_tab_list">
        <li
          v-for="(item, index) in letterHash"
          :key="index"
          class="group_tab_item"
          :class="{ group_tab_active: item.value === letterGroupCurrentTab }"
          @click="onClickTabItem('letterGroupCurrentTab', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(group, _index) in letterHash"
          v-show="group.value === letterGroupCurrentTab"
          :key="_index"
          class="checkbox_wrapper"
        >
          <div class="checkbox_list">
            <div
              v-for="(item, index) in group.children"
              :key="index"
              class="checkbox_item"
              :class="{ checkbox_item_hidden: !multiple }"
            >
              <el-checkbox
                :title="item.label"
                :value="!!~innerValue.indexOf(item.value)"
                @change="onCheckboxChange(item, $event)"
              >
                {{ item.label }}
              </el-checkbox>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-show="multiple">
      <div class="shop_sign_line"></div>
      <selected-list
        v-if="renderSelectedList"
        :list="selectedList"
        @on-click-item="onClickSelectedListItem"
      />
      <div class="button_wrapper">
        <filter-button @click="onConfirm">确定</filter-button>
        <filter-button @click="onCancel">取消</filter-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Checkbox } from 'element-ui'
import FilterCheckboxGroup from '../elements/FilterCheckboxGroup.vue'
import SelectedList from '../elements/SelectedList.vue'
import FilterButton from '../elements/FilterButton.vue'

const SUB_CATEGORY_NULL = '_subCategoryNull'

export default {
  name: 'ShopSignFilter',
  components: {
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    FilterCheckboxGroup,
    SelectedList,
    FilterButton,
  },
  props: {
    /**
     * 绑定值
     */
    value: { type: Array, default: () => [] },
    /**
     * 搜索输入框的值
     */
    searchValue: { type: String, default: '' },
    /**
     * 折叠高度
     */
    collapseHeight: { type: Number, default: 25 },
    /**
     * 展开高度
     */
    expandedHeight: { type: Number, default: 110 },
    /**
     * 是否渲染已选列表
     */
    renderSelectedList: { type: Boolean, default: true },
  },
  data() {
    return {
      flatHash: [],
      letterHash: [],
      categoryHash: [],
      subCategoryHash: [],
      multiple: false,
      multipleValue: [],
      renderExpandButton: true,
      expanded: false,
      groupType: 'category',
      categoryGroupCurrentTab: '',
      letterGroupCurrentTab: '',
      // inputValue: '',
      checkedValue: [],
      // 阻止监听重复调用
      preventRepeat: false,
    }
  },
  computed: {
    innerValue: {
      get() {
        const { multiple, checkedValue, multipleValue } = this
        return multiple ? multipleValue : checkedValue
      },
      set(value) {
        if (this.multiple) {
          this.multipleValue = value
          return
        }

        this.checkedValue = value
      },
    },
    inputValue: {
      get() {
        return this.searchValue
      },
      set(value) {
        this.$emit('update:searchValue', value)
      },
    },
    wrapperStyles() {
      const style = {}
      const { multiple, expanded, collapseHeight: height } = this
      !multiple && !expanded && height && (style.maxHeight = `${height}px`)
      return style
    },
    showInlineCheckbox() {
      const { expanded, multiple } = this
      return !expanded && !multiple
    },
    checkboxStyles() {
      const style = {}
      const { expandedHeight: height } = this
      height && (style.maxHeight = `${height}px`)
      return style
    },
    showInput() {
      const { expanded, multiple } = this
      return !expanded && !multiple
    },
    changeGroupTypeText() {
      return this.groupType === 'category' ? '按字母分类' : '按加工用途分类'
    },
    expandButtonText() {
      return this.expanded ? '收起' : '更多'
    },
    expandButtonArrow() {
      return this.expanded ? 'oyicon-arrow-top' : 'oyicon-arrow-down'
    },
    selectedList() {
      const { innerValue, subCategoryHash } = this
      const modelValue = transformSelected2Model(innerValue, subCategoryHash)
      return this.resolveSelectedList(modelValue)
    },
  },
  watch: {
    value: {
      handler(value) {
        this.checkedValue = value

        // 修正 '其他' 分类绑定值
        const { subCategoryHash } = this
        if (!subCategoryHash.length) return

        const checkedValue = value.map(item => item)

        const subCategoryNullValues = []

        for (let i = 0; i < subCategoryHash.length; i++) {
          const { value: subCategoryValue, values } = subCategoryHash[i]
          if (~checkedValue.indexOf(subCategoryValue)) {
            checkedValue.push(...values)
          }

          if (subCategoryValue === SUB_CATEGORY_NULL) {
            subCategoryNullValues.push(...values)
          }
        }

        if (!~checkedValue.indexOf(SUB_CATEGORY_NULL)) {
          let reverseChecked = true
          for (let i = 0; i < subCategoryNullValues.length; i++) {
            const item = subCategoryNullValues[i]
            if (!~checkedValue.indexOf(item)) {
              reverseChecked = false
              break
            }
          }
          reverseChecked && checkedValue.push(SUB_CATEGORY_NULL)
        }

        this.preventRepeat = true
        this.checkedValue = checkedValue
      },
      immediate: true,
    },
    checkedValue(value) {
      if (this.preventRepeat) {
        this.preventRepeat = false
        return
      }

      const modelValue = transformSelected2Model(value, this.subCategoryHash)
      this.$emit('input', modelValue)
      this.$emit('on-change')
    },
  },
  methods: {
    judgeExpandButtonStatus() {
      const el = this.$refs.checkboxGroup.$el
      this.renderExpandButton = el.offsetHeight > 30
    },
    loadData(data) {
      if (!data.length) return

      const flatHash = []
      const letterHash = createLetterHash()
      const categoryHash = []
      const subCategoryHash = []

      const elementAdapter = info => {
        const elements = []

        for (let i = 0; i < info.length; i++) {
          const { name, value, letter } = info[i]

          if (!value) continue

          const el = {
            label: name,
            value,
            letter,
          }

          elements.push(el)

          flatHash.push(el)

          if (letter) {
            const index = findLetterHashIndex(letterHash, letter[0].toLocaleUpperCase())
            letterHash[index].children.push(el)
          }
        }

        return elements
      }

      const subCategoryAdapter = (index, infoRaw) => {
        const subCategory = []

        for (let i = 0; i < infoRaw.length; i++) {
          const { name, value, info } = infoRaw[i]
          const el = {
            label: name,
            value: value || SUB_CATEGORY_NULL,
          }

          flatHash.push({ ...el, hidden: true })

          subCategory.push({ ...el, children: elementAdapter(info) })

          subCategoryHash.push({
            ...el,
            top: index,
            secondary: i,
            values: info.map(item => item.value),
          })
        }

        return subCategory
      }

      for (let i = 0; i < data.length; i++) {
        const { name, value, info } = data[i]
        categoryHash.push({
          label: name,
          value,
          children: subCategoryAdapter(i, info),
        })
      }

      this.flatHash = Object.freeze(flatHash)
      this.letterHash = Object.freeze(letterHash.filter(item => item.children.length))
      this.letterHash.length && (this.letterGroupCurrentTab = this.letterHash[0].value)
      this.categoryHash = Object.freeze(categoryHash)
      this.categoryHash.length && (this.categoryGroupCurrentTab = this.categoryHash[0].value)
      this.subCategoryHash = Object.freeze(subCategoryHash)

      this.multiple = false
      this.expanded = false
      this.$nextTick(() => this.judgeExpandButtonStatus())
    },
    onClickChangeGroupType() {
      this.groupType = this.groupType === 'category' ? 'letter' : 'category'
    },
    onClickMultiple() {
      this.multiple = true
      this.multipleValue = this.checkedValue
    },
    onClickExpand() {
      this.expanded = !this.expanded
    },
    onClickTabItem(key, value) {
      this[key] = value
    },
    onCheckboxChange({ value }, checked) {
      const { categoryHash, subCategoryHash, multiple, innerValue: innerValueRaw } = this
      const subCategoryIndex = subCategoryHash.findIndex(item => item.value === value)

      // 数据拷贝
      const innerValue = innerValueRaw.map(item => item)

      // 二级分组 checkbox
      if (~subCategoryIndex) {
        const { value: subCategoryValue, values } = subCategoryHash[subCategoryIndex]

        if (checked) {
          const nextCheckedValue = [subCategoryValue, ...values]

          if (multiple) nextCheckedValue.push(...innerValue)

          this.innerValue = nextCheckedValue.filter(
            (item, index) => nextCheckedValue.indexOf(item) === index
          )
        } else {
          this.innerValue = innerValue.filter(
            item => !~values.indexOf(item) && item !== subCategoryValue
          )
        }
        return
      }

      if (checked) {
        if (!multiple) innerValue.length = 0

        innerValue.push(value)
      } else {
        innerValue.splice(innerValue.indexOf(value), 1)
      }

      // 全选全不选
      const { value: subCategory, values: records } = findNestedHash(categoryHash, value)
      let checkedAll = true

      for (let i = 0; i < records.length; i++) {
        const item = records[i]
        if (!~innerValue.indexOf(item)) {
          checkedAll = false
          break
        }
      }

      const currentSubCategoryIndex = innerValue.indexOf(subCategory)
      if (checkedAll) {
        !~currentSubCategoryIndex && innerValue.push(subCategory)
      } else {
        ~currentSubCategoryIndex && innerValue.splice(currentSubCategoryIndex, 1)
      }

      this.innerValue = innerValue
    },
    onClickSelectedListItem({ item }) {
      this.onCheckboxChange(item, false)
    },
    onSearchConfirm() {
      const realValue = this.inputValue.trim()
      if (realValue) {
        this.inputValue = realValue
        this.$emit('on-change')
      }
    },
    onConfirm() {
      this.checkedValue = this.multipleValue
      this.multiple = false
    },
    onCancel() {
      this.multiple = false
      this.multipleValue = []
    },
    resolveSelectedList(modelValue) {
      return this.flatHash.filter(item => ~modelValue.indexOf(item.value))
    },
  },
}

function createLetterHash() {
  const hash = []
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'

  for (let i = 0; i < letters.length; i++) {
    const key = letters[i]
    hash.push({
      label: key,
      value: key,
      children: [],
    })
  }

  return hash
}

function findLetterHashIndex(hash, key) {
  for (let i = 0; i < hash.length; i++) {
    const { value } = hash[i]
    if (value === key) return i
  }

  return hash.length - 1
}

function findNestedHash(arr, value) {
  let top = 0
  let secondary = 0
  let subCategory = ''
  let values = []

  for (let i = 0; i < arr.length; i++) {
    top = i

    const category = arr[i].children
    let success = false

    for (let j = 0; j < category.length; j++) {
      secondary = j

      const { children, value: subCategoryValue } = category[j]
      if (~children.findIndex(item => item.value === value)) {
        subCategory = subCategoryValue
        values = children.map(item => item.value)
        success = true
        break
      }
    }

    if (success) break
  }

  return { top, secondary, value: subCategory, values }
}

function transformSelected2Model(value, subCategoryHash) {
  let modelValue = value.map(item => item)

  for (let i = 0; i < subCategoryHash.length; i++) {
    const { value: subCategoryValue, values } = subCategoryHash[i]
    if (subCategoryValue !== SUB_CATEGORY_NULL && ~modelValue.indexOf(subCategoryValue)) {
      modelValue = modelValue.filter(item => !~values.indexOf(item))
    }
  }

  return modelValue.filter(item => item !== SUB_CATEGORY_NULL)
}
</script>

<style lang="scss" scoped>
.shop_sign {
  &_filter {
    position: relative;
    padding-right: 16px;
    font-size: 12px;
    overflow: hidden;
  }

  &_checkbox_flat {
    padding: 3px 260px 0 0;
  }

  &_line {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background-color: #eee;
  }
}

.operate {
  &_wrapper {
    position: absolute;
    top: 0;
    right: 16px;
    background-color: #fff;
    z-index: 3;
  }

  &_item {
    display: inline-block;
    padding: 0 10px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: #d90910;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    &_input {
      border: 0;

      &_inner {
        width: 80px;
        font-size: 12px;

        ::v-deep .el-input__inner {
          line-height: 22px !important;
        }
      }
    }

    .ouyeelfont {
      font-size: 12px;
    }

    .oyicon-plus {
      display: inline-block;
      transform: scale(0.8);
    }
  }
}

.group {
  &_tab {
    &_list {
      display: flex;
      position: relative;
      top: 1px;
      z-index: 1;
    }

    &_item {
      border: 1px solid transparent;
      padding: 4px 16px;
      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        color: #d90910;
      }
    }

    &_active {
      color: #d90910;
      border-color: #dbdbdb;
      border-bottom-color: #fff;
    }
  }
}

.checkbox {
  &_wrapper {
    padding: 10px;
    max-height: 135px;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid #dbdbdb;
  }

  &_column {
    display: flex;
  }

  &_list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    &_group {
      border-top: 1px dashed #dbdbdb;
    }
  }

  &_item {
    margin: 3px 0;
    width: 14.2%;

    &_group {
      padding: 6px 0;
      width: 110px;
    }

    &_column {
      width: 16.66%;
    }

    ::v-deep .el-checkbox {
      &__inner {
        transition: all 0.2s;
        &:hover {
          border-color: #d90910;
        }
      }

      &__input.is-focus .el-checkbox__inner {
        border-color: #d90910;
      }

      &__input.is-checked .el-checkbox__inner {
        background-color: #d90910;
        border-color: #d90910;
      }

      &__label {
        margin: 0;
        color: #333;
        max-width: 110px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        vertical-align: middle;
        transition: all 0.2s;
        &:hover {
          color: #d90910;
        }
      }

      &__input.is-focus .el-checkbox__label {
        margin: 0;
      }

      &__input.is-checked .el-checkbox__label {
        margin: 0;
      }
    }

    &_hidden {
      ::v-deep .el-checkbox {
        &__input {
          display: none;
        }

        &__label {
          padding: 0;
        }

        &__input.is-checked + .el-checkbox__label {
          color: #d90910;
        }
      }
    }
  }
}

.button_wrapper {
  padding-top: 8px;
  text-align: center;
}
</style>
