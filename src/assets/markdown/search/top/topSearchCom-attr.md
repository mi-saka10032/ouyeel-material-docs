**属性**

| 参数          | 说明                   | 类型          | 默认值                                | 可选值 |
| :------------ | :--------------------- | :------------ | :------------------------------------ | :----- |
| placeholder   | 输入框占位文本         | String        | -                                     | - -    |
| iptValue      | 输入框初始值           | String/Number | -                                     | - -    |
| commonCitiao  | input 底部显示一行文字 | String        | -                                     | - -    |
| historySearch | 历史搜索词条           | Object        | {}                                    | - -    |
| hotSearch     | 热词列表               | Object        | {}                                    | - -    |
| btnPrams      | 搜索框右侧按钮         | Object        | { control: false, txt: '', icon: '' } | - -    |
| zgCode        | 右侧二维码跟文字       | Object        | {}                                    | - -    |
| dropDownList  | 下拉匹配列表           | Array         | []                                    | - -    |
| iptWidth      | input 宽度             | Number        | 555                                   | - -    |
| btnWidth      | 搜索按钮宽度           | Number        | 90                                    | - -    |
| searchBtnTxt  | 搜索按钮内容           | String        | '搜索'                                | - -    |



**事件**

| 事件             | 说明                 | 回调                         |
| :--------------- | :------------------- | :--------------------------- |
| hot-search-click | 热词列表点击事件     | 当前对象                     |
| his-search-click | 历史搜索列表点击事件 | 当前对象以及新的历史列表数据 |
| search-btn       | 搜索按钮点击事件     | input 输入的内容             |
| btn-click        | 右侧按钮点击事件     | -                            |
| drop-down-click  | 下拉列表点击事件     | 当前对象                     |
| handle-input     | input 事件           | 输入的值                     |
| handle-focus     | focus 事件           | focus 时输入框的值           |
| handle-blur      | input 事件           | blur 时输入框的值            |