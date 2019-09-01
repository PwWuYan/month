<template>
  <div>
    {{contList}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
      ...mapState(['contList'])
    },

}
</script>

<style>

</style>