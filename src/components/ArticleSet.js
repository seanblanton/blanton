import React from 'react';
import Paths from '../paths';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'
import View from './View';
import ArticleLink from './ArticleLink';
import { breakpoints } from '../config'

const prefixed = prefixer({
    position: 'relative',
    textDecoration: 'none',
    float: 'left',
    maxWidth: '384px',
    overflow: 'visible',
    [breakpoints.small]: {
      width: '100%',
    },
    [breakpoints.medium]: {
      width: '50%',
      height: '113px',
    },
    [breakpoints.large]: {
      width: '33.32%',
    },
})

const cx = cxs(prefixed);

const ArticleSet = ({ children, ...props }) => {
  return (
    <View pb={5}>
        {
          Object.keys(Paths.getAllPosts()).map( (post, key)  =>
              Paths.getPathMeta(post))
                .map( (props, key) =>
                  <View key={key} className={cx}>
                  <ArticleLink
                    key={key}
                    title={props.title}
                    date={props.published}
                    datePath={Paths.getDateObjectForPublishedDate(props.published)}
                    file={props.includes.path}
                  />
                  </View>)
        }
    </View>
  );
}

export default ArticleSet


