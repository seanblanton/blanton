import React from 'react';
import cxs from 'cxs/monolithic';
import { fontSizes, colors, measure} from '../config'


const Link = ({ children, label, accent, href, size=16, title, maxSize, ...props }) => {

  const cx = cxs({
    fontSize: fontSizes[size],
    lineHeight: title ? 1.25 : 1.5,
    textDecoration: 'none',
    margin: 0,
    padding: 0,
    color: accent ? colors.indigo2 : colors.gray1 ,
    maxWidth: maxSize ? measure[maxSize] : null,
    paddingBottm: 8,
    ':hover': {
      borderBottom: accent ? '4px solid' + colors.indigo2 : '4px solid' + colors.gray2,
    }
  });

  return (
    <a className={cx} {...props} href={href} alt={label}> {label} </a>
  );
}


export default Link
