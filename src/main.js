import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vue-apollo
import VueApollo from 'vue-apollo'
import ApolloClient from './network/apolloClient'
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: ApolloClient
})
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
