属性

| 参数                     | 说明                                                         | 类型          | 默认值 |
| :----------------------- | :----------------------------------------------------------- | :------------ | :----- |
| width                    | select宽度                                                   | String/Number | ----   |
| filter-option            | 下拉框是否需要输入框                                         | Boolean       | ----   |
| select-placeholder       | select 占位符                                                | String        | ----   |
| filter-input-placeholder | 下拉框内输入框的占位符                                       | String        | ----   |
| multiple                 | 是否多选                                                     | Boolean       | ----   |
| clearable                | 是否可以清空选项                                             | Boolean       | ----   |
| select-list              | 下拉列表数据                                                 | Array         | ----   |
| render-key               | 下拉框和select框绑定得key【要用哪个属性渲染】                | String        | ----   |
| default-check-list       | 多选时默认选中得条目列表/单选默认选中得value值，应和配置render-key得属性值对应 | Array         | ----   |
| show-operate             | 是否需要底部确定/取消操作按钮                                | Boolean       | ----   |
| is-append-body           | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可设置为 false | Boolean       | ----   |
| multiple-type            | 多选时select框样式【1:collapse 选中收起展开均一行显示,示例: 2；2:expand选中展开,收起一行显示,示例：3】 | Number        | 1/2    |
| option-type              | 自定义下拉框内容的类型【示例：4】                            | String        | table  |



事件

| 事件                         | 说明                              | 回调                             |
| :--------------------------- | :-------------------------------- | :------------------------------- |
| select-change                | select change事件                 | 选中的对象【数据以列表形式返回】 |
| confirm-select/cancle-select | 下拉框有确定/清空按钮时的点击事件 | 选中的数据列表                   |
| handle-checkall              | 全选按钮点击                      | 选中得列表                       |
| clear-select                 | select 上面得清除按钮点击事件     | 选中得列表                       |