import Head from 'next/head';
import getPosts from "../../helpers/getPosts";
import BlogPost from "../../components/BlogPost";

export default function Home({posts}) {
    return (

        <div>
            <Head>
                <title>ddozzi | Blog</title>            
            </Head>

            <main>
               <div className="h-fit">
                    <div className="pl-10 lg:pl-60 pt-28 font-pop text-3xl lg:text-5xl pb-5 lg:pb-10">Blog Posts</div>
               </div>

                <div className="px-10 lg:px-60">
                {posts.map((post) => (
                        <BlogPost
                        key={post.slug}
                        title={post.data.title}
                        date={post.data.date}
                        description={post.data.description}
                        slug={post.slug}
                        />
                    ))}
                </div>
               

                
            </main>
            
        </div>
        
    );
}

export const getStaticProps = () => {
    const posts = getPosts();
  
    return {
      props: {
        posts,
      },
    };
};