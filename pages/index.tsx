import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toy Box</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Toy Box</span>
        </h1>

        <div className={styles.grid}>
          <Link href="/stopwatch">
            <a className={styles.card}>
              <h2>Stopwatch &rarr;</h2>
              <p>simple stopwatch</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
