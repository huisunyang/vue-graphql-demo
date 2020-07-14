<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
  created () {
    const getECards = gql`query ($page:Int,$pageSize:Int) {
        usedDetailStatistics (page:$page,pageSize:$pageSize) {
          data {
            orderId
          }
          totalPages
          totalElements
        }
        test
      }`
    this.$apollo.query({
      query: getECards,
      variables: {
        page: 0,
        pageSize: 20
      }
    }).then(res => {
      console.log('1233456', res)
    })
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
