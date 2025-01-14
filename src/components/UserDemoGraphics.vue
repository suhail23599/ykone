<template>
  <div v-if="ethnicityData" class="user-demo-graphics">
    <div class="heading">
      AUDIENCE DEMOGRAPHICS
    </div>
    <div class="categories-wrapper">
      <GenderGraphics
        class="container"
        :data="ethnicityData.genders"
      >
      </GenderGraphics>
      <AgeGraphics
        class="container"
        :data="ethnicityData.ages"
      ></AgeGraphics>
      <CountryGraphics
        class="container"
        :data="ethnicityData.countries"
      >
      </CountryGraphics>
      <EthnicityGraphics
        class="container"
        :data="ethnicityData.ethnicities"
      ></EthnicityGraphics>
    </div>
  </div>
</template>

<script src="./js/user-demo-graphics.js"></script>

<style scoped>
.user-demo-graphics {
  margin-top: 24px
}
.heading {
  margin-bottom: 24px;
  font-size: 20px;
}
.categories-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
.container {
  border: 1px solid #FFFFFF0A;
  min-height: 200px;
  padding: 24px;
  flex: 1 1 calc(50% - 4px);
}

</style>
