<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
:root {
  --background-color: #2c3e50;
  --border-color: #7591AD;
  --text-color: #34495e;
  --color1: #ec3e27;
  --color2: #fd79a8;
  --color3: #0984e3;
  --color4: #00b894;
  --color5: #fdcb6e;
  --color6: #e056fd;
  --color7: #F97F51;
  --color8: #BDC581;
}

* {
  margin: 0;
  padding: 0;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
}

.markdown-body {
  margin-top: 50px!important;
  margin-bottom: 50px!important;
}

.markdown-body table {
  position: relative;
  margin-left: 0;
}
</style>
