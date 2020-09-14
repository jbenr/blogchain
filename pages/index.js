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
        <title>Blockchain@IU</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={utilStyles.headingMd}>
      <Link href="posts/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="posts/calendar">
        <a>Calendar</a>
      </Link>
      <div className={utilStyles.aboutSection}>
        <h3><span>About</span></h3>
        <p className={utilStyles.aboutText}>We are a collegiate organization dedicated to sharing knowledge about blockchain and cryptocurrency. Throughout the year, we do events, case competitions, a weekly blog, host courses and more—our goal is to educate the community about Blockchain's ability to create value in society and bring about positive social change, and its potential to disrupt industries across the business world in the future. We are Blockchain@IU.</p>
      </div>
      <h3><span>Upcoming Events</span></h3>
      <div className={utilStyles.event}>
        <h3>Blockchain 101</h3>
        <p>Description of this event here Description of this event here Description of this event here Description of this event here </p>
        <p><b>Date:</b> September 15, 2020</p>
        <p><b>Location: </b>Zoom - url here</p>
      </div>
      <h3><span>Follow Us:</span></h3>
      <a href="https://linktr.ee/blockchainIU" target="_blank">
        <img src="/linkIcon.png"
             style={{ width: '20rem', height: '3rem', marginBottom: "1rem"}} />
      </a>
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
