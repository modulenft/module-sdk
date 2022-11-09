/**
 * Handles json importing
 */
import json from '@rollup/plugin-json';
/**
 * Projects root pkg.json
 */
import pkg from './package.json';
/**
 * Used to compile typescript projects with rollup js
 */
import typescript from 'rollup-plugin-typescript2'; // Used to compile ts

/**
 * Resolves esm modules
 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
/**
 * Resolves cjs modules
 */
import commonjs from '@rollup/plugin-commonjs';

export default {
  /**
   * Source file of project (main)
   */
  input: 'src/index.ts',
  /**
   * Designated outputs into pkg.json and formats
   */
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true }
  ],
  plugins: [json(), nodeResolve(), commonjs(), typescript()]
};
