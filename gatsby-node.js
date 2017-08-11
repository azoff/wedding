exports.modifyWebpackConfig = ({ config, stage }) => {
	config._config.resolve.extensions.push('.jpg')
	config._config.resolve.extensions.push('.scss')
	config._config.resolve.modulesDirectories.push('./src')
	return config
}
