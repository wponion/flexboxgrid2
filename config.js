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

$files[ 'dist/flexboxgrid2.css' ] = {
	dist: 'docs/',
	minify: true,
	rename: 'dist-flexboxgrid2.css',
	watch: [
		'dist/flexboxgrid2.css'
	],
};

module.exports = {
	files: $files,
	config: {}
};
