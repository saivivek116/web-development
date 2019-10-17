$(document).ready(()=>{
	console.log("vivek")
	$("#but").click(()=>{
		console.log("hello")
		$(".msg").text("hello vivek")

	})

	// let x=$(".msg").text()
	// alert(x)
	$("#but2").dblclick(()=>{
		$("p").addClass("newClass");
	})
	$("#but3").click(()=>{
		$("p").css("color","red")
	});
	$("input").focus(function(){
		$(this).addClass("colorborder");
	});
	$("#input").focusout(function(){
		$(this).removeClass("colorborder")
	});
	$("form").submit((event)=>{
		event.preventDefault();
	})
	//traversals parent 
	// $("#but4").parent().addClass("highlight");
	// $("#but4").parentsUntil("div").addClass("highlight");
	//traversal child
	//child()
	//find()
	//customqueries
	// $("#container").last().addClass("highlight");
	// $(".letter").eq(2).addClass("highlight");
	//$("div").filter(".row").addClass("highlight");
	//$("div").not(".row").addClass('highlight');
	$("#but5").click(function(){
		$("#satyaimg").slideToggle("slow",function(){
			// $(".fadedtext").text("image has faded!");
			
		});
	})
})