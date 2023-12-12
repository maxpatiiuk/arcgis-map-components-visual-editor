import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'http://localhost/',
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
      ],
    }),
  ],
};
