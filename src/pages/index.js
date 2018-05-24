import React from 'react'
import { H4, Headline, Meta } from './../components/Text'
import { SecondaryLink, AccentLink } from './../components/StyledLink'
import styled from 'styled-components'

const PostSctionContainer = styled.div`
	margin-bottom: 1em;
`
const IndexPage = ({ data }) => (
	<div>
		<Headline>{data.site.siteMetadata.description}</Headline>
		{data.allMarkdownRemark.edges.map(
			({ node }, i) =>
				!node.frontmatter.private ? (
					<SecondaryLink key={node.id} to={node.fields.slug}>
						<PostSctionContainer>
							<H4> {node.frontmatter.title} </H4>
							<Meta> {node.frontmatter.date} </Meta>
						</PostSctionContainer>
					</SecondaryLink>
				) : null
		)}
	</div>
)

export default IndexPage

export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						private
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
