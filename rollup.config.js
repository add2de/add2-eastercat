import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/eastercat.es6',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: {
    file: '.tmp/eastercat.js',
    format: 'iife',
  },
};
