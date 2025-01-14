<template>
  <div class="user-quality">
    QUALITY SCORE
    <div class="metric-info">
      <div class="value" :class="data.score.direction">
        <div
          :class="[`${data.score.direction}_image`]"
          class="metric-image"
        >
        </div>
        <div>
          <span class="percentage">
            {{ data.score.value }}
          </span>
          /100
        </div>
        <div>
          {{ getStatus }}
        </div>
      </div>
      <div>
        <RadarGraph :data="data.score_metrics"></RadarGraph>
      </div>
    </div>
  </div>
</template>

<script src="./js/user-quality.js">
</script>

<style scoped>
.metric-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.neutral {
  color: #FFC164;
}
.positive {
  color: #64FFAA;
}
.negative {
  color: #FF6464;
}
.neutral_image {
  background-image: url('@/assets/images/arrow-up-yellow.svg');
}
.positive_image {
  background-image: url('@/assets/images/arrow-up-green.svg');
}
.negative_image {
  background-image: url('@/assets/images/arrow-down-red.svg');
}
/* .value span {
  font-size: 64px;
} */
.metric-image {
  height: 16px;
  width: 16px;
  background-size: 100% 100%;
  margin-bottom: 8px;
}
.percentage {
  font-size: 64px;
}
.value {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>