// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  theme: {
    screens: {
      xs: '30rem', // 480px
      ...defaultTheme.screens,
    },
  },
  // ...
};
