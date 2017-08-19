const base = require('airtable').base('appeaASC8tCQXmhfg')
const crypto = require('crypto')
const tab = 'Website Data'
const view = 'Main View'

exports.modifyWebpackConfig = ({ config, stage }) => {
	config._config.resolve.modulesDirectories.push('./src')
	return config
}

exports.sourceNodes = async ({ boundActionCreators }) => {
	const { createNode } = boundActionCreators
	return new Promise((resolve, reject) => {
		base(tab).select({ view }).eachPage(function(records, next) {
				records.forEach(function(record) {
					const content = JSON.stringify(record)
					const contentDigest = crypto.createHash('md5').update(content).digest('hex')
					createNode({
						id: `airtable.${record.id}`,
						slug: record.get('Slug'),
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