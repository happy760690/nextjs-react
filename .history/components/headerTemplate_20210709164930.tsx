/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-09 16:19:20
 * @Editors: Mingjuan
 */
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'

export default function headerTemplate({ city, home}: {
    city: string,
    home?: boolean
}){
    return (
        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={'测试测试测试'}
            />
            <h1 className={utilStyles.heading2Xl}>{'测试测试测试'}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
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