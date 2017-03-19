import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'

import ArticleSet from './ArticleSet';
import Footer from './Footer';
import Header from './Header';
import View from './View';

import { breakpoints, spacing } from '../config'

const prefixed = {
  footer: prefixer({
    clear: 'both',
    paddingTop: spacing[6],
    paddingBottom: spacing[6],
    paddingLeft: spacing[3],
    paddingRight: spacing[3],
}),
  view: prefixer({
    clear: 'both',
    paddingTop: spacing[7],
    paddingBottom: spacing[7],
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
    [breakpoints.small]: {
       paddingLeft: spacing[5],
       paddingRight: spacing[5],
   },
   [breakpoints.medium]: {
       paddingLeft: spacing[6],
       paddingRight: spacing[6],
   },
   [breakpoints.large]: {
       paddingLeft: spacing[7],
       paddingRight: spacing[7],
   }
})
}

const cx = {
  footer: cxs(prefixed.footer),
  view: cxs(prefixed.view)
}

class Home extends React.Component {
    render() {
        return (
          <View className={cx.view}>
            <Header />
            <ArticleSet/>
            <View className={cx.footer}>
                <Footer />
            </View>
          </View>
        );
    }
}


export default Home;

