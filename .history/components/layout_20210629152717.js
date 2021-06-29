/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-06-29 15:22:24
 * @Editors: Mingjuan
 */
import styles from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}