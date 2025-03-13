import type { Preview } from '@storybook/react'
import {themes} from '@storybook/theming';
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
    docs: {
      theme: themes.normal,}
  },
};

export default preview;