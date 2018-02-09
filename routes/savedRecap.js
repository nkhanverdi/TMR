
/*
 * GET home page.
 */

exports.view = function(req, res){
   res.render('savedRecap', {
  	'savedRecap': '' 
	 });
};