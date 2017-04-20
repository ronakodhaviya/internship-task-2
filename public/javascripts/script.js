$(document).ready(function(){

	

	function hideThis()
	{
		fetchNodes();
		$("form").fadeOut(800,function(){
			$(".allNodes").fadeIn();
		});

	}

	function fetchNodes()
	{
		$(".nodes").empty();
		$.ajax({
			url : '/users',
			type : 'get',		
			dataType : 'json',
			
			success : function(data) {
				$.each(data.nodes,function(k,v){


					try {
						$(".nodes").append("<div class='user'>Name : " + v.username + "<br><input class='isNew' data-id='" + k + "' type='text' value='" + v.isNew.toString() + "'></div>");
					}catch(err) {

					}
					
				});

				
			}
		});
	}

	$(document).on("click","button",function(ev){

		ev.preventDefault();
		$.ajax({
			url : '/',
			type : 'post',
			data : 'name=' + $("input").val(),
			dataType : 'json',
			beforeSend : function() {
				$("button").css('opacity','0.2');
			},
			success : function(data) {
				$("button").css('opacity','1');
				if(data.status == true)
					hideThis();
			}
		});

	});


	$(document).on("change",".isNew",function(){
		var id = $(this).data('id');
		var changeTo = $(this).val();
		$.ajax({
			url : '/update',
			type : 'post',
			data : 'id=' + id + '&text=' + changeTo,
			dataType : 'json',			
			success : function(data) {
				
				if(data.status == true)
					alert("Done.");
			}
		});
	});

	$(document).on("click",".fa-refresh",function(){
		fetchNodes();
	});

});