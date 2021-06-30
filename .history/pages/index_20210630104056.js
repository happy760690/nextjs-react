import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Glitr. I'm a software enginer and a translator(English/Japanese). You can contact me on Twitter</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
        <Alert type="error">alert组件的内容</Alert>
        <Link href='/posts/first-post'>
          <a>我的文章</a>
        </Link>
      </section>
    </Layout>
  )
}

<style jsx>
{`

`}
</style>