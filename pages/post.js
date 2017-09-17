import React, { Component } from "react";
import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import { initGA, logPageView, spaceToDash } from './../util/'
import { hostname } from './../config';
import Container from "./../components/Container"
import Header from './../components/Header'
import Body from './../components/Body'

class Post extends Component {
  componentDidMount() {
    document.title = "Sean Blanton | " + this.props.title;
    initGA()
    logPageView()
  }
  render( ...props ) {
    return (
      <Container>
        <Header />
        <Body {...this.props} />
      </Container>
    )
  }
 }

Post.getInitialProps = async function(context) {
	const { title } = context.query;
	const formattedTitle = spaceToDash(title).toLowerCase();
	const res = await fetch(`${hostname}/api/posts/${formattedTitle}`);
	const post = await res.json();

	return {
		title: post.data.title,
		date: post.data.date,
		body: post.data.body
	};
};

export default Post