/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 1985-10-26 16:15:00
 * @Editors: Mingjuan
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe, hello' })
}
