<template>
  <div class="country-graphics">
    <div v-if="modifiedData.length" class="heading">
      <div class="title">
        TOP COUNTRIES
      </div>
      <div class="max-population">
        {{ modifiedData[0].value }}% from {{modifiedData[0].key}}
      </div>
    </div>
    <div class="info">
      <div
        v-for="(data, index) in modifiedData"
        :key="index"
        class="percentage-wrapper"
      >
        <div class="label">
          <div>
            {{ data.key }}
          </div>
          <div>
            {{ data.value }}%
          </div>
        </div>
               
        <div class="bar">
          <div class="progress" :style="{ width: data.value + '%'}"></div>
        </div>
      </div>   
    </div>
  </div>
</template>

<script src="./js/country-graphics.js"> </script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 500;
}
.info {
  margin-top: 12px;
  max-height: 500px;
  overflow-y: scroll;
}
.label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.info::-webkit-scrollbar {
  width: 10px;
}

.info::-webkit-scrollbar-track {
  background: #34374C;
  border-radius: 8px;
}

.info::-webkit-scrollbar-thumb {
  background-color: #51546B;
  border-radius: 8px;
}
.percentage-wrapper {
  margin-right: 12px;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.6);

}
.bar {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 16px;
  position: relative;
}
.progress {
  background: #8C96FF;
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  border-radius: 8px;
}
.percentage-wrapper:first-child .progress {
   background: #64FFAA;
}
</style>