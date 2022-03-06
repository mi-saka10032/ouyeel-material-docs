属性

| 参数              | 说明             | 类型                                              | 默认值    | 可选值                                                 |
| :---------------- | :--------------- | :------------------------------------------------ | :-------- | :----------------------------------------------------- |
| type              | 显示类型         | String                                            | daterange | year/month/date/week/ datetime/datetimerange/daterange |
| date-value        | 绑定值           | date(DateTimePicker) / array(DateTimeRangePicker) | --        | --                                                     |
| start-placeholder | 起始时间提示文本 | String                                            | --        | --                                                     |
| end-placeholder   | 结束时间提示文本 | String                                            | --        | --                                                     |
| placeholder       | 选择时间提示文本 | String                                            | --        | --                                                     |
| v-model           | 绑定值           | date(DateTimePicker)                              | --        | --                                                     |



事件

| 事件名 | 说明     | 回调参数 |
| :----- | :------- | :------- |
| change | 时间变化 | 当前对象 |