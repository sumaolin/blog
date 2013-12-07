
/*
 * GET home page.
 */


var crypto = require('crypto'), //用它生成散列值来加密密码
	User = require('../models/user');

module.exports = function(app){
	app.get('/',function(req, res){
		res.render('index', {
			title:"主页",
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});

	app.get('/reg', checkNotLogin);
	app.get('/reg', function(req, res){
		res.render('reg', {
			title:'注册',
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});

	app.post('/reg', checkNotLogin);
	app.post('/reg', function(req, res){
		var name = req.body.name,
			password = req.body.password,
			password_re = req.body['password_re'];
		if(password_re != password){
			req.flash('error','两次输入的密码不一致！');
			return res.redirect('/reg');
		}

		var md5 = crypto.createHash('md5'),
			password = md5.update(req.body.password).digest('hex');
		var newUser = new User({
			name: req.body.name,
			password: password,
			email: req.body.email
		});

		User.get(newUser.name, function(err,user){
			if(user){
				req.flash('error','用户已存在！');
				return res.redirect('/reg');
			}

			newUser.save(function(err, user){
				if(err){
					req.flash('error',err);
					res.redirect('/reg');
				}
				req.session.user = user;
				req.flash('success','注册成功');
				res.redirect('/');
			});
		});
	});

	app.get('/login', checkNotLogin);
	app.get('/login', function(req, res){
		res.render('login', {
			title:'登录',
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	})

	app.post('/login', checkNotLogin);
	app.post('/login', function(req, res){
		var md5 = crypto.createHash('md5'),
			password = md5.update(req.body.password).digest('hex');

		User.get(reg.body.name, function(err, user){
			if(!user){
				req.flash('error', '用户不存在');
				return res.redirect('login');
			}

			req.session.user = user;
			req.flash('success', '登录成功！');
			res.redirect('/')
		});
	});

	app.get('/post', checkLogin);
	app.get('/post', function(req, res){
		res.render('post', {
			title: '发表',
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});

	app.post('/post', checkLogin);
	app.post('/post', function(req, res){
		
	});

	app.get('/logout', checkLogin);
	app.get('/logout', function(req, res){
		req.session.user = null;
		req.flash('success','登出成功');
		res.redirect('/');
	});

	function checkLogin(req, res, next){
		if(!req.session.user){
			req.flash('error', '登录');
			res.redirect('/login');
		}
		next();
	}

	function checkNotLogin(req, res, next){
		if(req.session.user){
			req.flash('error', '已登录！');
			res.redirect('back');
		}
		next();
	}
}
// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };