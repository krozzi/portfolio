import { MDXRemote } from "next-mdx-remote";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

function Post({ data, content }) {
  return (
    <div>
        <Head>
            <title>ddozzi | {data.title}</title>
        </Head>
        <div className="w-full px-6 pt-8 pb-32 mx-auto xl:text-lg 2xl:text-xl max-w-prose 2xl:max-w-6xl">
            <div className="font-bold text-6xl pt-24 pb-4 font-pop">{data.title}</div>
            <time className="text-gray-500 italic font-spage">{data.date}</time>
            <p className="prose mt-12 font-spage">
            <MDXRemote {...content} />
        </p>
        </div>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};