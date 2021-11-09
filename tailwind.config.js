module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    safelist: [
      'bg-blue-500',
      'text-center',
      'hover:opacity-100',
      'text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20',

      'lg:text-right',
    ]
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
