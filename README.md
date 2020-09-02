# Babel

Babel 是一个 JavaScript 编译器

## Babel 能做什么

- 语法转换
- 通过 Polyfill 兼容
- 源码转换(codemods)

### 能力范围

- Babel 只是转译新标准引入的语法
  - 箭头函数
  - let / const
  - 解构
- 新标准引入的全局变量、部分原生对象新增的原型链上的方法，Babel 表示无能为力

  - 全局变量
    - Promise
    - Symbol
    - WeakMap
    - Set
  - includes
  - generator

对于这些，需要借助[polyfill](#polyfill)来处理

## 基本原理

Babel 的编译过程和大多数其他语言的编译器相似，可以分为三个阶段：

- 解析（Parsing）：将代码字符串解析成抽象语法树。
- 转换（Transformation）：对抽象语法树进行转换操作。
- 生成（Code Generation）: 根据变换后的抽象语法树再生成代码字符串。

## 核心库 @babel/core

Babel 的核心功能包含在 @babel/core 模块中,没有它,在 babel 的世界里注定寸步难行.不安装 @babel/core,无法使用 babel 进行编译

![图](http://hetao-edu-bucket.oss-cn-beijing.aliyuncs.com/thoughts/static/a1.png)

## Babel 配置

[官方文档](https://babel.docschina.org/docs/en/configuration)

```json
{
  "presets": [],
  "plugins": []
}
```

> `presets` 预设的意思，就是很多插件的集合
>
> 比如`preset-env`他是一个智能预设，淘汰了原先的`es2015,es2016,es2017,latest`Babel7 更是代替了`preset-stage-x`

> `plugins` 插件

词法分析

```json
[
  {
    "type": "Keyword",
    "value": "const"
  },
  {
    "type": "Identifier",
    "value": "a"
  },
  {
    "type": "Punctuator",
    "value": "="
  },
  {
    "type": "Numeric",
    "value": "1"
  },
  {
    "type": "Punctuator",
    "value": ";"
  }
]
```

---

ast（抽象语法树）

```json
{
  "type": "File",
  "start": 0,
  "end": 10,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 10
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 10,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 10
      }
    },
    "sourceType": "script",
    "interpreter": null,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 10,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 9,
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 9
              }
            },
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                },
                "identifierName": "a"
              },
              "name": "a"
            },
            "init": {
              "type": "NumericLiteral",
              "start": 8,
              "end": 9,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "extra": {
                "rawValue": 1,
                "raw": "1"
              },
              "value": 1
            }
          }
        ],
        "kind": "let"
      }
    ],
    "directives": []
  },
  "comments": []
}
```

### 注意

- 插件在 Presets 前运行
- 插件顺序从前往后排列
- Preset 顺序是颠倒的（从后往前）

## polyfill
