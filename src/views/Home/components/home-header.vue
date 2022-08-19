<template>
  <div class="head">
    <i class="fa fa-map-marker" aria-hidden="true"></i>
    <h3>北华航天工业学院</h3>
    <i class="fa fa-caret-down " aria-hidden="true"></i>
  </div>
  <div class="search">
    <div class="searchchild">
      <i class="fa fa-search"></i>
      <h3>搜索饿了么附近商家</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header'
}
</script>

<style scoped>
.head{
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  height: 12vw;
  padding-left: 3vw;
}
.head h3{
  padding:2vw;
}

.search{
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
}
.search .searchchild{
  display: flex;
  height: 90%;
  width: 95%;
  margin: 0 2vw;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  color: #808080;
  margin: 1vw;
}
</style>
