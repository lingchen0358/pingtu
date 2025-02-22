import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>在线拼图游戏 - 免费好玩的拼图游戏平台</title>
        <meta name="description" content="免费在线拼图游戏，提供多种难度的拼图挑战，适合所有年龄段的玩家。包含拼图技巧、攻略和教程。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>在线拼图游戏</h1>
        <nav className={styles.nav}>
          <a href="#tutorial">新手教程</a>
          <a href="#tips">拼图技巧</a>
          <a href="#about">关于我们</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.leftContent}>
          <section className={styles.tutorial} id="tutorial">
            <h2>新手教程</h2>
            <div className={styles.contentBox}>
              <h3>如何开始游戏</h3>
              <ol>
                <li>选择您喜欢的图片</li>
                <li>设置难度级别（推荐新手从简单开始）</li>
                <li>点击开始游戏</li>
              </ol>
              
              <h3>基础操作说明</h3>
              <ul>
                <li>点击并拖动拼图块</li>
                <li>双击可以旋转拼图</li>
                <li>右键可以查看原图</li>
              </ul>
            </div>
          </section>

          <section className={styles.tips} id="tips">
            <h2>拼图技巧</h2>
            <div className={styles.contentBox}>
              <h3>专业玩家建议</h3>
              <ul>
                <li>先完成边框拼图</li>
                <li>按照颜色分类拼图块</li>
                <li>注意图案的连续性</li>
                <li>从显著特征开始拼起</li>
              </ul>
            </div>
          </section>
        </div>

        <div className={styles.gameContainer}>
          <iframe 
            src="https://im-a-puzzle.com"
            className={styles.frame}
            allow="fullscreen"
          />
        </div>

        <div className={styles.rightContent}>
          <section className={styles.about} id="about">
            <h2>关于我们</h2>
            <div className={styles.contentBox}>
              <p>我们致力于为玩家提供优质的在线拼图游戏体验。所有游戏都经过精心挑选，确保适合不同年龄段的玩家。</p>
              <p>如有任何问题或建议，欢迎联系我们：contact@example.com</p>
            </div>
          </section>

          <section className={styles.privacy}>
            <h2>隐私政策</h2>
            <div className={styles.contentBox}>
              <p>我们重视您的隐私，承诺保护您的个人信息。详细政策请点击查看完整的<a href="/privacy">隐私政策</a>。</p>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 在线拼图游戏. 保留所有权利.</p>
      </footer>
    </div>
  )
}
