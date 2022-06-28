<template>
  <div
    class="condition_filter"
  >
    <filter-container :title-width="0">
      <selected-list :list="selectedList" @on-click-item="onClickSelectedItem">
        <template v-slot:prefix>筛选条件：</template>
        <template v-slot:suffix>
          <span v-show="selectedList.length" @click="onClickReset">重置</span>
        </template>
        <template v-slot:info>
          <span v-show="totalCount">
            共<span style="color: #d90910">{{ totalCount }}</span
          >条
          </span>
          <slot name="export" />
        </template>
      </selected-list>
    </filter-container>
    <filter-container
      v-for="(item, index) in testLists"
      :key="index"
      :title="item.title"
    >
      <filter-checkbox-group
        v-if="item.type === 'radio'"
        v-model="item.model"
        :options="item.options"
        @on-change="onConditionChange"
      />
      <collapse-checkbox-group
        v-else-if="item.type === 'checkbox'"
        v-model="item.model"
        :options="item.options"
        @on-change="onConditionChange"
        @update-singleCheckboxOptions="updateSingleCheckboxOptions($event, item, index)"
        @update-multipleCheckboxOptions="updateMultipleCheckboxOptions($event, item)"
      />
    </filter-container>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import FilterContainer from '@/components/condition-filter/elements/FilterContainer';
import SelectedList from '@/components/condition-filter/elements/SelectedList';
import FilterCheckboxGroup from '@/components/condition-filter/elements/FilterCheckboxGroup';
import CollapseCheckboxGroup from '@/components/condition-filter/elements/CollapseCheckboxGroup';

export default {
  name: 'CustomFilter',
  components: {
    FilterContainer,
    SelectedList,
    FilterCheckboxGroup,
    CollapseCheckboxGroup
  },
  props: {
    testLists: {
      type: Array,
      default: () => ([
        {
          type: 'radio',
          title: '竞买方式',
          prop: 'biddingType',
          model: [],
          options: [
            { 'label': '竞价', 'value': '10' },
            { 'label': '一口价', 'value': '30' },
            { 'label': '欧冶拍', 'value': '40' }
          ]
        },
        {
          type: 'checkbox',
          title: '品类',
          prop: 'category',
          model: [],
          options: [
            {
              'label': '卷状可利用材',
              'value': 'C8A05',
              'info': [
                {
                  'label': '头尾卷',
                  'value': 'C8A05002'
                },
                {
                  'label': '次品卷',
                  'value': 'C8A05000'
                }
              ]
            },
            {
              'label': '黑色金属',
              'value': 'C1A00',
              'info': [
                {
                  'label': '废钢',
                  'value': 'C1A00001'
                }
              ]
            },
            {
              'label': '化工产品',
              'value': 'C5A00',
              'info': [
                {
                  'label': '压滤渣',
                  'value': 'C5A00002'
                },
                {
                  'label': '除尘粉',
                  'value': 'C5A00001'
                },
                {
                  'label': '化肥',
                  'value': 'C5A00004'
                },
                {
                  'label': '苯',
                  'value': 'C5A00003'
                }
              ]
            },
            {
              'label': '坯料可利用材',
              'value': 'C8A07',
              'info': [
                {
                  'label': '方坯',
                  'value': 'C8A07001'
                }
              ]
            },
            {
              'label': '工艺废料',
              'value': 'C8A03',
              'info': [
                {
                  'label': '边丝',
                  'value': 'C8A03001'
                }
              ]
            },
            {
              'label': '板状可利用材',
              'value': 'C8A00',
              'info': [
                {
                  'label': '次品板',
                  'value': 'C8A00001'
                },
                {
                  'label': '报废板',
                  'value': 'C8A00000'
                }
              ]
            },
            {
              'label': '冶金副产品',
              'value': 'C5A01',
              'info': [
                {
                  'label': '氧化铁红',
                  'value': 'C5A01004'
                },
                {
                  'label': '金属化球团',
                  'value': 'C5A01000'
                }
              ]
            },
            {
              'label': '有色冶金类',
              'value': 'C4A04',
              'info': [
                {
                  'label': '镍渣',
                  'value': 'C4A04004'
                }
              ]
            },
            {
              'label': '型材可利用材',
              'value': 'C8A09',
              'info': [
                {
                  'label': 'H型钢',
                  'value': 'C8A09000'
                }
              ]
            },
            {
              'label': '线材可利用材',
              'value': 'C8A08',
              'info': [
                {
                  'label': '高线',
                  'value': 'C8A08000'
                },
                {
                  'label': '螺纹',
                  'value': 'C8A08001'
                }
              ]
            },
            {
              'label': '黑色冶金类',
              'value': 'C4A03',
              'info': [
                {
                  'label': '氧化铁皮',
                  'value': 'C4A03005'
                },
                {
                  'label': '粉煤灰',
                  'value': 'C4A03000'
                },
                {
                  'label': '钢渣  ',
                  'value': 'C4A03001'
                }
              ]
            },
            {
              'label': '其他资材',
              'value': 'C1A01',
              'info': [
                {
                  'label': '其他资材',
                  'value': 'C1A01011'
                },
                {
                  'label': '废纸',
                  'value': 'C1A01010'
                }
              ]
            },
            {
              'label': '普碳钢',
              'value': 'C7A01',
              'info': [
                {
                  'label': '普冷',
                  'value': 'C7A01009'
                }
              ]
            },
            {
              'label': '包装物废料',
              'value': 'C8A02',
              'info': [
                {
                  'label': '包装皮',
                  'value': 'C8A02001'
                },
                {
                  'label': '包装纸',
                  'value': 'C8A02002'
                },
                {
                  'label': '护圈',
                  'value': 'C8A02005'
                }
              ]
            },
            {
              'label': '橡塑',
              'value': 'C1A05',
              'info': [
                {
                  'label': '塑料',
                  'value': 'C1A05000'
                }
              ]
            },
            {
              'label': '服务类',
              'value': 'C7A03',
              'info': [
                {
                  'label': '物流运输',
                  'value': 'C7A03000'
                }
              ]
            },
            {
              'label': '管材可利用材',
              'value': 'C8A04',
              'info': [
                {
                  'label': '次品管',
                  'value': 'C8A04000'
                }
              ]
            },
            {
              'label': '有色金属',
              'value': 'C2A01',
              'info': [
                {
                  'label': '铜及其制品',
                  'value': 'C2A01003'
                }
              ]
            },
            {
              'label': '办公家具',
              'value': 'C3A00',
              'info': [
                {
                  'label': '椅凳类',
                  'value': 'C3A00009'
                }
              ]
            },
            {
              'label': '燃料类',
              'value': 'C4A05',
              'info': [
                {
                  'label': '煤岛炉渣',
                  'value': 'C4A05001'
                }
              ]
            },
            {
              'label': '特钢',
              'value': 'C7A02',
              'info': [
                {
                  'label': '钢丝',
                  'value': 'C7A02002'
                }
              ]
            },
            {
              'label': '棒材可利用材',
              'value': 'C8A01',
              'info': [
                {
                  'label': '次品材',
                  'value': 'C8A01001'
                }
              ]
            }
          ]
        }
      ])
    },
  },
  data: () => ({
    totalCount: 100,
    selectedList: [],
    cacheOptionsList: [],
    filter: {},
    debounceTimer: null
  }),
  mounted() {
    // 为每一个子选项设置引用的父选项对象
    this.testLists.forEach(list => {
      if (list.options instanceof Array) {
        list.options.forEach(option => {
          if (option.info instanceof Array) {
            option.info.forEach(info => {
              this.$set(info, 'parent', cloneDeep(option))
            })
          }
        })
      }
    })
    // 深拷贝一个props
    this.cacheOptionsList = cloneDeep(this.testLists.map(item => item.options))
  },
  watch: {
    testLists: {
      deep: true,
      immediate: true,
      handler(lists) {
        if (lists instanceof Array) {
          lists.forEach(item => {
            this.$set(this.filter, item.prop, item.model)
          })
        }
      }
    }
  },
  methods: {
    onClickSelectedItem() {
      console.log(arguments)
    },
    onClickReset() {
      console.log(arguments)
    },
    // 选项变化防抖
    onConditionChange() {
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        this.debounceConditionChange()
      }, 100)
    },
    debounceConditionChange() {
      console.log(this.filter)
    },
    forceRenderingCheckbox(item) {
      // 组件强制重新渲染
      item.type = ''
      this.$nextTick(() => {
        item.type = 'checkbox'
      })
    },
    // 复杂多选框在单选模式下点击选项的回调函数
    updateSingleCheckboxOptions({ option, checked }, item, index) {
      // 如果为选中状态，存在三种情况，均需要操作item.options
      if (checked) {
        if (option.info instanceof Array) {
          // 1.选项中存在子选项info，item.options显示当前选项和info选项
          item.options = cloneDeep([option, ...option.info])
        } else if (option.parent instanceof Object) {
          // 2.选项中存在父选项parent，这种情况只有在父选项点击过一次之后出现(即条件1触发之后才有机会触发)，item.options显示其父选项和当前选项
          item.options = cloneDeep([option.parent, option])
        } else {
          // 3.选项中既不存在父选项parent，也不存在子选项info，item.options仅显示当前选项
          item.options = cloneDeep([option])
        }
      } else {
        if (this.filter[item.prop]?.length === 1) {
          item.options = cloneDeep(this.cacheOptionsList[index])
        } else {
          const value = option.value
          const remains = cloneDeep(item.options.filter(remainOption => {
            if (remainOption.parent) {
              return remainOption.value === value || remainOption.parent?.value.indexOf(value)
            } else {
              return remainOption.value.indexOf(value)
            }
          }))
          item.options = cloneDeep(remains)
        }
      }
      this.forceRenderingCheckbox(item)
    },
    // 复杂多选框在复选模式下点击确定按钮的回调函数
    updateMultipleCheckboxOptions(selectedList, item) {
      if (selectedList?.length) {
        const completeOptions = [];
        selectedList.forEach(list => {
          if (!list.parent) {
            if (list.info instanceof Array) {
              completeOptions.push(list, ...list.info)
            } else completeOptions.push(list)
          }
        })
        item.options = cloneDeep(completeOptions)
      } else {
        item.options = cloneDeep(this.cacheOptionsList)
      }
      this.forceRenderingCheckbox(item)
    }
  },
}
</script>

<style lang="scss" scoped>
.condition_filter {
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  background-color: #fff;

  &_loading {
    min-height: 200px;
  }
}
</style>
