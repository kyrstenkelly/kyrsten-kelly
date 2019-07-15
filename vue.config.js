module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/common.scss";`
      },
    }
  },
  chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-svg-inline-loader")
				.loader("vue-svg-inline-loader")
				.options({});
	}
}
