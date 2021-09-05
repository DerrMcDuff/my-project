module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {  
    extend: { 
      backgroundColor: theme => ({
        'primary': '#FAF9F7'
      })
    },
    fontFamily: {
      'title': ['Optima'],
      'body': ['Merge One']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
