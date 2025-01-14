<template>
  <div class="gender-graphics">
    GENDER
    <div class="canvas-item">
      <canvas id="gender-graph" ref="genderGraph"></canvas>
    </div>
    <div class="legends">
      <div class="male">
        <span class="dot dot-male"></span>
        <span>
          Male:
        </span>
        <span>
          {{ convertToPercentage(data?.MALE) }}
        </span>
      </div>
      <div class="female">
        <span class="dot dot-female"></span>
        <span>
          Female:
        </span>
        <span>
          {{ convertToPercentage(data?.FEMALE) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script src="./js/gender-graphics.js"></script>

<style scoped>
.canvas-item {
  width: 220px;
  height: 220px;
  margin: 0 auto;
}
.legends {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #FFFFFF99;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
}
.dot-male {
  background: #8C96FF;
}
.dot-female {
  background: #64FFAA;
}
</style>