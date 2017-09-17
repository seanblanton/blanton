'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hostname = exports.hostname = "http://localhost:3000";

var media = exports.media = ['32rem', '40rem', '70rem'].map(function (b) {
  return '@media (min-width: ' + b + ')';
});

var gray1 = '#2F3031';
var gray2 = '#72777A';
var gray3 = '#F7F7F7';
var teal1 = '#00738E';
var teal2 = '#00BCD5';
var indigo1 = '#520093';
var indigo2 = '#8B00F3';

var spacing = exports.spacing = [0, 4, 8, 16, 24, 32, 48, 96, 128, 256, 320];

var fontSizes = exports.fontSizes = ['3em', '2em', '1.5em', '1.25em', '1em', '0.875em'];

var breakpoints = exports.breakpoints = {
  small: media[0],
  medium: media[1],
  large: media[2]
};

var fontFamily = exports.fontFamily = {
  sansSerif: "-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  code: "Consolas, Monaco,'Lucida Console', 'Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace"
};

var colors = exports.colors = {
  gray1: gray1, gray2: gray2, gray3: gray3, teal1: teal1, teal2: teal2, indigo1: indigo1, indigo2: indigo2
};

var measure = exports.measure = {
  xs: '28ch',
  s: '45ch',
  m: '55ch',
  l: '65ch',
  xl: '75ch'
};