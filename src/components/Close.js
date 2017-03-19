import React from 'react';
import cxs from 'cxs/monolithic';
import { colors } from '../config';
import View from './View';


const Close = ({ children, href, ...props }) => {

  const cx = {
    container: cxs({
    display: 'block',
    fill: colors.gray2
  }),
    svg: cxs({
      fill: colors.gray2,
      ':hover': {
        fill: colors.gray1
      },
    })
};

  return (
    <View maxHeight="32px">
    <a className={cx.container} {...props} href={href} style={{ maxHeight:'32px' }}>
      <svg className={cx.svg} width="32" height="32" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M16,14.5857864 L6.10050506,4.6862915 L4.6862915,6.10050506 L14.5857864,16 L4.6862915,25.8994949 L6.10050506,27.3137085 L16,17.4142136 L25.8994949,27.3137085 L27.3137085,25.8994949 L17.4142136,16 L27.3137085,6.10050506 L25.8994949,4.6862915 L16,14.5857864 Z"/>
      </svg>
    </a>
    </View>
  );
}


export default Close
