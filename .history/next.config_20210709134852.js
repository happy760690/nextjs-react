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
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "sass",
            options: {
              additionalData: `@import "/style/variable.scss"`,
            },
          },
        ],
      }
    )

    return config
  },

  // additionalData: (content, loaderContext) => {
  //   // More information about available properties https://webpack.js.org/api/loaders/
  //   const { resourcePath, rootContext } = loaderContext;
  //   const relativePath = path.relative(rootContext, resourcePath);
  //   console.log(relativePath, '====!!!')

  //   // if (relativePath === "styles/base.scss") {
  //   //   return "$color-background: #fff;" + content;
  //   // }

  //   return "$color-background: #fff;" + content;
  // },
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
