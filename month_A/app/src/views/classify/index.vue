<template>
  <div class="classify">
    <div class="top">
      <span  v-for="(item,index) in list" :key="index" @click="handleClick(index)" :class="curIndex===index?'spanActive':''" > {{item}}</span>
    </div>
    <div class="cont">
      <item></item>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
import item from '../../components/item'
export default {
  data() {
    return {
      list:['热门','新书','免费','完本'],
      curIndex:0
    }
  },
  components:{
    item
  },

  computed: {
    ...mapState(['setContList'])
  },
  methods: {
    ...mapMutations(['setCurIndex']),
    handleClick(index){
      this.curIndex=index;
      this.setCurIndex(index)
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
     font-size: 12px;
     background: #ccc;
     &.spanActive{
    background: red;
    color:white
  }
   }
  }
  .cont{
    flex: 1;
    width: 100%;
  }
 
}
</style>