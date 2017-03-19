import React from 'react';
import cxs from 'cxs/monolithic';
import { spacing, measure} from '../config'
import View from './View';



const Placeholder = ({ children, title, ...props }) => {

  const cx = cxs({
    display: 'block',
    minHeight: title ? 22 : '1em',
    margin: 0,
    padding: 0,
    marginBottom: title ? 8 : 16,
    backgroundColor: '#F8F9FA',
    maxWidth: title ? measure.m : measure.l,
    transition: 'all .2s ease',
    animationDuration: '1.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'loadingShine',
    animationTimingFunction: 'linear',
    background: 'linear-gradient(to right, #EDEDED 8%, #F8F9FA 38%, #EDEDED 54%)',
    backgroundSize: '1000px 50px',

  });

  return (
    <div className={cx} {...props} />
  );
}

const TitlePlaceholder = (props) =>  <Placeholder title />;
const BodyPlaceholder = (props) => <View>
                                      <View mb={6}> <Placeholder /> <Placeholder /> <Placeholder /> </View>
                                      <View mb={6}> <Placeholder /> <Placeholder /> <Placeholder /> </View>
                                      <View mb={6}> <Placeholder /> <Placeholder /> <Placeholder /> </View>
                                      <View mb={6}> <Placeholder /> <Placeholder /> <Placeholder /> </View>
                                    </View>;
const DividerPlaceholder = (props) =>  <View> <Placeholder style={{maxWidth:spacing[6], minHeight: '4px'}} /> </View>;


module.exports = {
  TitlePlaceholder,
  BodyPlaceholder,
  DividerPlaceholder
}
