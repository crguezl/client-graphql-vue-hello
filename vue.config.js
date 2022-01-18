module.exports = {
    // Configuring Webpack to allow separated GraphQL queries
    // See https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader
    chainWebpack: config => {
      // GraphQL Loader
      config.module
        .rule('graphql')
        .test(/\.gql$/)
        .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end()

    }
  }