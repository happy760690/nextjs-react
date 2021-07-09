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
        'postcss-flexbugs-fixes', [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                    'custom-properties': false
                },
            }
        ],
        [
            'postcss-pxtorem', {
                rootValue: 37.5, //结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
                propList: ['*'], //属性的选择器，*表示通用可以从 px 更改为 rem 的属性。
                // 值需要完全匹配。
                // 使用通配符*启用所有属性。例子：['*']
                // *在单词的开头或结尾使用。（['*position*']会匹配background-position-y）
                // 使用!不匹配的属性。例子：['*', '!letter-spacing']
                // 将“not”前缀与其他前缀组合在一起。例子：['*', '!font*']
                selectorBlackList: [] // 要忽略并保留为 px 的选择器。
                    // 如果 value 是字符串，它会检查选择器是否包含字符串。
                    // ['body'] 会匹配 .body-class
                    // 如果 value 是 regexp，它会检查选择器是否与 regexp 匹配。
                    // [/^body$/]将匹配body但不匹配.body
                    // mediaQuery （布尔值）允许在媒体查询中转换 px。
                    // minPixelValue （数字）设置要替换的最小像素值。

                // exclude （字符串，正则表达式，函数）要忽略并保留为 px 的文件路径。
                // 如果值为字符串，则检查文件路径是否包含该字符串。
                // 'exclude' 会匹配 \project\postcss-pxtorem\exclude\path
                // 如果 value 是 regexp，它会检查文件路径是否与 regexp 匹配。
                // /exclude/i 会匹配 \project\postcss-pxtorem\exclude\path
                // 如果值为函数，则可以使用 exclude 函数返回 true，文件将被忽略。
                // 回调将文件路径作为参数传递，它应该返回一个布尔结果。
                // function (file) { return file.indexOf('exclude') !== -1; }

            }

        ]
    ]
}