
export const media = [
  '32rem',
  '40rem',
  '70rem'
].map(b => `@media (min-width: ${b})`)

const gray1 = '#2F3031';
const gray2 = '#72777A';
const teal1 = '#00738E';
const teal2 = '#00BCD5';
const indigo1 = '#520093';
const indigo2 = '#8B00F3';

export const spacing = [
  0,
  4,
  8,
  16,
  24,
  32,
  48,
  96,
  128,
  256,
  320
]

export const fontSizes = [
  '3em',
  '2em',
  '1.5em',
  '1.25em',
  '1em',
  '0.875em'
]

export const breakpoints = {
  small: media[0],
  medium: media[1],
  large: media[2]
}

export const fontFamily = {
  sansSerif: "-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  code: "Consolas, Monaco,'Lucida Console', 'Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace"
}

export const colors = {
  gray1, gray2, teal1, teal2, indigo1, indigo2
}

export const measure = {
  xs: '28ch',
  s: '45ch',
  m: '55ch',
  l: '65ch',
  xl: '75ch',
}

