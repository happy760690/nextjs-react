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

export default function headerTemplate({ city, headerType}: {
    city: string,
    headerType?: string
}){
    return (
        <header className={styles.header}>
        {headerType === 'normal' ? (
          <> 
            <i className={"jl-icon icon-icon-arrow-left" +  styles.return}>&#xe614;</i>
            <i className={"jl-icon " +  styles.location}>&#xe60e;</i>
            <span className={styles.city}>北京</span>
            <i className={"jl-icon " +  styles.logo}>&#xe619;</i>
            <span className={styles.leftWrap}>
              <i className={"jl-icon " +  styles.search}>&#xe622;</i>
              <i className={"jl-icon " +  styles.user}>&#xe60a;</i>
            </span>
          </>
        ) : (
          <>
           <i className={"jl-icon " +  styles.return}>&#xe614;</i>
           <span className={styles.title}>视频标题</span>
           <span className={styles.leftWrap}>
              <i className={"jl-icon " +  styles.user}>&#xe60a;</i>
            </span>
          </>
        )}
      </header>
    )
}