module.exports = function (option = {}) {
	return option.NODE_ENV === "production" ? require("./__webpack-prod") : require("./__webpack-dev");
};
