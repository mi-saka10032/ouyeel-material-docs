## 以下为事件分析



**hot-search-click**

**his-search-click**

热词和历史搜索点击事件，回调参数均为当前点击选中的字符串内容



**drop-down-click**

下拉列表点击事件，回调参数为当前点击选中的下拉列表对象Object



**search-btn**

**btn-click**

search-btn为搜索按钮点击，btn-click为右侧按钮点击

不同之处在于搜索按钮点击回调参数为当前input框中的内容，但右侧按钮点击没有回调参数



**handle-focus**

**handle-input**

**handle-blur**

分别为输入框的聚焦、输入值变化、失焦事件，回调参数均为当前input框中的内容。

**因为组件的iptValue这个属性不是双向绑定的，因此在handle-input事件中，可以将事件的回调参数赋给this.iptValue，实现iptValue与页面输入框内容的双向绑定**