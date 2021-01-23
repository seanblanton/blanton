import theme from "./theme";

const unit = 1.25;

const measure = {
  xs: "28ch",
  s: "45ch",
  m: "55ch",
  l: "65ch",
  xl: "75ch",
};

const scale = {
  xxsmall: 0.25,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 3,
  xxlarge: 4,
};

export default {
  unit,
  breakpoints: {
    small: `24em`,
    medium: `40em`,
    large: "56em",
  },
  borderRadius: {
    small: `${scale.small}rem`,
    medium: `${scale.medium}rem`,
    large: `${scale.large}rem`,
    xlarge: `${scale.xlarge}rem`, 
  },
  font: {
    family: {
      sans: "Raleway, -apple-system, system-ui, BlinkMacSystemFont, sans-serif",
      mono:
        "Consolas, Monaco,'Lucida Console', 'Liberation Mono', 'Monaco', monospace",
    },
    lineHeight: {
      header: 1.15,
      body: 1.5,
    },
    size: {
      small: `${scale.small}rem`,
      medium: `${scale.medium}rem`,
      large: `${scale.large}rem`,
      xlarge: `${scale.xlarge}rem`,
    },
    weight: {
      normal: 400,
      semi: 600,
      bold: 700,
    }
  },
  grid: {
    gap: `var(--grid-column-gap)`,
    columns: `var(--grid-template-columns)`,
    gridSection: `var(--grid-section)`,
  },
  measure,
  scale,
  spacing: Object.assign(
    {},
    ...(Object.keys(scale) as Array<keyof typeof scale>).map((n) => ({
      [n]: `${unit * scale[n]}rem`,
    }))
  ),
  color: theme,
};
