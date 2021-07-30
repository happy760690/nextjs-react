
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
      .cardWrap{
        background: #fff;
        // height: 205px;
        display: flex;
        border-radius: 8px;
        padding: 16px;
        flex-direction: column;
        margin-bottom: 16px;
    }
    
    .left{
        width: 75px;
        height: 93px;
        object-fit: cover;
        border-radius: 4px;
    }
    
    .cardTop{
        display: flex;
        flex-direction: row;
        flex: 1
    }
    
    
    .right{
        display: flex;
        flex-direction: column;;
        margin-left: 16px;
        flex: 1;
    }
    
    .top{
        font-size: 16px;
        color: $color-text-main;
        line-height: 22px;
    }
    .middle{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .numBottom{
            width: 48px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: normal;
            color: #8D9799;
            line-height: 17px;
        }
    }
    .numberWrap{
        display: flex;
        flex-direction: row;
        height: 25px;
        margin-top: 6px;
        align-items: flex-end;
        .number{
            // height: 25px;
            // font-size: 21px;
            // color: #031A1F;
            // font-weight: bold;
            // width: 43px;
            height: 25px;
            font-size: 21px;
            font-family: DIN;
            font-weight: bold;
            color: #031A1F;
            line-height: 25px;
            // display: flex;
            // align-items: center;
        }
        .unit{
            // display: flex;
            // align-items: center;
            height: 17px;
            font-size: 12px;
            color: #031A1F;
        }
    }
    .li{
        // background-color: red;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .buildingInfo{
        display: flex;
        flex-direction: row;
        margin-top: 6px;
        .title{
            width: 52px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: normal;
            color: #8D9799;
            line-height: 17px;
            margin-right: 8px;
        }
        .info{
            width: 162px;
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: normal;
            color: #8D9799;
            line-height: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    .cardBottom{
        margin-top: 16px;
        box-sizing: border-box;
        padding: 12px;
        width: 313px;
        background: #F5F8F9;
        border-radius: 4px;
        .content{
            display: -webkit-box;
            height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: normal;
            color: #031A1F;
            line-height: 20px;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
        }
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


  
  