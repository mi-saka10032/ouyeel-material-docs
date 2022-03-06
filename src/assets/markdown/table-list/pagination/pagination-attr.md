**属性**

| 参数         | 说明                                             | 类型    | 默认值                                                       | 可选值                                 |
| :----------- | :----------------------------------------------- | :------ | :----------------------------------------------------------- | -------------------------------------- |
| certain-btn  | 页面是否显示确定按钮 可选,不写就没有右侧确定按钮 | Boolean | false                                                        |                                        |
| current-page | 当前页                                           | Number  | - -                                                          |                                        |
| page-size    | 每页显示数量                                     | Number  | - -                                                          |                                        |
| page-sizes   | 分页数据                                         | Array   | - -                                                          |                                        |
| total        | 总数量                                           | Number  | - -                                                          |                                        |
| layout       | 组件布局，子组件名用逗号分隔                     | String  | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |



**事件**

| 事件名称       | 说明                               | 回调参数 |
| :------------- | :--------------------------------- | :------- |
| defineBtnClick | 确认按钮点击事件 可选              | - -      |
| size-change    | pageSize 改变时会触发              | 每页条数 |
| current-change | currentPage 改变时会触发           | 当前页   |
| prev-click     | 用户点击上一页按钮改变当前页后触发 | 当前页   |
| next-click     | 用户点击下一页按钮改变当前页后触发 | 当前页   |