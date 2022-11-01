module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/img");

	return {
		pathPrefix: "/11ty-web-template/",
		dir: {
			input: "src",
			output: "docs"
		}
	}
}