import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/add2kat.es6',
  output: {
    file: 'dist/add2kat.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
