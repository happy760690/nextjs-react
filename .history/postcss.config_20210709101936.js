/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-06-29 17:05:10
 * @Editors: Mingjuan
 */
module.exports = {
    plugins: [
    //   'tailwindcss',
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3,
          features: {
            'custom-properties': false
          }
        }
      ]
    ]
  }