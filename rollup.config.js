import buble from '@rollup/plugin-buble';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert {type: "json"}

const browser = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'Vue3PerfectScrollbar',
    file: pkg.browser
  },
  plugins: [
    buble({
      transforms: { forOf: false }
    }),
    nodeResolve({
      browser: true, jsnext: true, main: true
    }),
    commonjs()
  ]
}

const browserMin = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'Vue3PerfectScrollbar',
    file: 'dist/vue3-perfect-scrollbar.umd.min.js'
  },
  plugins: [
    nodeResolve({
      browser: true, jsnext: true, main: true
    }),
    commonjs(),
    buble(
      { transforms: { forOf: false } }
    ),
    terser()
  ]
}

const nodeModules = {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: pkg.main
    },
    {
      format: 'esm',
      file: pkg.module
    }
  ],
  plugins: [
  ],
  external: [ 'perfect-scrollbar' ]
}

export default [
  browser,
  browserMin,
  nodeModules
]
