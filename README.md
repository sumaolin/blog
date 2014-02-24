

#学习Node.js使用，创建多人blog

>参考的学习资料：[https://github.com/nswbmw/N-blog/wiki/_pages](https://github.com/nswbmw/N-blog/wiki/_pages)

##Node API：[中文](http://nodeapi.ucdok.com/api/) [英文](http://nodejs.org/api/)

##学习进度：

>[学习资料 第一章](https://github.com/nswbmw/N-blog/wiki/%E7%AC%AC1%E7%AB%A0--Express-MongoDB-%E6%90%AD%E5%BB%BA%E5%A4%9A%E4%BA%BA%E5%8D%9A%E5%AE%A2)

>> ###[12,06](/md/12.06.md)

>> ###[12,07](/md/12.07.md)

>>插件supervisor:自动帮我们重启应用 ，使用：supervisor app 启动命令

>> ###[12,09](/md/12.09.md)

>> ###[12,11](/md/12.11.md)

>> ###[12,13](/md/12.13.md)

>> ###[12,16](/md/12.16.md)

#开源node 程序

>> 1, [基于 Node.js 的社区系统](https://github.com/heroicyang/nodediscuss)


#上传图片成功

注意点：

1，app.js 配置
app.use(express.bodyParser({keepExtensions: true, uploadDir: './public/images/'}));
中的uploadDir 设置的是临时目录

index.js 中的var target_path = './public/images/1/' + req.files[i].name; 中设置的是
文件复制到的目录，而且images必须有相应的目录结构（如果木有相应的目录，程序报错：Error: ENOENT, no such file）
参考：[http://www.w3c.com.cn/nodejs%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8Eexpressjs%E6%A1%86%E6%9E%B6%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0](http://www.w3c.com.cn/nodejs%E6%95%99%E7%A8%8B-%E5%9F%BA%E4%BA%8Eexpressjs%E6%A1%86%E6%9E%B6%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0)



