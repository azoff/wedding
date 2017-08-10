exports.modifyWebpackConfig = ({ config, stage }) => {
	config._config.resolve.modulesDirectories.push("./src")
	return config
}
