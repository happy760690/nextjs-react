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
import styles from './styles/index.module.scss'
// import Alert from '../../components/alert'
import { getSortedPostsData } from '../../lib/posts'

import { useRouter } from 'next/router'
// import useSWR from "swr";


// const fetcher = url => fetch(url).then(res => res.json());

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
        <title>北京楼盘成交记录_北京楼盘成交价格趋势_北京新房成交量网签-北京居理新房</title>
      </Head>
      <div className={styles.cardWrap}>
        <div className={styles.cardTop}>
          <img className={styles.left} src="images/avatar.jpeg"></img>
          <div className={styles.right}>
            <div className={styles.top}>张女士</div>
            <ul className={styles.middle}>
              <li className={styles.li}>
                <div className={styles.numberWrap}>
                  <i className={styles.number} >500</i>
                  <i className={styles.unit}>万</i>
                </div>
                <span>购买总价</span>
              </li>
              <li></li>
              <li></li>
              
            </ul>
            <div></div>
          </div>
        </div>
        <div className={styles.cardBottom}></div>
      </div>
    </Layout>
  )
}


  
  