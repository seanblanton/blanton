import React from 'react';
import Paths from '../paths';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'
import View from './View';
import ArticleLink from './ArticleLink';
import { breakpoints, spacing } from '../config'
import { LabelSecondary } from './Text';


const prefixed = {

  container: prefixer({
    position: 'absolute',
    flexDirection: 'column',
    width: spacing[9],
    right: '5vw',
    top: spacing[9] - 32,
    display: 'none',
    [breakpoints.large]: {
        display: 'block',
      },
  }),
  link: prefixer({
    display: 'relative',
  })
}


const cx = {
  container: cxs(prefixed.container),
  link: cxs(prefixed.link),
}


const ViewMorePosts = ({ children, ...props }) => {
  return (
    <View className={cx.container}>
    <View pl={3}> <LabelSecondary> More Posts </LabelSecondary> </View>
        {
          Object.keys(Paths.getAllPosts()).map( (post, key)  =>
              Paths.getPathMeta(post))
                .map( (props, key) =>
                  <View className={cx.link}>
                  <ArticleLink key={key} title={props.title} date={props.published} file={props.includes.path} />
                  </View> )
        }
    </View>
  );
}


export default ViewMorePosts
