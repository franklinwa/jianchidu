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

卸载模块
uninstall
cnpm uninstall  模块名 
该命令卸载后，在package.json中的记录仍然存在。
增加--save参数后，卸载模块同时删除package.json
npm uninstall 模块名@版本号，比如@3.*

模块更新
npm update 模块名
将模块更新到小版本好的最高版本。
增加--save参数，可以将更新信息记录到package.json文件中。
npm update 模块名@版本号

查看全局模块
npm list -g
该命令打印出全局安装的模块，并显示出全局安装的路径。
查看本地模块
npm list

npm list -g --depth=0
查询第一层级的模块。







参考网址：https://my.oschina.net/dkvirus/blog/1137857
