import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static'
import { Paragraph } from './Text';
import View from './View';
import Datestamp from './Datestamp';
import { spacing, colors } from '../config'
import { Link } from 'react-router'
import Paths from '../paths';

const prefixed = {
  link: prefixer({
    position: 'relative',
    textDecoration: 'none',
    padding: spacing[3],
    marginBottom: spacing[3],
    paddingRight: spacing[4],
    float: 'left',
    maxWidth: '384px',
    ':before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 16,
        top: 10,
        height: '4px',
        width: 0,
        transition: 'width 0s ease, background .35s cubic-bezier(1, 0, 0, 1)',
    },
    ':after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 16,
        top: 10,
        height: '4px',
        width: 0,
        background: colors.teal2,
        transition: 'width .35s cubic-bezier(1, 0, 0, 1)',
    },
    ':hover:before, :active:before, :focus:before': {
        width: '10vw',
        background: colors.teal2,
        transition: 'width .35s cubic-bezier(1, 0, 0, 1)',
    },
    ':hover:after, :active:after, :focus:after': {
        width: '10vw',
        background: 'transparent',
        transition: 'all .35s cubic-bezier(1, 0, 0, 1)',
    }
  }),
};

const cx = {
  link: cxs(prefixed.link),
}



const ArticleLink = ({ children, title, date, datePath, file, ...props }) => {
    console.log(Paths.getPathForTitleWithDate(title, datePath));
  return (
    <Link to={Paths.getPathForTitleWithDate(title, datePath)}>
      <View className={cx.link}>
        <View>
          <Paragraph> {title} </Paragraph>
        </View>
        <View mt={1}>
          <Datestamp date={date} />
        </View>
      </View>
    </Link>
  );
}

export default ArticleLink



