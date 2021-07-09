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
    additionalData: `@import "./variable.scss";
                     @import "./mixin.scss";
    `,
  },
}
