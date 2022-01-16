## TODO 

* Be sure to run the server side to test your progress
* [ ] `npm install -g @vue/cli`
* [ ] `vue create -n --merge full-stack-graphql-vue-client-casiano-rodriguez-leon-casiano` 
  * `-n, --no-git                    Skip git initialization`
  * ` --merge                         Merge target directory if it exists`
* [ ] Have the branch `solution` at hand to check any doubts: `git worktree add ../client-solution solution`
* [ ] Install these `npm install --save vue-apollo graphql apollo-boost`
* [ ] Initial setup:

  ```js
    import Vue from "vue";
    import App from "./App.vue";

    import ApolloClient from "apollo-boost";
    import VueApollo from "vue-apollo";

    // Apollo Boost is a zero-config way to start using Apollo Client. It includes some sensible defaults.
    const apolloClient = new ApolloClient({
      uri: "http://localhost:4000/graphql",
    });

    Vue.use(VueApollo); // Let us use the VueApollo plugin https://es.vuejs.org/v2/guide/plugins.html

    const apolloProvider = new VueApollo({
      defaultClient: apolloClient,
    });

    Vue.config.productionTip = false;

    new Vue({
      render: (h) => h(App), //  A render function is an alternative to templates.
      apolloProvider,        //  h is the "createElement" function
    }).$mount("#app");       // We mount it in the "#app" element of public/index.html
  ```

## Read

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra

## Solution

For the solution see branch [solution](https://github.com/crguezl/client-graphql-vue-hello/tree/solution) in this repo [crguezl/client-graphql-vue-hello](https://github.com/crguezl/client-graphql-vue-hello)


## Super repo

* <https://github.com/crguezl/fullstack-graphql-vue>

## References


* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra 
* [Location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
* [Vue cli Installation](https://cli.vuejs.org/guide/installation.html)
* [Lab GraphQL-Simple-Client](https://ull-mii-sytws.github.io/practicas/graphql-simple-client/)
  

## Branch solution: npm scripts for developing

### Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

