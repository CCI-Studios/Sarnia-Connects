(function($) {
	$(function(){
		$.ajax({
			"type":"GET",
			"url":"https://api.instagram.com/v1/users/207154948/media/recent?count=4&client_id=626774f489e24b2893d126f7317cc4e6",
			"success":success,
			"dataType":"jsonp"
		});


	});
	function success(json)
	{
		if (json && json.data)
		{
			for (var i=0; i<4; i++)
			{
				if (json.data[i] && json.data[i].images && json.data[i].images.low_resolution && json.data[i].images.low_resolution.url)
				{
				
					var url = json.data[i].images.low_resolution.url;
					var comments=json.data[i].caption.text;
					if(comments.length > 100)
						{
							comments=comments.substr(0,100)+'...';
						}
					$("#instagram1").append("<div class=\"views-row\"><a href=\"http://instagram.com/greatlakesdance\" target=\"_blank\" ><img src='"+url+"' style=\"width:250px;height:250px;border:10px solid gray;margin:0 10px\"/></a><div class=\"caption\">"+comments+"</div></div>");
				}
	
			}            
		}
	}

}(jQuery));