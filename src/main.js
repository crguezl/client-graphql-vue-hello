import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

console.log(apolloClient)

Vue.use(VueApollo)

// The provider holds the Apollo client instances that can then be used by all the child components
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // See https://crguezl.github.io/learning-vue-geting-started-guide/#an-introduction-to-render-functions
  apolloProvider,
}).$mount('#app')
