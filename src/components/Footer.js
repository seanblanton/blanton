import React from 'react';
import { LabelSecondary } from './Text';
import View from './View';
import Link from './Link';
import data from '../data';

const Footer = ({ children, ...props }) => {
  return (
    <View display='block' clear='both'>
      <View mb={3}>
        <LabelSecondary> How To Get In Touch </LabelSecondary>
      </View>
      <View>
      {(data.links).map( (l, index) => <View display='inline-block' pr={3} key={index} >
                                <Link label={l.name} href={l.href} />
                              </View>)}
      </View>
    </View>
  );
}

export default Footer

