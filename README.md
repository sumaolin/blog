

#学习Node.js使用，创建多人blog

>参考的学习资料：[https://github.com/nswbmw/N-blog/wiki/_pages](https://github.com/nswbmw/N-blog/wiki/_pages"")

##学习进度：

###12.03
>[学习资料 第一章](https://github.com/nswbmw/N-blog/wiki/%E7%AC%AC1%E7%AB%A0--Express-MongoDB-%E6%90%AD%E5%BB%BA%E5%A4%9A%E4%BA%BA%E5%8D%9A%E5%AE%A2)

###12,06

>1.reserved 路由配置文件改到 /routes/index.js当中

>2.blog 的路由配置

>3.连接MongoDB  安装相关插件：MongoDB，和链接配置库的配置信息

>>安装插件：connect-mongo 链接数据库  mongodb存储cookie信息

>4.注册和登陆  

>>页面设计

>>页面通知

>>>[connect-flash 模块](https://github.com/jaredhanson/connect-flash) 实现session功能

>>注册响应

>>>构建user对象 实现save()和get()对数据库中的数据插入和查找操作