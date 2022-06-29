<template>
  <div class="condition_filter">
    <filter-container :title-width="0">
      <selected-list :list="selectedList" @on-click-item="onClickSelectedItem">
        <template v-slot:prefix>筛选条件：</template>
        <template v-slot:suffix>
          <span v-show="selectedList.length" @click="onClickReset">重置</span>
        </template>
        <template v-slot:info>
          <span v-show="totalCount">
            共<span style="color: #d90910">{{ totalCount }}</span>条
          </span>
          <slot name="export" />
        </template>
      </selected-list>
    </filter-container>
    <filter-container
      v-for="(item, index) in localFilterItems"
      :key="index"
      :title="item.title"
    >
      <filter-checkbox-group
        v-if="item.type === 'radio'"
        v-model="filter[item.prop]"
        :options="item.options"
        @on-change="onConditionChange"
      />
      <collapse-checkbox-group
        v-else-if="item.type === 'checkbox'"
        v-model="filter[item.prop]"
        :options="item.options"
        @on-change="onConditionChange"
        @update-singleCheckboxOptions="updateSingleCheckboxOptions($event, index, item)"
        @update-multipleCheckboxOptions="updateMultipleCheckboxOptions($event, index, item)"
      />
    </filter-container>
  </div>
</template>

<script>
import { Debounce, ParentCopy } from '@/utils/decorators'
import FilterContainer from '@/components/condition-filter/elements/FilterContainer'
import SelectedList from '@/components/condition-filter/elements/SelectedList'
import FilterCheckboxGroup from '@/components/condition-filter/elements/FilterCheckboxGroup'
import CollapseCheckboxGroup from '@/components/condition-filter/elements/CollapseCheckboxGroup'

export default {
  name: 'CustomFilter',
  components: {
    FilterContainer,
    SelectedList,
    FilterCheckboxGroup,
    CollapseCheckboxGroup
  },
  props: {
    filterItems: {
      type: Array,
      default: () => ([
        {
          type: 'radio',
          title: '竞买方式',
          prop: 'biddingType',
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
    }
  },
  data: () => ({
    // 总数
    totalCount: 0,
    // 筛选条件列表
    selectedList: [],
    localFilterItems: [],
    // 原始筛选条件缓存列表
    cacheFilterOptions: [],
    // 筛选条件对象
    filter: {}
  }),
  watch: {
    filterItems: {
      deep: true,
      immediate: true,
      @ParentCopy()
      handler(items) {
        let cloneItems = this.cloneDeep(items)
        let cloneOptions = this.cloneDeep(items.map(item => item.options))
        this.localFilterItems = cloneItems
        this.cacheFilterOptions = cloneOptions
        cloneItems = null
        cloneOptions = null
      }
    },
    localFilterItems: {
      deep: true,
      immediate: true,
      handler(items) {
        if (items instanceof Array) {
          for (const item of items) {
            if (!this.filter.hasOwnProperty(item.prop.toString())) {
              let model
              switch (item.type) {
                case 'radio':
                case 'checkbox':
                  model = []
                  break
              }
              this.$set(this.filter, item.prop, model)
            }
          }
        }
      }
    }
  },
  methods: {
    cloneDeep(target) {
      if (typeof target === 'object') return JSON.parse(JSON.stringify(target))
      else return target
    },
    onClickSelectedItem() {
      console.log(arguments)
    },
    onClickReset() {
      console.log(arguments)
    },
    // 选项变化方法-防抖
    @Debounce(100)
    onConditionChange() {
      console.log(this.filter)
    },

    /**
     * @description 组件强制重载渲染
     * @param item: { type: string }
     */
    forceRendering(item) {
      // 组件强制重新渲染
      const originalType = item.type
      item.type = ''
      this.$nextTick(() => {
        item.type = originalType
      })
    },

    /**
     * @description 复杂多选框-父选项与子选项的查找结果返回，条件
     * @param value 鼠标点中的值
     * @param index 筛选栏所在目录索引
     * @returns {{parentResult: { info?, label, value } | undefined, infoResult: { parentIndex, label, value } | undefined}}
     * @description 二者至少有其一不为空
     */
    queryParentAndInfoResultFromCheckbox(value, index) {
      const parentResult = this.cloneDeep(this.cacheFilterOptions[index].find(filter => filter.value === value))
      let infoOptions = []
      this.cacheFilterOptions[index].forEach(filter => {
        if (filter.info instanceof Array) {
          infoOptions.push(...filter.info)
        }
      })
      const infoResult = this.cloneDeep(infoOptions.find(info => info.value === value))
      infoOptions = null
      return { parentResult, infoResult }
    },

    /**
     * @description 已知父选项，返回父选项与其可能的子选项的解构数组
     * @param parentResult
     * @returns {[{ info?, label, value }]}
     */
    getParentOptions(parentResult) {
      if (parentResult.info instanceof Array) {
        // 如果父选项存在且含有子选项配置，则显示父选项与其子选项的全部选项
        return [parentResult, ...parentResult.info]
      } else {
        // 如果父选项没有子选项配置，则只显示该选项
        return [parentResult]
      }
    },

    /**
     * @description 已知子选项及当前筛选栏索引，返回包含该子选项的父选项与该子选项
     * @param infoResult
     * @param index
     * @returns {[{label, value, parentIndex?, info? }]}
     */
    getInfoOptions(infoResult, index) {
      if (infoResult.hasOwnProperty('parentIndex')) {
        const parentOption = this.cacheFilterOptions[index][infoResult.parentIndex];
        return [parentOption, infoResult];
      } else {
        const parentOption = this.cacheFilterOptions[index].find(parent => {
          if (parent.info instanceof Array) {
            return parent.info.some(info => info.value === infoResult.value)
          } else return false
        })
        if (parentOption) {
          return [parentOption, infoResult]
        } else return [infoResult]
      }
    },

    /**
     * @description 复杂多选框在单选模式下点击选项的回调函数
     * @param option: { info?: Array, label: string, value: string }
     * @param checked: boolean
     * @param index: number
     * @param item: { type: string, prop: string, options: Array }
     */
    updateSingleCheckboxOptions({ option, checked }, index, item) {
      if (checked) {
        this.handleCheckedSingleCheckboxOptions(option, index)
      } else {
        this.handleUncheckedSingleCheckboxOptions(option, index)
      }
      this.forceRendering(item)
    },

    /**
     * @description 复杂多选框-单选模式-选中状态回调
     * @param option: { label: string, value: string }
     * @param index: number
     */
    handleCheckedSingleCheckboxOptions(option, index) {
      let checkOption = []
      const { parentResult, infoResult } = this.queryParentAndInfoResultFromCheckbox(option.value, index)
      if (parentResult) {
        checkOption = this.getParentOptions(parentResult)
      }
      // 父选项为空，则表示选中项为子选项
      if (infoResult) {
        checkOption = this.getInfoOptions(infoResult, index)
      }
      this.localFilterItems[index].options = this.cloneDeep(checkOption)
    },

    /**
     * @description 复杂多选框-单选模式-未选中状态回调
     * @param option: { label: string, value: string }
     * @param index: number
     */
    handleUncheckedSingleCheckboxOptions(option, index) {
      // 如果非选中状态，存在两种情况，单选模式下取消选中和多选模式下取消选中
      const prop = this.localFilterItems[index].prop
      if (this.filter[prop]?.length === 0) {
        // 单选取消选中时，直接从闭包缓存中重置全部配置选项
        this.localFilterItems[index].options = this.cloneDeep(this.cacheFilterOptions[index])
      } else {
        let uncheckOption = []
        // 复选取消选中时，根据option.value的值，来判断需要删除的选项
        const { parentResult } = this.queryParentAndInfoResultFromCheckbox(option.value, index)
        // 取消选中为父选项时，在当前已显示配置项中，筛选中不包含父选项及其子选项的部分放入remains中
        if (parentResult) {
          let remains = this.localFilterItems[index].options.filter(remain => {
            let parentValue = parentResult.value
            let infoValue = []
            if (parentResult.info instanceof Array) {
              infoValue = parentResult.info.map(info => info.value)
            }
            return ![parentValue, ...infoValue].some(filterValue => filterValue === remain.value)
          })
          if (remains.length) {
            // 如果剩余选项长度不为0，则深拷贝赋值当前选项
            uncheckOption = remains
          } else {
            // 如果无剩余选项，则从闭包缓存中重置全部配置选项
            uncheckOption = this.cacheFilterOptions[index]
          }
          // 条件筛选中保存的实际已选中数据，根据剩余选项的元素做筛选，仅保留在场选项
          console.log(uncheckOption)
          this.filter[prop] = this.filter[prop].filter(model => remains.map(remain => remain.value).includes(model))
          this.localFilterItems[index].options = this.cloneDeep(uncheckOption)
          remains = null
        }
        // 取消选中项为子选项时，子选项取消选中仅只是取消选中状态，不修改options配置项
      }
    },

    /**
     * @description 复杂多选框-复选模式下-点击确定按钮回调
     * @param selectedList: {label: string, value: string}[]
     * @param index: number
     * @param item: { type: string, prop: string, options: Array }
     */
    updateMultipleCheckboxOptions(selectedList, index, item) {
      let completeOptions = []
      if (selectedList?.length) {
        for (const list of selectedList) {
          // 父选项选中时才考虑增加额外选项，子选项选中or取消选中不影响options选项
          const { parentResult, infoResult } = this.queryParentAndInfoResultFromCheckbox(list.value, index)
          let result = []
          if (parentResult) {
            result = this.getParentOptions(parentResult)
          }
          if (infoResult) {
            result = this.getInfoOptions(infoResult, index)
          }
          // 仅推入completeOptions中不存在的配置
          result.forEach(option => {
            if (!completeOptions.some(completeOption => completeOption.value === option.value)) {
              completeOptions.push(...result);
            }
          })
        }
      } else {
        completeOptions = this.cacheFilterOptions[index]
      }
      this.localFilterItems[index].options = this.cloneDeep(completeOptions)
      this.forceRendering(item)
    }
  }
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
