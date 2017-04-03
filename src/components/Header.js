import React from 'react';
import {Title, Paragraph, ParagraphSecondary, Label} from './Text';
import View from './View';
import data from '../data';

const Header = ({ children, ...props }) => {
  return (
    <View p={3} mb={5} flexAuto>
      <View mb={3}>
        <Title> {data.name} </Title>
        <Paragraph> {data.title} </Paragraph>
      </View>
      <View mb={3}>
        <ParagraphSecondary maxSize="s"> {data.bio} </ParagraphSecondary>
      </View>
      <Label> {data.location} </Label>
    </View>
  );
}

export default Header
