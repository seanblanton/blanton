import Layout from "../components/Layout";
import { postsData } from "../utils/index.js";
import siteData from "../data/site.js";
import { default as externalPostData } from "../data/externalPosts.js";
import { Header } from "@/components";
import { About, BookList, PostList, Footer } from "@/components";
import { Post } from "../interfaces";
import { Grid, GridItem } from "@/system";
import Atoms from "@/system/atoms";

type Props = {
  posts: Post[];
};

const IndexPage = ({ posts }: Props) => (
  <Layout>
    <Grid columns={Atoms.grid.columns} gap={Atoms.grid.gap}>
      <GridItem span={5}>
        <Header>
          {siteData.title} — {siteData.role}
        </Header>
      </GridItem>

      <GridItem span={Atoms.grid.gridSection}>
        <PostList data={posts} />
      </GridItem>

      <GridItem span={Atoms.grid.gridSection}>
        <About />
      </GridItem>

      <GridItem span={Atoms.grid.gridSection}>
        <BookList />
      </GridItem>

      <GridItem span={6}>
        <Footer />
      </GridItem>
    </Grid>
  </Layout>
);

export default IndexPage;

export async function getStaticProps() {
  const internalPosts = Array.from(postsData.values());
  const externalPosts = externalPostData.map((post) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(post.date).toLocaleDateString(
      "en-IN",
      options
    );

    return {
      frontMatter: { ...post, date: formattedDate },
    };
  });

  const posts = [...internalPosts, ...externalPosts]
    .sort((a, b) => {
      return Number(
        new Date(b.frontMatter.date).getTime() -
          Number(new Date(a.frontMatter.date).getTime())
      );
    })
    .filter((post) => !post.frontMatter.private);

  return {
    props: { posts },
  };
}
