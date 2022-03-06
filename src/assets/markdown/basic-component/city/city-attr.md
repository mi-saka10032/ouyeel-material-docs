属性

| 参数        | 说明                                         | 类型    | 默认值         |
| :---------- | :------------------------------------------- | :------ | :------------- |
| value       | 选中的数据值.二维数组.可使用v-model绑定      | Array   | -              |
| data        | 传入cityData数据源（不传入则用组件本地数据） | Object  | {}             |
| placeholder | 选择框提示                                   | String  | 请选择省/市/区 |
| trigger     | 触发方式 有click、hover                      | String  | click          |
| multiple    | 是否支持多选                                 | Boolean | false          |
| level       | 选择的层级,1-省、2-市、3-区                  | Number  | 3              |
| unlimit     | 是否显示不限                                 | Boolean | true           |



事件

| 事件名 | 说明         | 回调参数                                     |
| :----- | :----------- | :------------------------------------------- |
| change | 城市数据编号 | codeData-城市id数据, codeDetail-城市详细数据 |