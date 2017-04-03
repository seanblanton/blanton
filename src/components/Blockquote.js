import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'
import View from './View';
import { fontSizes, fontFamily, colors, measure} from '../config'


const Blockquote = ({ children, display='block', size, accent, title, center, bold, caps, pre, secondary, tracked, maxSize, ...props }) => {

  const prefixed = prefixer({
    display: display,
    fontSize: fontSizes[1] + '!important',
    lineHeight: 1.25,
    fontFace: fontFamily.sansSerif,
    fontWeight: bold ? 700 : 400,
    textAlign: center ? 'center' : null,
    margin: 0,
    padding: 0,
    letterSpacing: tracked ? '0.1em' : null,
    color: secondary ? colors.gray2 : colors.gray1,
    maxWidth: maxSize ? measure[maxSize] : null,
  });

  const cx = {
    list: cxs(prefixed),
  }

  return ( <View className={cx} {...props} children={children} /> );

}


export default Blockquote
