import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  scaleRatio: 2,
  headerFontFamily: ['Avenir Next', 'sans-serif'],
  bodyFontFamily: ['Avenir Next', 'sans-serif'],
  headerWeight: 500,
  bodyWeight: 200,
  boldWeight: 'bold',
  overrideThemeStyles: ({ rhythm }, options) => ({
    'em,i': {
      fontFamily: '"Snell Roundhand", serif',
      fontWeight: 900,
      fontStyle: 'normal',
    },
  }),
})

export default typography
