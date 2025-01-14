<template>
  <div class="analytics-wrapper">
    <UserProfile></UserProfile>
    <UserContent class="container"></UserContent>
    <UserDemoGraphics class="container"></UserDemoGraphics>
    <ContentScanner></ContentScanner>
    <PerformanceTimeline></PerformanceTimeline>
  </div>
</template>

<script src="./js/analytics.js">
</script>

<style scoped>
.analytics-wrapper {
  max-width: 85vw;
  margin: 14px auto;
  color: #FFFFFF;
  overflow: hidden;
}
.container {
  padding: 24px;
  border: 1px solid #FFFFFF0A;
}
</style>

