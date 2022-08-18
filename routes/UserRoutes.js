

//submit jwt to this route to get user data
global_app.route('/user/profile').get(function(req,res,next){
	res.send('Hello World!')
});

global_app.route('/user/register').post(function(req,res,next){
	
});

global_app.route('/user/login').post(function(req,res,next){
	
});
