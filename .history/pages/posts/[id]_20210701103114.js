/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-01 10:19:25
 * @Editors: Mingjuan
 */
import Layout from "../../components/layout";
import { getAllPostIds } from '../../lib/posts'

export default function Post(){
    return <Layout>...</Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }){
    // Fetch necessary data for the blog post using params.id
}
