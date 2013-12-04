
/*
 * GET home page.
 */
module.exports = function(app){
	app.get('/nswbmw',function(req, res){
		res.send("Hello World");
	})
	// app.get('/',function(req, res){
	// 	res.render('index',{title:"Express 3"});
	// });
}
// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };