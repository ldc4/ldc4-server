# ldc4-server

使用[eggjs][egg]框架提供node服务

## 部署

nginx配置
```
location /node/ {
    proxy_pass http://localhost:7001/;
}
```

初始化

npm install

启动

nohup npm start &

停止

npm stop

## 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

## 接口

获取每日必应图：/bing/picImg
获取每日必应图URL：/bing/picUrl


[egg]: https://eggjs.org