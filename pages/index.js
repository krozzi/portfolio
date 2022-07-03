import Head from 'next/head';
import styles from '../public/css/Cursor.module.css';
import BlogPost from "../components/BlogPost";
import getPosts from "../helpers/getPosts";
// import { getStaticProps } from './blog';
export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
export default function Home({posts}) {
  return (
          <div>
        <Head>
            <title>ddozzi</title>            
        </Head>

        <main>
            <div className="hero h-screen bg-base-200">
              <div className="hero-content text-center">
                  <div className="max-w-md">
                    <p className="py-8 font-spage text-3xl">
                        hey, i&apos;m
                    </p>


                    <h1 className="overflow-hidden text-7xl lg:text-9xl font-extrabold font-pop text-blue-500 ">
                        <span className="relative">
                        <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent leading-3 drop-shadow-xl">
                        ddozzi
                        </span>
                        <span className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-base-200 w-full animate-type will-change`}></span>
                        </span>
                    </h1>

                    <p className="py-8 font-spage text-xl">
                        programmer • gamer • student
                    </p>
                  </div>
              </div>
            </div>

          <div>
              <section id="aboutme">

                <div className="bg-base-100 text-left pt-16 lg:pt-24 lg:pl-24 lg:text-left">
                  <div className="text-2xl lg:text-4xl pl-8 lg:pl-0 font-semibold font-pop lg:pb-4 pb-4 primary-gradient">
                    ./about/me
                  </div>

                  <div className="text-lg pl-8 lg:pl-0 lg:text-xl font-regular font-spage lg:pb-24 pb-16 px-6 lg:px-0  lg:pr-8">
                  I&apos;m a self-taught programmer with some experience in both frontend and backend development. By no means am I a &ldquo;pro&rdquo;, but I am pretty decent. I&apos;m only a highschool student, so there&apos;s still so much left to learn. I love playing video games, so if you want to play together, hit me up!
                  </div>
                </div>
                
              </section>


              <section id="tech">
                  <div className="bg-base-200 text-left pt-16 lg:pt-24 lg:pl-24 lg:text-left">
                    <div className="text-2xl lg:text-4xl font-semibold font-pop pl-8 lg:pl-0 lg:pb-4 pb-4 primary-gradient">
                      ./about/tech
                    </div>

                    <div className="text-lg lg:text-xl font-regular font-spage px-6 lg:px-0 pl-8">
                      Heres a list of the languages and tools I know how to use!
                    </div>

                    <div className="pl-8 lg:pl-0 w-fit">

                        <div className='pt-8'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Languages
                          </div>
                          <ul className="flex flex-wrap font-spage gap-2">

                            <li className="tech-block">Python 3</li>
                            <li className="tech-block">Java</li>
                            <li className="tech-block">C#</li>
                            <li className="tech-block">JavaScript</li>
                            <li className="tech-block">TypeScript</li>
                            
                          </ul>
                        </div>

                        <div className='pt-8'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Frameworks
                          </div>
                          <ul className="flex flex-wrap gap-2 font-spage">

                            <li className="tech-block">SpongePowered Mixins</li>
                            <li className="tech-block">NextJS</li>
                            <li className="tech-block">TailwindCSS</li>
                            <li className="tech-block">Flask</li>
                            <li className="tech-block">Django</li>
                            <li className="tech-block">TensorFlow</li>
                            <li className="tech-block">Keras</li>
                            <li className="tech-block">PyTorch</li>
                            <li className="tech-block">MC Forge 1.8.9/1.12</li>
                            <li className="tech-block">MCP 1.8.9/1.12/1.15.1</li>
                            <li className="tech-block">ASM</li>

                          </ul>
                        </div>

                        <div className='pt-8'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Tools
                          </div>
                          <div className="flex flex-wrap gap-2 font-spage">
                            <div className="tech-block">git</div>
                            <div className="tech-block">npm</div>
                            <div className="tech-block">yarn</div>
                            <div className="tech-block">pip</div>
                            <div className="tech-block">Gradle</div>
                            <div className="tech-block">Apache Maven</div>
                            <div className="tech-block">NodeJS</div>
                          </div>
                        </div>

                        <div className='pt-8'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Software
                          </div>
                          <ul className="flex flex-wrap gap-2 font-spage">
                            <li className="tech-block">VSCode</li>
                            <li className="tech-block">IntellJ</li>
                            <li className="tech-block">Atom</li>
                            <li className="tech-block">PyCharm</li>
                            <li className="tech-block">NetBeans</li>
                            <li className="tech-block">Jupyter</li>
                            <li className="tech-block">Figma</li>
                          </ul>
                        </div>

                        <div className='pt-8'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Topics & Knowledge
                          </div>
                          <ul className="flex flex-wrap gap-2 font-spage">
                            <li className="tech-block">Machine Learning</li>
                            <li className="tech-block">Data Structures & Algs.</li>
                            <li className="tech-block">Video Game Modding</li>
                            <li className="tech-block">Code Injection</li>
                          </ul>
                        </div>

                        <div className='pt-8 pb-16 lg:pb-24'>
                          <div className="text-xl font-bold font-spage pb-3">
                            Other stuff
                          </div>
                          <ul className="flex flex-wrap gap-2 font-spage">
                            <li className="tech-block">Linux</li>
                            <li className="tech-block">MacOS</li>
                            <li className="tech-block">Windows</li>
                          </ul>
                        </div>

                      </div>
                </div>
              </section>
            </div>

            <section>

            <div className="bg-base-100 text-left pt-16 lg:pt-24 lg:pl-24 lg:text-left">
                    <div className="text-2xl lg:text-4xl font-semibold font-pop pl-8 lg:pl-0 lg:pb-4 pb-4 primary-gradient">
                      ./about/blog
                    </div>
                    <div className="text-lg lg:text-xl font-regular font-spage px-6 lg:px-0 pl-8">
                      Random posts from a blog i update every 10 years.
                    </div>
                    <div className="pr-12 lg:pb-24 pb-16 pl-8 lg:pl-0">
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
            </div>

            </section>
            
        </main>

      </div>
  );
  
}
