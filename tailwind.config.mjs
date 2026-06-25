/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#513F7E',
          light: '#7361AE',
          dark: '#1F1442',
        },
        accent: {
          DEFAULT: '#EE352F',
          dark: '#B2302C',
        },
        success: {
          DEFAULT: '#3BC958',
          dark: '#1F8634',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F5F8',
        },
        muted: '#7361AE',
        danger: {
          DEFAULT: '#B2302C',
          bg: '#FCE8E8',
        },
        warning: {
          DEFAULT: '#EE352F',
          bg: '#FFF5E6',
        },
        info: {
          DEFAULT: '#7361AE',
          bg: '#EDE8F8',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
};
