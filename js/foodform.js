var parseFoodForm = function(data){
	// uses form data here
	console.log(data);
};

$(document).ready(function(){
		var fform = $('#foodform')
			fferrorslink = $('fferrorslink')
			
			;
			
		fform.validate({
			invalidHandler: function (form, validator){
				//create module pop up dialog
				fferrorslink.click();
			},
			submitHandler: function(){
				var data = fform.serializeArray();
				parseFoodForm(data);
			
			}
		}); 
	
	});	
