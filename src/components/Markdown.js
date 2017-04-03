import React from 'react';
import MTRC from 'markdown-to-react-components';

import Blockquote from './Blockquote';
import Link from './Link'
import View from './View';
import Code from './Code';
import List from './List';

import { Title, PullQuote, TitleSecondary, Paragraph }  from './Text';


MTRC.configure({
  h1: React.createClass({
    render() {
      return <Title id={this.props.id} maxSize="s"> {this.props.children} </Title>
    }
  }),
  h2: React.createClass({
    render() {
      return <View m={5} maxWidth="xl"> <PullQuote id={this.props.id} maxSize="l"> {this.props.children} </PullQuote></View>
    }
  }),
  h3: React.createClass({
    render() {
      return <View mt={5} mb={5}> <TitleSecondary id={this.props.id} maxSize="s">  {this.props.children} </TitleSecondary></View>
    }
  }),
  h4: React.createClass({
    render() {
      return <View mb={3} maxWidth="l"> <Paragraph id={this.props.id} maxSize="l" bold> {this.props.children} </Paragraph></View>
    }
  }),
  p: React.createClass({
    render() {
      return <View mb={3}> <Paragraph id={this.props.id} maxSize="l"> {this.props.children} </Paragraph></View>
    }
  }),
  a: React.createClass({
    render() {
      return <Link href={this.props.href} label={this.props.children} accent />
    }
  }),
  blockquote: React.createClass({
    render() {
      return <Blockquote> {this.props.children} </Blockquote>
    }
  }),
  ul: React.createClass({
    render() {
      return <List> {this.props.children } </List>
    }
  }),
  code: React.createClass({
    render() {
      return  <View mt={5} mb={5}>  <Code maxSize="l" language={this.props.language} code={this.props.code} /> </View>
    }
  }),
  codespan: React.createClass({
    render() {
      return  <span style={{ backgroundColor: '#E2E9F0', padding: '4px', marginLeft: '4px', marginRight:'4px' }}> {this.props.children } </span>
    }
  })
});


const Markdown = ({ file }) => {
  return ( <main> {  file ? MTRC('' + file).tree : "" } </main> );
}


export default Markdown;
