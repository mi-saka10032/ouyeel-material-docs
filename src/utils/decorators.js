import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'

/**
 * 函数防抖装饰器
 * @param {number} wait 需要延迟的毫秒数。
 * @param {Object} options 选项对象
 * [options.leading=false] (boolean): 指定在延迟开始前调用。
 * [options.maxWait] (number): 设置 func 允许被延迟的最大值。
 * [options.trailing=true] (boolean): 指定在延迟结束后调用。
 */
export function Debounce(wait, options = {}) {
  return function(target, name, descriptor) {
    descriptor.value = debounce(descriptor.value, wait, options)
  }
}

export function ParentCopy() {
  /**
   * @param target 对应 methods 这个对象
   * @param name 对应属性方法的名称
   * @param descriptor 对应属性方法的修饰符
   */
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function(items) {
      let cloneItems = cloneDeep(items)
      if (cloneItems instanceof Array) {
        for (const item of cloneItems) {
          if (item.options instanceof Array) {
            for (const option of item.options) {
              if (option.info instanceof Array) {
                for (const info of option.info) {
                  // 如果info对象上不存在parent对象，则添加parent对象
                  if ((!info.parent) && (typeof option.label === 'number' || 'string') && (typeof option.value === 'number' || 'string')) {
                    info.parent = {
                      label: option.label,
                      value: option.value
                    }
                  }
                }
              }
            }
          }
        }
      }
      await fn.call(this, cloneItems)
      cloneItems = null
    }
  }
}
