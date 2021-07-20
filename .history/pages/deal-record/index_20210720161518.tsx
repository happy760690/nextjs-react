/*
 * @Name: 买房故事列表页
 * @Description: 买房故事列表页
 * @Author: Mingjuan
 * @Date: 2021-07-16 16:15:00
 * @Editors: Mingjuan
 */
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Alert from '../../components/alert'
import { getSortedPostsData } from '../../lib/posts'

import { useRouter } from 'next/router'
// import useSWR from "swr";


const fetcher = url => fetch(url).then(res => res.json());

// export const getStaticPaths: GetStaticPaths = async () => {
//     const paths = [
//         { params: { id: 'abc.html' } }
//       ]
//     // console.log(paths, '====路径====')
//     return {
//       paths,
//       fallback: true,
//     }
//   }
  

// 静态生成
export const getStaticProps: GetStaticProps = async context =>{
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {


  return (
    <Layout home>
      <Head>
        <title>测试一下动态路由{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Glitr. I'm a software enginer and a translator(English/Japanese). You can contact me on Twitter</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
        <Alert type="error">alert组件的内容</Alert>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog=====post-test</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
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


  
  