const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}

module.exports = {
  siteName: 'SZPhil',
  siteUrl: 'https://szp.netlify.app',
  templates: {
    Doc: '/:slug'
    //Movie: '/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },
    // {
    //   use: '@gridsome/source-contentful',
    //   options: {
    //     space: 'x3kgssebouhp',
    //     accessToken: '-3UsOMJv4F1xYG-PqlE9PC25jpo2VeCvKw7sO15C1kg', // required
    //     host: 'cdn.contentful.com',
    //     environment: 'master',
    //     typeName: 'Contentful'
    //   }
    // },
    // {
    //   use: 'gridsome-source-sanity',
    //   options: {
    //     projectId: 'jb0uwmcl',
    //     dataset: 'production',
    //     // Token is only required if dataset is private or `overlayDrafts` is set to true
    //     token: '',
    //     overlayDrafts: false,
    //     watchMode: false,
    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //     graphqlTag: 'default'
    //   }
    // },
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'http://localhost:4000',
        fieldName: 'Poll',
        typeName: 'Polls',
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

