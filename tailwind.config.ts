import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ignite-green-100': '#50B2C0',
        'ignite-green-200': '#255D6A',
        'ignite-green-300': '#0A313C',

        'ignite-purple-100': '#8381D9',
        'ignite-purple-200': '#2A2879',

        'ignite-gray-100': '#F8F9FC',
        'ignite-gray-200': '#E6E8F2',
        'ignite-gray-300': '#D1D6E4',
        'ignite-gray-400': '#8D95AF',
        'ignite-gray-500': '#303F73',
        'ignite-gray-600': '#252D4A',
        'ignite-gray-700': '#181C2A',
        'ignite-gray-800': '#0E1116',
      },
    },
  },
  plugins: [],
}
export default config
