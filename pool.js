var mysql=require("mysql");
// 建立连接池对象
var pool=mysql.createPool({
	host:"127.0.0.1",
	prot:"3306",
	user:"root",
	password:"",
	database:"bx",
	connectionLimit:15
});
// 导出连接池对象
module.exports=pool;