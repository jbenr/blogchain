import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Blogchain@IU</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><a class="a" href="#">Home</a></li>
                <li><a class="a" href="https://blogchain.vercel.app/">Blog</a></li>
                <li><a class="a" href="#">Calendar</a></li>
                <li><a class="a" href="#">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className={utilStyles.headingMd}>
        <p>Welcome to Blogchain @ IU</p>
        <p>
          This is our blog - in light of Covid-19 and in order to do our part in socially distancing, we'll be using this as our virtual discussion board in place of in person Blockchain @ IU meetings.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a class="link">{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}