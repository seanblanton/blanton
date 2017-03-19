import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'

import Divider from '../components/Divider';
import {Title} from './Text';
import {TitlePlaceholder, DividerPlaceholder}  from './Placeholder';
import View from './View';
import { breakpoints, spacing } from '../config'


const prefixed = {
      title: prefixer({
        marginTop: spacing[3],
        marginBottom: spacing[3],
      }),

      divider: prefixer({
        display: 'inline-block',
        marginBottom: spacing[4],
        marginTop: spacing[3],
        [breakpoints.medium]: {
          marginTop: spacing[4],
          marginBottom: spacing[5],
        },
      })

    }

const cx = {
  title: cxs(prefixed.title),
  divider: cxs(prefixed.divider),
}


const PostHeader = ({ children, title, ...props }) => {
  return (
    <View>
      <View className={cx.title}>
      { title ? <Title maxSize="s"> {title} </Title> :  <TitlePlaceholder /> }
        <View className={cx.divider}>
         { title ? <Divider />  :  <DividerPlaceholder /> }
        </View>
      </View>

    </View>
  );
}


export default PostHeader
