<template>
  <div>
    <router-link
      tag="dl"
      v-for="(item,index) in contList"
      :key="index"
      :to="{path:'/detail',query:{id:item.bookId}}"
    >
      <img :src="item.coverUrl" alt />
      <dt></dt>
      <dd>
        <h3>《{{item.bookName}}》</h3>
        <p>作者：{{item.authorName}}</p>
        <p>最新：{{item.updteChapterName}}</p>
        <p class="text">简介：{{item.description}}</p>
      </dd>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["contList"])
  }
};
</script>

<style lang='scss' scoped>
dl {
  width: 100%;
  height: 120px;
  display: flex;
  overflow: hidden;
  padding: 10px;
  dt {
    width: 100px;
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

    position: relative;
    .text {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>