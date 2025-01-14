<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  background: #282B41;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
