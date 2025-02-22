import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>在线拼图游戏</title>
        <meta name="description" content="免费在线拼图游戏" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <iframe 
          src="https://im-a-puzzle.com"
          className={styles.frame}
          allow="fullscreen"
        />
      </main>
    </div>
  )
}