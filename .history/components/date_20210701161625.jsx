/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-01 11:19:14
 * @Editors: Mingjuan
 */

import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}