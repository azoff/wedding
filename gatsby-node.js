const base = require('airtable').base('appeaASC8tCQXmhfg')
const crypto = require('crypto')
const path = require('path')
const tab = 'Website Data'
const view = 'Main View'

exports.modifyWebpackConfig = ({ config, stage }) => {
  config._config.resolve.modulesDirectories.push('./src')
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

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
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