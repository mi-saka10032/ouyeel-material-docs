<template>
  <div id="button">
    <div>
      <div>
        <oy-button size="xlarge">最大按钮</oy-button>
        <oy-button size="large">大按钮</oy-button>
        <oy-button >默认按钮</oy-button>
        <oy-button size="small">小按钮</oy-button>
      </div>
      <div class="markdown-body">
        <ButtonMarkdown1/>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <oy-button type="orange">亮色</oy-button>
        <oy-button type="dark">暗色</oy-button>
        <oy-button type="orange-bd">亮色边框</oy-button>
        <oy-button type="dark-bd">暗色边框</oy-button>
      </div>
      <div class="markdown-body">
        <ButtonMarkdown2/>
      </div>
    </div>
    <hr>
    <div>
      <div>
        <oy-button icon="el-icon-shopping-cart-2" type="orange">加入购物车</oy-button>
      </div>
      <div class="markdown-body">
        <ButtonMarkdown3/>
      </div>
    </div>
    <hr>
    <div>
      <oy-button>正常按钮</oy-button>
      <oy-button plain>正常按钮</oy-button>
      <oy-button round>圆角按钮</oy-button>
      <oy-button circle>圆形按钮</oy-button>
      <oy-button loading>加载中按钮</oy-button>
      <oy-button disabled>加载中按钮</oy-button>
      <oy-button autofocus>加载中按钮</oy-button>
    </div>
    <hr>
    <div class="markdown-body">
      <ButtonMarkdownAttr/>
    </div>
  </div>
</template>

<script>
import ButtonMarkdown1 from '@/assets/markdown/basic-component/button/button1.md'
import ButtonMarkdown2 from '@/assets/markdown/basic-component/button/button2.md'
import ButtonMarkdown3 from '@/assets/markdown/basic-component/button/button3.md'
import ButtonMarkdownAttr from '@/assets/markdown/basic-component/button/button attr.md'
export default {
  name: 'Button',
  components: {
    ButtonMarkdown1,
    ButtonMarkdown2,
    ButtonMarkdown3,
    ButtonMarkdownAttr
  }
}
</script>

<style scoped lang="scss">
.el-button {
  margin: 20px 20px;
}
</style>
