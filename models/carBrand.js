mongodb = require('./db');

function Brand(brandName, models){
	this.brandName = brandName;
	this.models = models;
}

module.exports = Brand;

Brand.prototype.save = function(callback){
	var brand = {
		brandName : this.BrandName,
		models: []
	};

	mongodb.open(function(err, db){
		if(err){
			return callback(err);
		}

		db.collection('brands',function(err, collection){
			if(err){
				mongodb.close();
				return callback(err);
			}

			collection.insert(brand, {safe:true}, function(err){
				mongodb.close();
				if(err){
					callback(err);
				}
				callback(null);
			});
		});
	});
};

Brand.getCarBrands = function(name, callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}

		db.collection('brands', function(err, collection){
			if(err){
				mongodb.close();
				return callback(err);
			}

			var query = {};
			if(name){
				query.name = name;
			}

			collection.find(query).sort({time: -1}).toArray(function(err,docs){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null, docs);
			});
		
		});
	});
};

Brand.getModels = function(callback){

}