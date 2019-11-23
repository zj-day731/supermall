<template>
  <div>
    <NavBar>
      <template #center><div>购物街</div></template>
    </NavBar>
  </div>
</template>

<script>
  import {homeMult} from "network/home";
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: 'Home',
    data() {
      return {
        // data: null,
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: []
      }
    },
    components: {
      NavBar
    },
    created() {
      homeMult()
        .then(results => {
          // this.data = results
          this.banner = results.data.banner.list
          this.dKeyword = results.data.dKeyword.list
          this.keywords = results.data.keywords.list
          this.recommend = results.data.recommend.list
        }).catch(err => {
        console.log(err)
      })
    }
  }
</script>
<style scoped>

</style>
