import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#27AE60',
        grayEE: '#EEEEEE',
        gray67: '#676767',
        grayF7: '#F4F4F7',
        black: 'rgba(0, 0, 0, 0.85)',
        gray: 'rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
};
export default config;
