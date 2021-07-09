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
          },
          'postcss-pxtorem': {
            rootValue: 375,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
            propList: ['*'], //属性的选择器，*表示通用
            selectorBlackList:[]    // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
          }
        }
      ]
    ]
  }