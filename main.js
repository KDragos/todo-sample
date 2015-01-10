$(document).ready(function(){
	$("#addItem").on("click", function(){
		var newItem = $("#toDo").val();
		var newElement = $("<li>"+ newItem + "</li>");
		$(".toDoList").append(newElement);
		newElement.click(function(){
			var result = confirm("Are you sure you want to delete " + newItem + " from your list?");
			if (result){
				newElement.remove();
			} 
		});
		$("#toDo").val("");
	$("button").on("click", function(){
		$("li").remove();
	});
	});
});