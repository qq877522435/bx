var express=require("express");
// 引入连接池对象
var pool=require("../pool.js");
// 创建路由器对象
var router=express.Router();
// 创建路由
// 登录路由
router.post("/dl",function(req,res){
	var obj=req.body;
	pool.query("select * from user where username=? and password=?",[obj.uname,obj.upwd],function(err,result){
			if (err) throw err;
			if (result.length>0) {
				res.send("1");
			}else{
				res.send("0");
			}
	});
});
// 注册认证
router.get("/zcrz",function(req,res){
	var obj=req.query;
	
		if (!obj.uname)
	{
		res.send('-1');
		return;
	}
	pool.query('select * from user where username=?',[obj.uname],function(err,result){
		if (err)	throw err;
		if (result.length>0)
		{
			res.send('1');
		}else{res.send('0')}
	});
});
// 注册
router.post('/zc',function(req,res){
	var obj=req.body;
	pool.query('insert into user values(?,?,?,?)',['','',obj.uname,obj.upwd],function(err,result){
		if (err)
		{
			throw err;
		}
		
		if (result.affectedRows>0)
		{
			res.send('1');
		}else {res.send('0')}
	});
})
//导出路由器对象
module.exports =router;