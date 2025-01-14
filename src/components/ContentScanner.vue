<template>
  <div class="content-scanner">
    <span class="title">CONTENT SCANNER</span>
    <div class="search-body">
      <div class="search-input">
        <img src="@/assets/images/search.svg" alt="search-icon">
        <input
          type="text"
          placeholder="Type anything to search..."
        >
      </div>
      <div>
        <div class="inline popular-search">
          Popular Searches:
        </div>
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="inline tag"
        >
          <span>
            {{ tag }}
          </span>
          <img class="image" src="@/assets/images/info.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentScanner',
  data () {
    return {
      tags: ['Fashion', 'Beauty', 'Luxury', 'Travel']
    }
  }
}
</script>


<style scoped>
.content-scanner {
  color: #FFFFFF;
  margin-top: 24px;
  border-top: 1px solid #FFFFFF1A;
  border-bottom: 1px solid #FFFFFF1A;
  padding: 24px;
}
.content-scanner >span {
  font-size: 20px;
}
.search-body {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.search-input {
  display: flex;
  align-items: center;
  background-color: #3d3d56;
  padding: 15px;
  border-radius: 8px;
  width: 70%;
  margin-bottom: 16px;
}
.search-input img {
  margin-right: 4px;
}
input[type="text"] {
  background: transparent;
  border: none;
  outline: none;
  color: #FFFFFF99;
  width: 100%;
}
.inline {
  display: inline-block;
}
.popular-search {
  color: #FFFFFF99;
  margin-right: 4px;
}
.tag {
  background-color: #2C2F4B;
  padding: 8px;
  border-radius: 12px;
  margin-left: 8px;
  color: #FFFFFF;
  box-shadow: 0px 5px 30px 0px #FFFFFF0D inset;
}
.image {
  position: relative;
  top: 4px;
}
</style>