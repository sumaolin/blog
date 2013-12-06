var mongodb = require('./db');

function User(user){  //定义用户对象
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
};

module.exports = User;

User.prototype.save = function(callback){ //存储用户信息到mongodb
	var user = {  //存储对象的实例
		name: this.name,
		password: this.password,
		email: this.email
	};

	mongodb.open(function(err, db){  //打开数据库
		if(err){
			callback(err);
		}

		db.collection('users',function(err, collection){
			if(err){
				mongodb.close();
				return callback(err);
			}

			collection.insert(user, {saft:true},function(err, user){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null, user[0]);
			});
		});
	});
};

User.get = function(name, callback){  //按姓名查找用户信息
	mongodb.open(function(err, db){
		if(err){
			return callback(err);
		}

		db.collection('users', function(err, collection){
			if(err){
				mongodb.close();
				return callback(err);
			}

			collection.findOne({name:name},function(err, user){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null, user);
			});
		});
	});
};