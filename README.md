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
    // After installing vue-apollo in your app, all your components can now use Apollo through the 'apollo' option.

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
  See [Vue Apollo](https://apollo.vuejs.org/guide/apollo)

## Read

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra

## Solution

For the solution see branch [solution](https://github.com/crguezl/client-graphql-vue-hello/tree/solution) in this repo [crguezl/client-graphql-vue-hello](https://github.com/crguezl/client-graphql-vue-hello)


## Super repo

* <https://github.com/crguezl/fullstack-graphql-vue>

## gql-tag

* [apollographql/graphql-tag](https://github.com/apollographql/graphql-tag#webpack-loading-and-preprocessing)

GraphQL strings are the right way to write queries in your code, because they can be statically analyzed using tools like [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql). However, strings are inconvenient to manipulate, if you are trying to do things like add extra fields, merge multiple queries together, or other interesting stuff.

That's where this package comes in - it lets you write your queries with [ES2015 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and compile them into an AST with the `gql` tag.

## References


* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra 
* [Location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
* [Vue cli Installation](https://cli.vuejs.org/guide/installation.html)
* [Vue Apollo Guide](https://vue-apollo.netlify.app/guide/installation.html#vue-cli-plugin)
* [Building APIs With GraphQL in Your Node.js Application](https://blog.appsignal.com/2020/06/03/building-apis-with-graphql-in-your-node-application.html) by Diogo Souza on Jun 3, 2020

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

### Vue Cli Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

