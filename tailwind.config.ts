import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        hibiscus: '#a90f32',
        palm: '#e59f31',
        ink: '#0a0708',
        cream: '#fff7eb'
      },
      boxShadow: { glow: '0 0 50px rgba(229, 159, 49, 0.22)' }
    }
  },
  plugins: []
};
export default config;
