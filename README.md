<!--
 * @Author: Timber.Wang
 * @Date: 2022-01-10 23:45:01
 * @LastEditors: Elijah
 * @LastEditTime: 2022-07-04 23:47:02
 * @Description:
-->

<p align="center">
    <a href="https://search.elijah16t.ml" target="_blank">
        <img width="100" src="https://timber.oss-cn-chengdu.aliyuncs.com/img/utool_up/QQ%E5%9B%BE%E7%89%8720220111125629.png" alt="logo" />
    </a>
</p>

### <p align="center"><b>S-light</b>，一个浏览器起始页:)</p>

---

## 项目截图

![](https://timber.oss-cn-chengdu.aliyuncs.com/img/utool_up/1641900085776.png)

## 使用方法

### 浏览器访问以下地址

> <http://slight.uniteor.cn/>

### 本地运行(需要Nodejs环境)

> 安装与配置Nodejs环境可参考：<https://timberkito.com/?p=145>

1.克隆项目到本地

> 如果你已经 fork 此项目，请将以下命令中的 Elijah-0616 替换为你的 Github 用户名。

```bash
git clone --recursive https://github.com/Elijah-0616/bdLite.git
```

2.在项目目录下初始化项目

```bash
npm install
```

3.运行项目

```bash
npm run serve
```

## 更新日志

- 2021.12.4 更新：

> 主域名添加重定向，访问主域名时自动重定向至项目所在的二级域名

- 2022.1.10 更新：

> 修改项目标题（浏览器显示标题，非项目名称），S-light，S 为 search 缩写，light 与 lite 同音 :)

- 2022.1.10 更新：

> 新增响应式布局，已适配移动端，欢迎体验

- 2022.1.11 更新：

> 增加了一些新的特性，实现选择搜索引擎查询

- 2022.1.11 更新：

> 优化界面显示效果 :)

- 2022.1.15 更新：

> 增加抽屉设置，可关闭动态背景
> 新增毛玻璃效果
> 优化移动端显示效果

- 2022.1.17 更新：

> 添加鼠标悬停动画，重新适配移动端

- 2022.7.4 项目重构：

> 由于原项目基于单个HTML页面导入vue框架后过于臃肿
> 现已将项目重构为基于Nodejs的方式部署vue
