export const hostname = 'http://sean-blanton.com:8080'

export const transition = `all 0.15s ease-in-out`

export const media = ['24rem', '32rem', '60rem'].map(
	b => `@media (min-width: ${b})`
)

const gray1 = '#2F3031'
const gray2 = '#333333'
const gray3 = '#999999'
const gray4 = '#D7D7D7'
const teal0 = '#d7eff1'
const teal1 = '#0ebcc7'
const teal2 = '#027077'
const indigo0 = '#F3E5FD'
const indigo1 = '#520093'
const indigo2 = '#8B00F3'

export const spacing = [0, 4, 8, 16, 24, 32, 48, 96, 128, 256, 320]

export const fontSize = {
	xxxl: '3.5em',
	xxl: '2.8em',
	xl: '2em',
	l: '1.414em',
	m: '1em',
	s: '0.875em',
	xs: '0.75em',
}

export const breakpoints = {
	small: media[0],
	medium: media[1],
	large: media[2],
}

export const fontFamily = {
	sansSerif:
		"-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	code:
		"Consolas, Monaco,'Lucida Console', 'Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace",
}

export const colors = {
	gray1,
	gray2,
	gray3,
	gray4,
	teal0,
	teal1,
	teal2,
	indigo0,
	indigo1,
	indigo2,
}

export const measure = {
	xs: '28ch',
	s: '45ch',
	m: '55ch',
	l: '65ch',
	xl: '75ch',
}
