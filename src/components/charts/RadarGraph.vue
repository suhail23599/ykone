<template>
  <div>
    <canvas id="radar-graph"></canvas>
    <div
      id="tooltip"
    ></div>
  </div>
</template>

<script src="./js/radar-graph.js">
</script>

<style scoped>
canvas {
  max-width: 220px;
  max-height: 220px;
}
#tooltip {
  position: absolute;
  background-color: #2C2F4B;
  border: 1px solid #FFFFFF0D;
  color: white;
  padding: 5px;
  border-radius: 3px; 
  pointer-events: none;
  opacity: 0; 
  box-shadow: 0px 5px 30px 0px #FFFFFF0D inset;
}
</style>