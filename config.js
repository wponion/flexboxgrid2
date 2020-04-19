let $files = {};

$files[ 'src/flexboxgrid2.scss' ] = {
	dist: 'dist/',
	combine_files: false,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'flexboxgrid2.css',
	watch: [
		'src/*',
		'src/*/*',
		'src/*/*/*',
		'src/*/*/*/*'
	],
};

module.exports = {
	files: $files,
	config: {}
};
