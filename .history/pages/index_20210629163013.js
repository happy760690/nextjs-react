// import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[这是我的自我介绍，巴拉巴拉.....]</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  )
}

<style jsx>
{`

`}
</style>