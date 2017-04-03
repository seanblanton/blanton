import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static';

import { breakpoints, spacing } from '../config'
import Close from './Close';
import Footer from './Footer';
import PostHeader from './PostHeader';
import View from './View';

const prefixed = {
      close: prefixer({
        paddingTop: spacing[4],
        paddingBottom: spacing[4],
        paddingLeft: spacing[4],
        [breakpoints.medium]: {
          padding: spacing[5],
        },
      }),
      body: prefixer({
        paddingLeft: spacing[5],
        paddingRight: spacing[5],
        [breakpoints.small]: {
          paddingLeft: spacing[6],
          paddingRight: spacing[6],
        },
        [breakpoints.medium]: {
          paddingLeft: spacing[7],
          paddingRight: spacing[7],
        },
        [breakpoints.large]: {
          paddingLeft: spacing[8],
          paddingRight: spacing[8],
        }
      }),
      footer: prefixer({
        marginTop: spacing[7],
        marginBottom: spacing[6],
      })
    }

  const cx = {
    close: cxs(prefixed.close),
    body: cxs(prefixed.body),
    footer: cxs(prefixed.footer),
  }

class Post extends React.Component {

  constructor() {
    super();
    this.state = {
      markdown: null,
    };
  }

  componentDidMount() {
    document.title = "Sean Blanton | 404 Not Found";
  };

  render() {
    return (
        <View flexAuto>
          <View className={cx.close}> <Close href="/" /> </View>
          <View className={cx.body}>
            <PostHeader title="Not Found" />
            <View className={cx.footer}><Footer/></View>
          </View>
        </View>
    );
  }
}


export default Post;

