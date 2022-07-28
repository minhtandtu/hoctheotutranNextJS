import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tạo 1 Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
     
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href ="/about">
            <a
              className={styles.card}
            >
              <h2>Tạo Page mới  &rarr;</h2>
              <p>
                Học cách tạo một page mới và liên kết nó với Home Page bằng {`<Link>`} tag
              </p>
            </a>
          </Link>
          <Link href="/tut_navi_footer">
            <a
              
              className={styles.card}
            >
              <h2>Tạo Navigation Menu và Footer &rarr;</h2>
              <p>
                Học cách tạo Navigation Menu và Footer trong NextJS
              </p>
            </a>
          </Link>
          <Link href="/tut_Layout">
          <a
            
            className={styles.card}
          >
            <h2>Tạo Layout Component  &rarr;</h2>
            <p>
              Học cách tạo một Layout Component và sử dụng nó cho tất cả các page
            </p>
          </a>
          </Link>
          <Link href="asdfasd">
          <a
            
            className={styles.card}
          >
            <h2>Tạo Page 404 Not Found  &rarr;</h2>
            <p>
              Học cách tạo một Page 404 khi người dùng gọi sai địa chỉ
            </p>
          </a>
          </Link>

          <Link href="/title_meta_link">
          <a className={styles.card}>
            <h2>Thiết lập Title, Icon, Meta trong  thẻ Head  &rarr;</h2>
            <p>
             Học thiết lập thể title, icon, meta trong NextJS
            </p>
          </a>
          </Link>
          <Link href="/tut_css">
            <a className={styles.card}>
              <h2>CSS trong NextJS &rarr;</h2>
              <p>
              Học sử dụng CSS trong NextJS
              </p>
            </a>
          </Link>
          <Link href="/tut_data_fetching">
          <a className={styles.card}>
            <h2>Rendering data bằng SSG  &rarr;</h2>
            <p>
             Học lấy data từ server xuất ra HTML gửi cho client bằng hàm getStaticProps
            </p>
          </a>
          </Link>
          <a
            href=""
            className={styles.card}
          >
            <h2>Tạo route động và xuất dữ liệu ra page động &rarr;</h2>
            <p>
             Học lấy data từ server bằng getStaticPaths và getStaticProps xuất ra HTML gửi cho page động
            </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Deploy 1 Web App  &rarr;</h2>
            <p>
             Học deploy web app lên vercel https://www.youtube.com/watch?v=mSR-g4CxkE8
            </p>
          </a>
          
          <a
            href="https://www.youtube.com/watch?v=mSR-g4CxkE8"
            className={styles.card}
          >
            <h2>Tạo 1 Web App bằng React và Tailwind CSS!  &rarr;</h2>
            <p>
             
            </p>
          </a>
          <div className={styles.division}>
           
          </div>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
