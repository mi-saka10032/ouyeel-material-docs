<template>
  <oy-top-nav-list
      :top-nav-list="topNavList"
  >
  </oy-top-nav-list>
</template>

<script>
export default {
  name: "TopNavList",
  data() {
    return {
      topNavList: [
        {
          "shopMenuName": "管通天下",
          "shopMenuLink": "/tabs",
          "children": [{
            "shopMenuName": "热镀锌",
            "shopMenuLink": "/search-ng/shop/SCDPT0941701/index/"
          }, {"shopMenuName": "电工钢", "shopMenuLink": "/search-ng/shop/SCDPT0941701/index/"}]
        },
        {
          "shopMenuName": "材料专区",
          "shopMenuLink": "/tabs1",
          "children": [
            {
              "shopMenuName": "热镀锌",
              "shopMenuLink": "#",
              "children": [{"shopMenuName": "不锈钢热轧2", "shopMenuLink": "#"}]
            },
            {
              "shopMenuName": "电工钢",
              "shopMenuLink": "#",
              "children": [
                {
                  "shopMenuName": "不锈钢热轧",
                  "shopMenuLink": "#",
                  "children": [{"shopMenuName": "不锈钢热轧1", "shopMenuLink": "#"}]
                },
                {"shopMenuName": "工字钢", "shopMenuLink": "#"}]
            }
          ]
        },
        {"shopMenuName": "加工专区", "shopMenuLink": "/search-ng/shop/SCDPT0095101/index/"}
      ]
    }
  }
}
</script>

<style scoped>
.OyTopNavList {
  margin-bottom: 100px;
}
</style>