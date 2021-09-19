import { Config } from '@stencil/core';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'akar-icons-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [inlineSvg()],
};
