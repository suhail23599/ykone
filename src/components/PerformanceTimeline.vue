<template>
  <div class="performance-wrapper">
    PERFORMANCE TIMELINE
    <div class="canvas-wrapper">
      <canvas id="performance-graph"></canvas>
    </div>
  </div>
</template>

<style scoped>
.performance-wrapper {
  margin-top: 24px;
  font-size: 20px;
}
.canvas-wrapper {
  margin-top: 24px;
  min-height: 500px;
}
</style>

<script src="./js/performance-timeline.js"></script>