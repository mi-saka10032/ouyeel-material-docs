<template>
  <div>
    <div>
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="禁止信息"
        type="stop"
      />
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="错误状态"
        type="error"
      />
      <oy-alert
        :closable="true"
        display="block"
        size="large"
        title="成功状态"
        type="success"
      />
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="提醒信息"
        type="notice"
      />
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="提示信息"
        type="tips"
      />
      <oy-alert
        :closable="true"
        display="block"
        size="large"
        title="疑问信息"
        type="question"
      />
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="警示信息"
        type="warning"
      />
      <oy-alert
        :closable="false"
        display="block"
        size="large"
        title="即将到期提示信息"
        type="dueSoon"
      />
    </div>
    <div class="markdown-body">
      <Markdown/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/assets/markdown/tip-component/alert/alert.md'

export default {
  name: 'Alert',
  components: {
    Markdown
  }
}
</script>
