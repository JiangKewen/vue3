# api

## types

- 定义所有接口请求参数类型

## intercept

- 创建axios实例
- 添加了移除重复请求方法

## abstract

- 使用intercept实例
- 封装axios请求，包括get、post、delete、put方法
- 自定义了axios的拦截

## modules

- 继承abstract，使用types，定义所有接口，返回一个新接口对象
