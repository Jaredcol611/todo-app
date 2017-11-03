


$(function() {
    $("#addInputList").keyup(function(event){
        if(event.keyCode === 13){
            addItem();
        }
    });
    $("#taskInput").keyup(function(event){
        if(event.keyCode === 13){
            addTask();
        }
    })
});



//add item creates a new list and with newtask() should give the first input in the tabcontent div
function addItem(){
    var itemName = $("#addInputList").val();
    var isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        var nextList = "<div><input class='cb' type='checkbox'><h2 class=\"item\" onclick=\"\">" + itemName + "</h2><i class='fa fa-trash-o' aria-hidden='true' onclick='deleteItem(this)'></i><i class=\"fa fa-plus\" aria-hidden=\"true\" onclick='newTask(this)'></i>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");

    }
}


// called when clicking on the PLUS symbol. it's all wack right now

function newTask(element){
   // if( an input already exists, then doing make another )
        var taskInput = "<br><input type=\"text\" class=\"input\" placeholder=\"New Task\">";
        $(element).parent().append(taskInput);


}

//creates a new task with checkbox and trash can where text input was, and input moves down.
function addTask(){
    var itemNameTwo = $("#addInputList").val();
    var newTask = $("#taskInput").val();
    if(newTask !== "" || " "){
        var nextTask = "<div class=\"" + itemNameTwo + "\" id=\"" + itemNameTwo + "\"><input type=\"checkbox\" class=\"check\" id=\"cb\"><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></div>";
        $("#taskInput").before(nextTask);
        $("#taskInput").val("");
    }
}

//will delete and item when trashcan is clicked
function deleteItem(element){
    $(element).parent().remove();
}
function deleteTask(element){
    $(element).remove();
}


