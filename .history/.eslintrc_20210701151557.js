/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-06-17 10:48:50
 * @Editors: Mingjuan
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'next',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'react/no-unescaped-entities': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
