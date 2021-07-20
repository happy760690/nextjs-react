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
// import Date from '../../components/date'
import styles from './index.module.css'
// import Alert from '../../components/alert'
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
  // const { data, error } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );

  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  // console.log(data)
  // const router = useRouter()


  return (
    <Layout home>
      <Head>
        <title>北京楼盘成交记录_北京楼盘成交价格趋势_北京新房成交量网签-北京居理新房</title>
      </Head>
      <section>
        <div className={styles.cardWrap}></div>
      </section>
    </Layout>
  )
}


  
  