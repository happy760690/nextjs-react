
/*
 * @Name: 买房故事详情页
 * @Description: 买房故事详情页
 * @Author: Mingjuan
 * @Date: 2021-07-20 16:15:00
 * @Editors: Mingjuan
 */
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
// import Date from '../../components/date'
// import './styles/detail.scss'
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
      <style jsx>{`
      .cardWrap {
        background: green;
        display:flex;
      }
      .top{
        font-size: 16px;
        color: $color-text-main;
        line-height: 22px;
    }
    `}</style>

      <div  className="cardWrap">
        <div className="cardTop">
            <img className="left" src="images/avatar.jpeg"></img>
            <div className="right">
                <div className="top">张女士</div>
                <ul className="middle">
                    <li className="li">
                    <div className="numberWrap">
                        <i className="number">5*0</i>
                        <i className="unit">万</i>
                    </div>
                    <span className="numBottom">购买总价</span>
                    </li>
                    <li className="li">
                    <div className="numberWrap">
                        <i className="number">5*</i>
                        <i className="unit">万</i>
                    </div>
                    <span className="numBottom">购买总价</span>
                    </li>
                    <li className="li">
                        <div className="numberWrap">
                            <i className="number">500</i>
                            <i className="unit">万</i>
                        </div>
                        <span className="numBottom">购买总价</span>
                    </li>
                </ul>
                <div className="buildingInfo">
                    <span className="title">购买楼盘:</span>
                    <span className="info">K2十里春风K2十里春风K2十里春风K2十里春风</span>
                </div>
            </div>
        </div>
        <div className="cardBottom">
            <p className="content">在准备买房时，提前网上看房源，最初考虑二手房、现房，省去期房等待时间和装修费期房等待时间和装修费期房等待时间和装修费</p>
        </div>
     </div>
    </Layout>
  )
}


  
  