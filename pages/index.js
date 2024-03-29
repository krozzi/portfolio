import Head from 'next/head';
import styles from '../public/css/Cursor.module.css';
import BlogPost from "../components/BlogPost";
import getPosts from "../helpers/getPosts";
import { DateTime } from 'luxon';
import Link from 'next/link';

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
                        ddozzi
                    </h1>

                    <p className="py-8 font-spage text-xl">
                        programmer • gamer • student
                    </p>
                  </div>
              </div>
            </div>

          <div>
              <section id="aboutme">

                <div className="scroll-smooth bg-base-100 text-left pt-16 lg:pt-24 lg:pl-24 lg:text-left">
                  <div className="text-2xl lg:text-4xl pl-8 lg:pl-0 font-semibold font-pop lg:pb-4 pb-4 primary-gradient">
                    ./about/me
                  </div>

                  <div className="text-lg pl-8 lg:pl-0 lg:text-xl font-regular font-spage lg:pb-24 pb-16 px-6 lg:px-0  lg:pr-8">
                  I&apos;m a self-taught programmer with some experience in both frontend and backend development. By no means am I a &ldquo;pro&rdquo;, but I am pretty decent. I&apos;m only a highschool student, so there&apos;s still so much left to learn. I love playing video games, so if you wanna play, let me know!
                  </div>
                </div>
                
              </section>


              <section id="tech">
                  <div className="scroll-smooth bg-base-200 text-left pt-16 lg:pt-24 lg:pl-24 lg:text-left">
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
                            <li className="tech-block">Kotlin</li>
                            <li className="tech-block">R</li>
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
                            <li className="tech-block">PyCord</li>
                            <li className="tech-block">DiscordPY</li>
                            <li className="tech-block">JavaCord</li>
                            <li className="tech-block">Discord4J</li>
                            <li className="tech-block">JDA</li>
                            <li className="tech-block">MineFlayer</li>

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
                        Latest posts from a blog i update every 10 years.
                      </div>
                      <div className="pr-12 lg:pb-24 pb-16 pl-8 lg:pl-0">
                        {posts.map((post) => (
                          <BlogPost
                          key={post.slug}
                          title={post.data.title}
                          date={post.data.fullDate}
                          description={post.data.description}
                          slug={post.slug}
                          />
                      ))}
                      <div className="font-regular font-spage text-xl">
                  ...alternatively, <div className="btn btn-outline border-blue-500 btn-sm font-pop text-blue-400"><Link href="/blog">view all blog posts</Link></div>
                  </div>
                  </div> 
              </div>
            </section>

            {/* <section id="contact">

                <div className="bg-base-200 h-screen">




                </div>


            </section> */}
            
        </main>

      </div>
  );
  
}

export const getStaticProps = () => {
  const posts = getPosts().slice(0,2).sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.data.date, 'm-d-yyyy')
    const afterDate = DateTime.fromFormat(b.data.date, 'm-d-yyyy')
    return afterDate - beforeDate
  })
  return {
    props: {
      posts,
    },
  };
};


