# ES6_Enviromment_Creat
建立ES6开发环境


第一步 镜像淘宝cnpm提高npm安装效果。
npm install -g cnpm --registry=https://registry.npm.taobao.org

第二部 npm init 初始化项目可以创建package.json文件，该文件记录项目的各类信息，包括：项目作者、项目描述、项目依赖哪些报、插件配置信息等等信息。

entry point 项目的入口文件
test conmand 项目启动时脚本命令
git repository 如果你有Git地址，可以将这个项目放到你的Git仓库里

dependencies 指定了项目生产环境时所依赖的模块；
devDenpdencies 制定了项目开发环境时所依赖的模块。

engines属性可以告诉系统当前项目依赖node的那个版本，npm依赖的是哪个版本。

--save  可以将模块信息记录到package.json文件中dependencies属性中。
--save-dev 可以将模块信息记录到package.json文件中devDependencise。


参考网址：https://my.oschina.net/dkvirus/blog/1137857
