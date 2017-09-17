import React, { Component } from "react";
import Container from "./../components/Container"
import Header from './../components/Header'
import PostList from './../components/PostList'
import { initGA, logPageView } from './../util/'

class Index extends Component {

  componentDidMount() {
    document.title = "Sean Blanton ";
    initGA()
    logPageView()
  }

  render() {
     return (
        <Container>
        	<Header />
        	<PostList post={this.props.posts} />
        </Container>
     );
   }
 }

Index.getInitialProps = async function() {
	const posts = await PostList.fetch();
	return {
		posts: posts,
		debug: {
			disabled: true,
			size: 16,
			color: 'blue',
			outline: true
		}
	};
};



export default Index;
