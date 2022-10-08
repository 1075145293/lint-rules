module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    // 解决 defineProps and defineEmits generate no-undef warnings
    'vue/setup-compiler-macros': true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /* 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
    'node_modules'
  ],
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // typeScript (https://typescript-eslint.io/rules)

    '@typescript-eslint/no-unused-vars': 'off', // 因为与script setup不兼容, 不禁止定义未使用的变量
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/no-require-imports': 'off', // TS require

    // vue (https://eslint.vuejs.org/rules)

    'vue/comment-directive': 'error', // 给 template 提供 eslint-disable 的能力
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
    'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/no-shared-component-data': 'error', // 组件的 data 必须是一个函数
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/require-v-for-key': 'error', // 为 v-for 设置键值
    'vue/no-use-v-if-with-v-for': 'warn', // 避免 v-if 和 v-for 用在一起
    'vue/no-async-in-computed-properties': 'error', // 计算属性禁止包含异步方法
    'vue/no-dupe-keys': 'error', // 禁止在对象字面量中出现重复的键
    'vue/no-duplicate-attributes': 'error', // 禁止出现重复的属性
    'vue/no-template-key': 'warn', // 禁止 <template> 使用 key 属性
    'vue/no-unused-components': 'warn', // 禁止注册没有使用的组件
    'vue/require-render-return': 'error', // render 函数必须有返回值
    'vue/require-component-is': 'warn', // <component> 必须有 v-bind:is
    'vue/return-in-computed-property': 'error', // 计算属性必须有返回值
    'vue/use-v-on-exact': 'error', // 强制在 v-on 指令使用 exact 修饰符，当同一个标签上有另一个带修饰符的 v-on 指令
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
        'invalid-first-character-of-tag-name': false
      }
    ], // 禁止出现语法错误
    'vue/no-side-effects-in-computed-properties': 'error', // 禁止在计算属性中对属性修改
    'vue/no-reserved-keys': 'error', // 禁止使用 vue 中的关键字
    'vue/jsx-uses-vars': 'error', // 本条是对JS规约 no-unused-vars 的补充，防止变量被错误地标记为未使用
    'vue/no-unused-vars': 'warn', // 禁止在 v-for 等指令或者 scope 中申明没有使用到的变量

    // 检查指令的合法性
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error'
  }
}
