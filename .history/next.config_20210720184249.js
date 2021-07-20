/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 1985-10-26 16:15:00
 * @Editors: Mingjuan
 */
const { redirect } = require('next/dist/next-server/server/api-utils')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "/styles/scss/variable.scss";
                     @import "/styles/scss/mixin.scss";
    `,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
  
  // async redirects(){ // 通过重定向url方式加载 (permanent: true,表示重定向是否永久)
  //  return [
  //     {
  //       source: '/abc:record*',
  //       destination: '/api/hello',
  //     },
  //   ]
  // },
  // async rewrites() { // 通过重写url方式加载
  //   return [
  //     {
  //       source: '/deal-record-*.html',
  //       destination: '/api/hello',
  //     },
  //   ]
  // },
  async rewrites() { // 通过重写url方式加载
    return [
      {
        source: '/eal\-record\-:record*',
        destination: '/api/hello',
      },
    ]
  },
}
