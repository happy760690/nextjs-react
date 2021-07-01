/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 1985-10-26 16:15:00
 * @Editors: Mingjuan
 */
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import { getSortedPostsData } from '../lib/posts'
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());


// 静态生成
export const getStaticProps: GetStaticProps = async context =>{
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  // const { data, error } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );

  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  // console.log(data)

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

      <div>
        {/* {data.map(({id, title}) => (
            <p key={id}>{id}{title}</p>
        ))} */}
        {/* {data[0]} */}
        {/* <h1>{data}</h1> */}
        {/* <p>{data.description}</p> */}
        {/* <strong>👀 {data.subscribers_count}</strong>{" "} */}
        {/* <strong>✨ {data.stargazers_count}</strong>{" "} */}
        {/* <strong>🍴 {data.forks_count}</strong> */}
      </div>
    </Layout>
  )
}

<style jsx>
{`

`}
</style>