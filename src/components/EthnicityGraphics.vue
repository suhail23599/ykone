<template>
  <div class="ethnicity-graph">
    <div v-if="sortedData.length" class="heading">
      <div class="title">
        TOP ETHNICITIES
      </div>
      <div class="max-value">
        {{ sortedData[0].weight }}% {{sortedData[0].name}}
      </div>
    </div>
    <div class="canvas-wrapper center">
      <canvas id="ethnicity-graph"></canvas>
    </div>
  </div>
</template>

<script src="./js/ethnicity-graphics.js"></script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 500;
}
</style>
