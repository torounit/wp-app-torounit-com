// rollup.config.js
import replace from 'rollup-plugin-replace';
import npm      from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'

export default {
	entry: 'src/scripts/app.js',
	dest: 'www/scripts/app.js',
	plugins: [
		npm({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
		replace({
			'process.env.NODE_ENV': '"production"'
		}),
		commonjs(), // CommonJSモジュールをES6に変換
		babel(), // ES5に変換
	],
}
