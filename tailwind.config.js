/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
          extend: {
              fontFamily: {
                   heading: ['Noto Serif', 'serif'],
              }
          },
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }

          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }

          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
}
