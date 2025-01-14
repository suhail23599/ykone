<template>
  <div class="user-content">
    <div class="heading">
      <div class="title inline-block">
        CONTENT
      </div>
      <div class="inline-block filters">
        <span
          v-for="(filter,index) in filters"
          :key="index"
          class="filter-val"
          :class="{'active': filter.value === selectedFilter.value}"
          @click="selectFilter(filter)"
          >
          {{ filter.value }}
        </span>
      </div>
    </div>
    <div class="gallery-grid">
      <div
        v-for="(post,index) in contentData"
        :key="post.id"
        class="gallery-item"
        @mouseover="handleMouseHover(index)"
        @mouseleave="handleMouseHover(-1)"
      >
        <img :src="post.image" alt="image" loading="lazy">
        <div class="image-index">{{ index + 1 }}</div>
        <div
          v-if="hoveredIndex === index"
          class="image-content"
        >
          <div class="created-date">
            {{ formatDate(post.created_at) }}
          </div>
          <div class="metrics" v-for="(metric,index) in Object.keys(metricFields)" :key="index">
            <div class="label">
              {{ metricFields[metric] }}:
            </div>
            <div class="value">
              {{ getMetricValue(post[metric]) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button @click="loadMore">
        LOAD MORE
      </button>
    </div>
  </div>
</template>

<script src="./js/user-content.js">
</script>


<style scoped>
.user-content {
  margin-top: 24px;
  color: #FFFFFF;
}
.title {
  width: 30%;
  font-size: 20px;
}
.inline-block {
  display: inline-block;
}
.filters {
  color: #FFFFFF99;
}
.active {
  color: #FFFFFF;
}
.filter-val {
  margin-right: 8px;
  cursor: pointer;
}
.filter-val:last-child {
  margin-right: 0px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 24px;
}
.gallery-item {
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-index {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #303349;
  color: #FFFFFF;
  width: 25px;
  text-align: center;
}
.image-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
}

.gallery-item:hover img {
  opacity: 0.2;
}
.metrics {
  display: flex;
  justify-content: space-between;
}
.btn-container {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  color: #FFFFFF;
}
.btn-container button {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25) inset;
  background-color: #282B41;
  color: #FFFFFF;
  cursor: pointer;
}
</style>