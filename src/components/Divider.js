import React from 'react';
import cxs from 'cxs/monolithic';
import { breakpoints, spacing, colors} from '../config'


const Divider = ({ children, color, ...props }) => {

  const cx = cxs({
    backgroundColor: color ? color : colors.teal2,
    height: 4,
    width: spacing[5],
    [breakpoints.small]: {
      width: spacing[6],
    },
  });

  return (
    <div className={cx} />
  );
}


export default Divider
