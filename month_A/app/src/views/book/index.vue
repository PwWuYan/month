<template>
  <div>
      <dl v-for="(item,index) in readList" :key="index">
        <dt></dt>
        <dd>
            <h3>《{{item.bookName}}》</h3>
        <p>作者：{{item.authorName}}</p>
        <p>最新：{{item.updteChapterName}}</p>
        <p class="text">简介：{{item.description}}</p>
        </dd>
       
      </dl>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['readList'])
  },
}
</script>

<style lang="scss" scoped>
dl {
  position: relative;
  width: 100%;
  display: flex;
  padding: 10px;
  height: 120px;
  dt {
    width: 70px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    overflow: hidden;
    padding-left: 20px;
    .text {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
   
  }
  .join{
    width: 70px;
    height: 30px;
    border: 1px solid red;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -20px;
  }
  .read{
    width: 50%;
    height: 40px;
  }

}
</style>