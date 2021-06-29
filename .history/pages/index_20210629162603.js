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
    </Layout>
  )
}

<style jsx>
{`

`}
</style>