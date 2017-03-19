import React from 'react';
import cxs from 'cxs/monolithic';
import { fontSizes, fontFamily, colors, measure} from '../config'


const Text = ({ children, display='block', size, accent, title, center, bold, caps, pre, secondary, tracked, maxSize, ...props }) => {

  const cx = cxs({
    display: display,
    fontSize: fontSizes[size],
    lineHeight: title ? 1.25 : 1.7,
    fontFace: pre ? fontFamily.code : fontFamily.sansSerif,
    fontWeight: bold ? 700 : 400,
    textAlign: center ? 'center' : null,
    textTransform: caps ? 'uppercase' : null,
    margin: 0,
    padding: 0,
    letterSpacing: tracked? '0.1em' : null,
    color: secondary ? colors.gray2 : colors.gray1,
    maxWidth: maxSize ? measure[maxSize] : null,

  });

  return (
    <div className={cx} {...props}> {children} </div>
  );
}

const Title = (props) =>  <Text {...props} size={2} title />;
const PullQuote = (props) => <Text {...props} size={1} title maxSize="m" />;
const TitleSecondary = (props) => <Title {...props} secondary />;
const Paragraph = (props) => <Text {...props} size={4} />;
const Accent = (props) => <Text {...props} display="inline-block" accent />;
const ParagraphSecondary = (props) => <Text {...props} size={4} secondary/>;
const Label = (props) => <Text {...props} size={5} caps tracked bold/>;
const LabelSecondary = (props) => <Text {...props} size={5} caps tracked bold secondary/>;


module.exports = {
  Text,
  Title,
  PullQuote,
  TitleSecondary,
  Paragraph,
  Accent,
  ParagraphSecondary,
  Label,
  LabelSecondary
}
