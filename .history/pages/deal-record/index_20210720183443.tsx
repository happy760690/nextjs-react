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
      {
        [1,2,3,4,5,6].map((data, index) => {
          return (<div className={styles.cardWrap}>
            <div key={index + data} className={styles.cardTop}>
              <img className={styles.left} src="images/avatar.jpeg"></img>
              <div className={styles.right}>
                <div className={styles.top}>张女士</div>
                <ul className={styles.middle}>
                  <li className={styles.li}>
                    <div className={styles.numberWrap}>
                      <i className={styles.number} >5*0</i>
                      <i className={styles.unit}>万</i>
                    </div>
                    <span className={styles.numBottom}>购买总价</span>
                  </li>
                  <li className={styles.li}>
                    <div className={styles.numberWrap}>
                      <i className={styles.number} >5*</i>
                      <i className={styles.unit}>万</i>
                    </div>
                    <span className={styles.numBottom}>购买总价</span>
                  </li>
                  <li className={styles.li}>
                    <div className={styles.numberWrap}>
                      <i className={styles.number} >500</i>
                      <i className={styles.unit}>万</i>
                    </div>
                    <span className={styles.numBottom}>购买总价</span>
                  </li>
                </ul>
                <div className={styles.buildingInfo}>
                  <span className={styles.title}>购买楼盘:</span>
                  <span className={styles.info}>K2十里春风K2十里春风K2十里春风K2十里春风</span>
                </div>
              </div>
            </div>
            <div className={styles.cardBottom}>
              <p className={styles.content}>在准备买房时，提前网上看房源，最初考虑二手房、现房，省去期房等待时间和装修费期房等待时间和装修费期房等待时间和装修费</p>
            </div>
          </div>)
        })
      }
    </Layout>
  )
}


  
  