import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'

import View from './View';
import { spacing, measure } from '../config'

const prefixed = {
      list: prefixer({
        maxWidth: measure['l'],
        paddingTop: spacing[5],
        paddingBottom: spacing[5],
      }),
    }

const cx = {
  list: cxs(prefixed.list),
}

const List = ({ children, ...props }) => {
  return (
    <View className={cx.list} {...props}>
      <ul> {children} </ul>
    </View>
  );
}

export default List
