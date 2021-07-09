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
  },
  additionalData: `
          @import "@/style/scss/variable.scss";
          @import "@/style/scss/mixin.scss";
        `
  // additionalData: `${[path.join(__dirname, 'styles/variable.scss')]}`,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 全局引入变量和 mixin
  //       additionalData: `
  //         @import "@style/variable.scss";
  //         @import "@/assets/scss/mixin.scss";
  //       `
  //     }
  //   }
  // },
}
