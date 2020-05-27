// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    const data = require('./data/settings.json');

    const Menu = store.addCollection({typeName: 'Menu'})

    for(const item of data.sidebar){
    	Menu.addNode({
        section: item.section,
        topics: item.topics
	    })
    }
  })

  // api.createPages(async ({ graphql, createPage }) => {
  //   const data = await graphql(`{
  //     allSanityMovie {
  //       edges {
  //         node {
  //           id
  //           title
  //           slug {
  //             current
  //           }
  //           overview
  //         }
  //       }
  //     }
  //   }`)

  //   data.allSanityMovie.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `/movie/${node.slug.current}`,
  //       component: './src/templates/Movie.vue',
  //       context: {
  //         id: node.id
  //       }
  //     })
  //   })
  // })
}
