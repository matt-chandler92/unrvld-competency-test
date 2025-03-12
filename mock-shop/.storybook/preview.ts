import type { Preview } from '@storybook/react'
import '../src/css/main.scss';
import  '../src/css/storybook.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;