/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-06-29 15:22:24
 * @Editors: Mingjuan
 */
import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import HeaderTemplate from './headerTemplate'

const name = 'Mingjuan Ma'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <meta name="format-detection" content="telephone=no"></meta>
        <meta name="renderer" content="webkit"/>
        <meta name="screen-orientation" content="portrait"></meta>
        <meta name="x5-orientation" content="portrait" ></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no,minimal-ui,maximum-scale=1.0,minimum-scale=1.0"></meta>
        <meta name="full-screen" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <meta http-equiv="Cache-Control" content="no-transform"/> */}
        {/* <meta http-equiv="Cache-Control" content="no-siteapp" /> */}
        <meta name="applicable-device" content="mobile"></meta>
        <meta name="location" content="province=上海;city=上海;coord=121.480756,31.235991"></meta>
        <meta name="wap-font-scale" content="no"></meta>


        {/* <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="keywords" content={siteTitle}/>
        <meta
          name="description"
          content={siteTitle}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />


        <script src="/js/flexible.js"></script>
        <script src="https://g.alicdn.com/AWSC/AWSC/awsc.js"></script>
        
      </Head>
      {/* 头部内容 */}
      <HeaderTemplate city="北京" home/>

      {/* 子内容 */}
      <main className={styles.main}>{children}</main>
      {/* 底部内容 */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}