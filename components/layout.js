import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Blogchain.'
export const siteTitle = 'Blogchain @ IU'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />

      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/favicon.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/favicon.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (

        <div className={styles.backToHome}>
          <Link href="/posts/blog">
            <a>← Back to Blog</a>
          </Link>
        </div>

      )}

      <footer>
        <a
          href="https://github.com/jbenr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by jbenr
        </a>
      </footer>

    </div>
  )
}
