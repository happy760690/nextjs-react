/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 1985-10-26 16:15:00
 * @Editors: Mingjuan
 */
import { GetStaticProps } from 'next'
// import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
// import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
// import Alert from '../components/alert/alert'
import { getSortedPostsData } from '../../lib/posts'
// import useSWR from "swr";


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
        <title>视频页面</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Glitr. I'm a software enginer and a translator(English/Japanese). You can contact me on Twitter</p>
       
      <div  className={utilStyles.ncWrap} >
       <div id="nc"></div>
       </div>
      </section>

      {/* <script src="/js/ali.js"></script> */}
    </Layout>
  )
}
