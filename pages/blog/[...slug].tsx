import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { Atoms } from "@/system";
import postsData from "../../utils/index.js";
import { Header, Layout, Footer } from "@/components";
import { Grid, GridItem } from "@/system";
import siteData from "../../data/site.js";
import { components as AllComponents } from "@/system/DesignSystemProvider";
import styled from "@emotion/styled";

const Page = styled.article`
	max-width: calc(var(--font-size) * 48);
`;

const components = AllComponents;

export default function Post({ source, frontMatter }: any) {
	const content = hydrate(source, { components });

	return (
		<>
			<Head>
				<title>
					{siteData.title} — {frontMatter.title}
				</title>
			</Head>

			<Layout showTitle={true}>
				<Page>
					<Grid columns={Atoms.grid.columns} gap={Atoms.grid.gap}>
						<GridItem span={6}>
							<Header>{frontMatter.title}</Header>
						</GridItem>
						<GridItem span={6}>{content}</GridItem>
						<GridItem span={6}>
							<Footer />
						</GridItem>
					</Grid>
				</Page>
			</Layout>
		</>
	);
}

export const getStaticPaths = async () => {
	const paths = Array.from(postsData.values()).map((post) => {
		return {
			params: {
				slug: post.slug.split("/"),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }: any) {
	const postKey = params.slug.join("/");
	const source = postsData.get(postKey);
	const { data, content } = matter(source);

	const mdxSource = await renderToString(content, {
		components,
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: source.frontMatter,
		},
	};
}
