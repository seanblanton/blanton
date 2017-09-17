import chroma from 'chroma-js';
import moment from 'moment';
import ReactGA from 'react-ga';

export const is = n => n !== undefined && n !== null
export const isNum = n => { return !isNaN(parseFloat(n)) && isFinite(n); }
export const isArr = a => { return Array.isArray(a) ? a : [a]; }
export const px = n => { return typeof n === 'number' ? n + 'px' : n; }
export const alpha = (c, val) => { return chroma(c).alpha(val).css(); }
export const isNeg = n => { return n < 0; }

export const randomColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

export const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export const toDash = (str) => {
  return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

export const parseProps = (props) => {
	let styleObj = {};
	Object.keys(props).forEach((key) => {
				styleObj[toDash(key)] = `${props[key]}`;
			}
	)
	return styleObj
}

export const trimStr = (string) => {
  return string.replace(/\s+/g, '');
}

export const spaceToDash = (string) => {
  return string.replace(/\s+/g, '-');
}

export const initGA = () => {
  ReactGA.initialize('UA-29141738-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
