import * as React from "react";
import { Post } from "../interfaces";
import { H3, Link, Grid, P } from "@/system";
import { GridSection } from "@/components";

type Props = {
	data: Post[];
};

const PostList = ({ data: posts }: Props) => (
	<GridSection title="Writing">
		<Grid>
			{posts.map(({ slug, frontMatter: { title, excerpt, url } }) => {
				if (url) {
					return (
						<div key={title}>
							<Link href={url}>
								<Grid>
									<H3>{title}</H3>
									<P>{excerpt}</P>
								</Grid>
							</Link>
						</div>
					);
				} else {
					return (
						<div key={slug}>
							<Link as={`/blog/${slug}`} href={`/blog/${slug}`}>
								<Grid>
									<H3> {title}</H3>
									<P>{excerpt}</P>
								</Grid>
							</Link>
						</div>
					);
				}
			})}
		</Grid>
	</GridSection>
);

export default PostList;
