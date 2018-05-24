import React from 'react'
import styled from 'styled-components'
import { H1, H4, H5, H6 } from './../components/Text.js'
import { SecondaryLink } from './../components/StyledLink.js'
import { MarkdownBody } from './../components/MarkdownBody.js'

const PostTitleSection = styled.div`
	padding: 4em 0;
`

const HeaderSection = styled.div`
	padding: 1em 0;
`

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<div>
			<HeaderSection>
				<SecondaryLink to="/">
					<H6> {data.site.siteMetadata.title} </H6>
				</SecondaryLink>
			</HeaderSection>
			<PostTitleSection>
				<H1>{post.frontmatter.title}</H1>
				<H6> {post.frontmatter.date} </H6>
			</PostTitleSection>
			<MarkdownBody dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

export const query = graphql`
	query PostQuery($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
			}
		}
	}
`
