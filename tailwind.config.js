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

      'lg:text-right',
    ]
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
