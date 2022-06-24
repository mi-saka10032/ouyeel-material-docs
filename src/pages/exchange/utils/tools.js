import moment from 'moment'
import event from './event'

export function createArray(length) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(i)
  }
  return arr
}

export function throttle(func, threshhold = 150) {
  let timeout
  let start = new Date()

  return function () {
    const context = this
    const args = arguments
    const current = new Date() - 0

    clearTimeout(timeout)

    if (current - start >= threshhold) {
      func.apply(context, args)
      start = current
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, threshhold)
    }
  }
}

export function debounce(func, delay = 150) {
  let timeout

  return function () {
    clearTimeout(timeout)

    const context = this
    const args = arguments

    timeout = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}

export function optionalParams(obj, fields) {
  const params = {}

  for (let i = 0; i < fields.length; i++) {
    const [target, source] = fields[i]
    if (typeof obj[source] !== 'undefined') {
      if (obj[source] !== '') {
        params[target] = obj[source]
      }
    }
  }

  return params
}

export function find(arr, _value) {
  for (let i = 0; i < arr.length; i++) {
    const { value, name } = arr[i]
    if (value === _value) return name
  }
  return ''
}

export function formatDate(value, format = 'YYYY-MM-DD') {
  return value ? moment(value).format(format) : ''
}

export function getHostPrefix() {
  const { hostname } = window.location
  const [prefix] = hostname.split('.')
  if (!~['test', 'www'].indexOf(prefix)) {
    return 'test'
  }
  return prefix
}

export const NAVIGATE_LINK_ID = 'OPEN_LINK'

export function clickLink(url, target) {
  const link = document.body.querySelector('#' + NAVIGATE_LINK_ID)
  if (!link) {
    const newLink = document.createElement('a')
    newLink.id = NAVIGATE_LINK_ID
    newLink.href = url
    newLink.target = target
    document.body.appendChild(newLink)
  } else {
    link.href = url
    link.target = target
  }

  event.emit('navigate')
}

export function thousandths(value = '', precision = 2) {
  if (~value.indexOf('.')) {
    value = value.split('.')
  } else {
    let decimal = ''
    for (let i = 0; i <= precision; i++) {
      decimal += '0'
    }
    value = [value, decimal]
  }

  // 小数位
  if (precision === 0) {
    value.length = 1
  } else {
    if (value[1][precision] >= 5) {
      value[1] = `${value[1].substr(0, precision - 1)}${Number(value[1][precision - 1]) + 1}`
    } else {
      value[1] = value[1].substr(0, precision)
    }
  }

  // 整数位
  const [integer] = value
  if (integer.length < 3) return value.join('.')

  let result = ''
  let index = integer.length
  while (index > 0) {
    const next = index - 3
    const substr = integer.substring(next < 0 ? 0 : next, index)
    result = result ? `${substr},${result}` : substr
    index = next
  }
  value[0] = result

  return value.join('.')
}
