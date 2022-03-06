属性

| 参数    | 说明                              | 类型   | 默认值 | 可选值 |
| :------ | :-------------------------------- | :----- | :----- | :----- |
| initVal | 初始值                            | Number | - -    | - -    |
| v-model | 绑定数据(initVal存在时初始化绑定) | Number | - -    | - -    |
| row     | 自定义行数据                      | Object | - -    | - -    |
| min     | 最小值                            | Number | - -    | - -    |
| max     | 最大值                            | Number | - -    | - -    |



事件

| 事件名       | 说明               | 回调参数                    |
| :----------- | :----------------- | :-------------------------- |
| change       | 绑定值被改变时触发 | currentValue, oldValue, row |
| handle-check | 确定               | currentValue, oldValue, row |
| handle-close | 关闭               | currentValue, oldValue, row |