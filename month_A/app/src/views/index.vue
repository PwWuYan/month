<template>
  <div class="='wrap'">
      <div class="head">
            <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag='span'>{{item.tit}}</router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
export default {
  data() {
    return {
      list:[{
        tit:'首页',
        path:'/home'
      },{
        tit:'分类',
        path:'/classify'
      },{
        tit:'排行',
        path:'/sort'
      },{
        tit:'书架',
        path:'/book'
      }],
    }
  },
  methods: {
    ...mapActions(['getList']),
    ...mapMutations(['setCurIndex'])
  },
  created() {
    this.getList()
  },
}
</script>

<style lang='scss' scoped>
.warp{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head{
  width: 100%;
  height: 50px;
  display: flex;
  background: #333;
    span{
    flex: 1;
    line-height: 50px;
    text-align: center;
    color: #a1a1a1;
  }
}
.main{
  width: 100%;
  flex: 1;

}
.head .router-link-active{
      background-color: #454545;
      color:#f2f2f2;
}
</style>