

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

>>>crypto 模块:用它生成散列值来加密密码

>>>用户注册代码的实现

>>>显示提示信息


###12,07

>[登录与登出响应](https://github.com/nswbmw/N-blog/wiki/%E7%AC%AC1%E7%AB%A0--Express-MongoDB-%E6%90%AD%E5%BB%BA%E5%A4%9A%E4%BA%BA%E5%8D%9A%E5%AE%A2#%E7%99%BB%E5%BD%95%E4%B8%8E%E7%99%BB%E5%87%BA%E5%93%8D%E5%BA%94)

>####mongodb启动的问题：mongodb.bat文件启动不了了，直接闪退。

>>cmd 直接命令行下:mongodb -dbpath D:\dev\mongodb\blog 还是退出了，不过看到错误信息了，主要注意到的提示：unclean shutdown detected。不明白啥意思，搜索的到的[参考资料](http://www.itpub.net/thread-1778273-1-1.html),摘录主要信息：
	
	服务器断电、异常关闭以及直接killall命令导致服务终止的情况都可能会被mondodb认为是unclean shutdown，
	因为unclean shutdown可能会导致数据不一致性或者数据损坏，所以必须要手动修复后才能继续提供服务。

	mongodb修复unclean shutdown的方式有：
	>+1、从journal修复，journal就是类似于Oracle数据库中的redo log，工作机制也是类似的，都是write-ahead的。
	>+2、从集群中其他节点的副本中修复。
	>+3、如果服务不是运行在集群环境中，也没有启用journal，那必须在再次启动服务时使用--repair或者--repair加上--repairpath修复。

>>看来是我的昨天直接关机的问题了，修复命令：mongod -dbpath D:\dev\mongodb\blog -repair，就Ok了！

>>看来以后不能直接关机走人了，正确的关数据库命令：mongod -shutdown，查看数据库当前状态的命令：关闭窗口，或者ctrl+c

>折腾一个多小时的mongodb启动问题,回到主线上来：

>>+1.  登录与登出响应

>>+2. 页面权限控制

		此时没有post的模板文件，会报错：failed to lookup view "post"



