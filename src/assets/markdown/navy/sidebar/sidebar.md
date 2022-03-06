展示效果在右侧→→→→→→→→→→→→→→→→→→→→→→→→→→→→→

```vue
<template>
  <div>
    <div>
      <oy-sidebar
        :guess-list="guessList"
        :message-list="messageLists"
        :shopping-cart="shoppingCart"
        :tip-control="tipControl"
      >
        <template #questionnaire>
            <!--     该插槽如果不开启，则为默认的问卷内容，开启后需要自行完善html内容和css样式     -->
          <div></div>
        </template>
      </oy-sidebar>
    </div>
    <div class="markdown-body">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      guessList: [
        { 'questionName': '如何申请开票？', 'questionUrl': '/baidu.com', 'id': 1 },
        { 'questionName': '想撤销订单怎么操作？', 'questionUrl': '', 'id': 2 },
        { 'questionName': '现货资源的提货方式', 'questionUrl': '', 'id': 3 },
        { 'questionName': '如何提出质量异议？', 'questionUrl': '', 'id': 4 },
        { 'questionName': '账户余额如何退款？', 'questionUrl': '', 'id': 5 }
      ],
      messageLists: {
        'is_company_admin': '1',
        'siteHyDegraded': '0',
        'siteWlBuleConfirmReceive': '41',
        'siteWlRemindProviderWarehouseFee': '0',
        'siteYyCustZYKReceiveSuccess': '0',
        'siteZyExamine': '8',
        'siteZyMatching': '28',
        'unreadMessage': '1'
      },
      shoppingCart: 1,
      tipControl: true
    }
  }
}
</script>
```



**OySidebar messageLists代办信息数据 配置说明**

| 参数                             | 说明                 | 类型          | 默认值 |
| :------------------------------- | :------------------- | :------------ | :----- |
| is_company_admin                 | 判断职员审批是否开启 | Number/String | 1开启  |
| siteHyDegraded                   | 降级通知             | Number/String | 0      |
| siteWlBuleConfirmReceive         | 待收货确认           | Number/String | 0      |
| siteWlRemindProviderWarehouseFee | 仓储费未结           | Number/String | 0      |
| siteYyCustZYKReceiveSuccess      | 到账通知             | Number/String | 0      |
| siteZyMatching                   | 帮买消息             | Number/String | 0      |
| unreadMessage                    | 未读消息             | Number/String | 0      |



**OySidebar guessList猜你想问数据 配置说明**

| 参数         | 说明         | 类型   | 默认值 |
| :----------- | :----------- | :----- | :----- |
| questionName | 问题描述字段 | String | - -    |
| questionUrl  | 问题描述字段 | String | - -    |
| id           | 问题描述字段 | Number | - -    |



属性

| 参数          | 说明                                                         | 类型    | 默认值 |
| :------------ | :----------------------------------------------------------- | :------ | :----- |
| shoppingCart  | 购物车数据                                                   | Number  | 0      |
| tipControl    | 控制帮助中心渲染不同的侧边提示框 不传默认false显示帮助中心小tip 为true时显示 猜你想问 提示框 | Boolean | false  |
| guessList     | 猜你想问的数据                                               | Array   | [ ]    |
| messageLists  | 代办信息                                                     | Object  | -      |
| questionnaire | 调查问卷以#slot="questionnaire"传入                          | -       | -      |



事件

| 事件名        | 说明             | 回调参数 |
| :------------ | :--------------- | :------- |
| platformClick | 平台客服点击回调 | - -      |
| backFeed      | 用户反馈点击回调 | - -      |