const base = require('airtable').base('appeaASC8tCQXmhfg')
const crypto = require('crypto')
const path = require('path')
const tab = 'Website Data'
const view = 'Main View'
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

exports.modifyWebpackConfig = ({ config, stage }) => {
  config._config.resolve.modulesDirectories.push('./src')
  config._config.resolve.extensions.push('.png')
  config._config.resolve.extensions.push('.jpg')
  config._config.resolve.extensions.push('.jpeg')
  const plugins = []
  config._config.plugins.forEach((plugin, i) => {
    if (plugin instanceof CommonsChunkPlugin) return // disabling this optimization
    else plugins.push(plugin)
  })
  config._config.plugins = plugins
  return config
}

exports.sourceNodes = ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  return new Promise((resolve, reject) => {
    base(tab).select({ view }).eachPage(function(records, next) {

        records.forEach(function(record) {

          const [ slug ] = record.get('Slug') || []
          if (!slug) {
            console.error('Record has no slug:', record)
            return
          }

          const [ guestFirstName ] = record.get('Guest Informal Name') || []
          const [ additionFirstName ] = record.get('Addition Informal Name') || []
          const [ includingNames ] = record.get('Including') || []
          const heroImages = (record.get('Hero Image') || []).map(({ url }) => url)

          const content = JSON.stringify(record)
          const contentDigest = crypto.createHash('md5').update(content).digest('hex')
          createNode({
            slug,
            customizations: {
              guestFirstName,
              additionFirstName,
              includingNames,
              heroImages,
            },
            id: `AirtableRecord.${record.id}`,
            parent: '__SOURCE__',
            children: [],
            internal: {
              type: 'AirtableRecord',
              contentDigest,
              content
            },
          })
        });
        next();
    }, function done(err) {
        if (err) { reject(err) }
        resolve()
    });
  });
}

// exports.sourceNodes = ({ boundActionCreators }) => {
//   const { createNode } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     const records = [
//       {
//         id: 'record1',
//         slug: 'pudge',
//         guestFirstName: 'Jim',
//         additionFirstName: 'Patti',
//         includingNames: 'Anne-Marie and Alex',
//         heroImages: ['images/C&J_beach.png', 'images/C&J_Spa.png', 'images/Cheers_J&C.png']
//       }
//     ]
//     records.forEach(function(record) {
//       const content = JSON.stringify(record)
//       const contentDigest = crypto.createHash('md5').update(content).digest('hex')
//       createNode({
//         slug: record.slug,
//         customizations: record,
//         id: `AirtableRecord.${record.id}`,
//         parent: '__SOURCE__',
//         children: [],
//         internal: {
//           type: 'AirtableRecord',
//           contentDigest,
//           content
//         },
//       })
//     });
//     resolve()
//   });
// }

function createIndexPages(createPage) {
  return new Promise((resolve, reject) => {
    graphql(`{
      allAirtableRecord {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`).then(result => {

      if (result.errors) {
        reject(result.errors)
      }

      const component = path.resolve('src/pages/index.js')
      result.data.allAirtableRecord.edges.forEach(({ node: context }) => {
        createPage({ path: context.slug, component, context })
      })

      resolve(result)
    })
  })
}

function createIndexPages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    graphql(`{
      allAirtableRecord {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const component = path.resolve('src/pages/index.js')
      result.data.allAirtableRecord.edges.forEach(({ node: context }) => {
        createPage({ path: context.slug, component, context })
      })

      resolve(result)
    })
  })
}

function createSectionPages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    graphql(`{
      allSectionJson {
        edges {
          node {
            id
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const component = path.resolve('src/templates/section.js')
      result.data.allSectionJson.edges.forEach(({ node: context }) => {
        if (context.id) {
          createPage({ path: context.id, component, context })
        }
      })

      resolve(result)
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return Promise.all([
    createIndexPages(graphql, createPage),
    createSectionPages(graphql, createPage)
  ])
}