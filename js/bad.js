var parseFoodForm = function(data){
	// uses form data here
	console.log(data);
};

$(document).ready(function(){
		var fform = $('#foodform')
			formerrorslink = $('#formerrorslink')
			
		;
			
		fform.validate({
			invalidHandler: function (form, validator){
				//create module pop up dialog
				formerrorslink.click();
				var html = '';
				console.log(validator.submitted);
					for(var key in validator.submitted){}		
						var label = $('label[for^="'+ key +'"]').not('[generated]');
						var legend = label.closest('fieldset').find('.ui-controlgroup-label')
						var fieldName= legend.length ? legend.text() : label.text();
						html +- '<li>' + fieldName +'</li>';
					};
					$("#foodformerrors ul").html(html);
			},
						
			submitHandler: function(){
				var data = fform.serializeArray();
				parseFoodForm(data);
			
			}
		}); 
	
	});	
