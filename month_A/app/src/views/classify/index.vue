<template>
  <div class="classify">
    <div class="top">
      <span v-for="(item,index) in list" :key={index} @click="hanleClick(index)">{{item}}</span>
    </div>
    <div class="cont">
      {{contList}}
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:['热门','新书','免费','完本']
    }
  },
}
</script>

<style lang='scss' scoped>
.classify{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top{
    width: 100%;
    height: 50px;
    display: flex;
   span{
     flex: 1;
     text-align: center;
     line-height: 50px;
   }
  }
}
</style>