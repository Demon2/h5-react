##安装依赖
>
>npm install
>

##启动接口
>
>node testAPI.js
>
##扩展
###nodejs每次修改后需重启
解决方案：supervisor 可以帮助你实现这个功能，它会监视你对代码的改动，并自动重启 Node.js。使用方法很简单，首先使用 npm 安装 supervisor：
>
>npm install -g supervisor
>
接下来，使用 supervisor 命令代替node命令启动 app.js：