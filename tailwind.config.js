/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'spare-primary': '#0073E6',
        'spare-blue': {
          5: '#E6F1FD',
          10: '#CCE3FA',
          15: '#B3D5F8',
          20: '#99C7F5',
          30: '#66ABF0',
          40: '#338FEB',
          50: '#0073E6',
          60: '#005CB8',
          70: '#00458A',
          80: '#002E5C',
          90: '#002345',
          100: '#00172E',
        },
        'spare-gray': {
          5: '#f2f2f3',
          10: '#e5e6e6',
          15: '#d8d9da',
          20: '#cbcccd',
          30: '#b1b3b4',
          40: '#97999b',
          50: '#7d8082',
          60: '#646668',
          70: '#4b4d4e',
          80: '#323334',
          90: '#262627',
          100: '#191a1a',
        },
        'spare-stroke': {
          primary: '#00000012',
          secondary: '#0000000D',
        },
      },
      boxShadow: {
        'stroke-sm': '0 0 0 1px #00000012',
        'stroke-md': '0 0 0 2px #00000012',
        'stroke-lg': '0 0 0 4px #00000012',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
