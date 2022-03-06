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
      <Markdown/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/navy/sidebar/sidebar.md'

export default {
  name: 'Sidebar',
  components: {
    Markdown
  },
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
