/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 1985-10-26 16:15:00
 * @Editors: Mingjuan
 */
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
  // async redirects() { // 通过重定向url方式加载 permanent: true,
  async rewrites() { // 通过重写url方式加载
    return [
      {
        source: '/abc:record*',
        destination: '/api/hello',
      },
    ]
  },
}
