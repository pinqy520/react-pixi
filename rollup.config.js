import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import globals from 'rollup-plugin-node-globals'
import alias from '@rollup/plugin-alias'
const pkg = require('./package.json');

const prod = process.env.NODE_ENV === 'production'
const format = process.env.FORMAT

const BASE_CONFIG = {
  input: './index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies }),
  plugins: [
    json(),
    babel({ exclude: 'node_modules/**' }),
    resolve({
      browser: true,
      mainFields: ['main', 'jsnext'],
    }),
    commonjs({
      ignoreGlobal: false,
      namedExports: {
        'node_modules/scheduler/index.js': ['unstable_scheduleCallback', 'unstable_cancelCallback'],
        '@react-spring/animated': ["createHost"]
      },
    }),
    replace({
      __REACT_DOM_VERSION__: `"${pkg.devDependencies['react-dom'].replace(/[^0-9.]/g, '')}"`,
      __PACKAGE_NAME__: `"${pkg.name}"`,
      __DEV__: prod ? 'false' : 'true',
      'process.env.NODE_ENV': prod ? '"production"' : '"development"',
    }),
    globals(),
    filesize(),
  ].filter(Boolean),
};

function getConfig(dest, format, merge = {}) {
  return {
    input: merge.input || 'src/index.js',
    output: {
      exports: 'named',
      file: dest,
      format,
      name: 'ReactPixi',
      sourcemap: !prod,
      globals: {
        'pixi.js': 'PIXI',
        'pixi.js-legacy': 'PIXI',
        react: 'React',
      },
      ...(merge.output || {}),
    },
    plugins: [
      json(),
      babel({ exclude: 'node_modules/**' }),
      ...(merge.beforePlugins || []),
      resolve({
        browser: true,
        mainFields: ['main', 'jsnext'],
      }),
      commonjs({
        ignoreGlobal: false,
        namedExports: {
          'node_modules/scheduler/index.js': ['unstable_scheduleCallback', 'unstable_cancelCallback'],
          '@react-spring/animated': ["createHost"]
        },
      }),
      replace({
        __DEV__: prod ? 'false' : 'true',
        'process.env.NODE_ENV': prod ? '"production"' : '"development"',
      }),
      globals(),
      ...(merge.afterPlugins || []),
      prod && terser(),
      filesize(),
    ].filter(Boolean),
    external: ['pixi.js', 'pixi.js-legacy', 'react', 'react-dom'],
  }
}

const buildType = prod ? '' : '-dev'
export default [BASE_CONFIG]