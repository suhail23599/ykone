<template>
  <div class="user-metrics">
    <div class="metrics-title">
      {{ title}}
    </div>
    <div class="metric-info">
      <img 
        v-if="data.direction === 'positive'"
        src="@/assets/images/arrow-up-green.svg"
        alt="positive"
      >
      <img 
        v-if="data.direction === 'negative'"
        src="@/assets/images/arrow-down-red.svg"
        alt="negative"
      >
      <img
        v-if="data.direction === 'neutral'"
        src="@/assets/images/arrow-up-yellow.svg"
        alt="neutral"
      >
      <div
        class="value"
        :class="getStatus.toLowerCase()"
      >
        {{ getValue }}
      </div>
      <div
        class="status"
        :class="getStatus.toLowerCase()"
      >
        {{ getStatus }}
      </div>
    </div>
  </div>
</template>

<script src="./js/user-metrics.js"></script>

<style scoped>
.user-metrics {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.value {
  font-size: 32px;
}
.excellent {
  color: #64FFAA;
}
.bad {
  color: #FF6464;
}
.neutral {
  color: #FFC164;
}
.status {
  margin-top: 4px;
}
</style>