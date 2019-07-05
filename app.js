var express=require("express");
// 引入body-parse模块
const bodyparser=require("body-parser");
// 引入路由器对象
var userRouter=require("./router/login.js");
// 创建服务器
var server=express();
// 创建端口
server.listen(8080);
// 使用body-parser模块
server.use(bodyparser.urlencoded({
	 extended:false
 }));
// 挂载静态目录
server.use(express.static("public"));
server.use(express.static("public/img"));
server.use(express.static("public/css"));
server.use(express.static("public/js"));
// 挂载路由
server.use("/user",userRouter);