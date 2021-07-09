/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-09 16:19:20
 * @Editors: Mingjuan
 */
import Image from 'next/image'
import Link from 'next/link'
import styles from './headerTemplate.module.scss'
import utilStyles from '../styles/utils.module.css'

export default function headerTemplate({ city, home}: {
    city: string,
    home?: boolean
}){
    return (
        <header className={styles.header}>
        {home ? (
          <>
              <div className="top">
                <div className="location">
                    <a href="###"> <span className="icon icon-location"></span>北京</a>
                </div>
                <div className="logo">
                    <img src="./images/logo.png" alt=""/>
                </div>
                <div className="search-ico">
                    <a href="#">
                        <span className="icon icon-search"></span>
                    </a>
                </div>
                <div className="user">
                    <a href="#"><span className="icon icon-user"></span></a>
                </div>
              </div>
          </>
        ) : (
          <>
            <h1>其它页面的头长这样</h1>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
    )
}