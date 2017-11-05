
$("#addInputList").focus();

$(function() {
    $("#addInputList").keyup(function(event){
        if(event.keyCode === 13){
            addItem();
        }
    });
    $(document).on('keyup', '.taskInput', function(event){
        if(event.keyCode === 13){
            console.log("woop");
            addTask();
        }
    })
});
var totalListItems = 1;
var totalTaskItems = 1;

function status(){
    var checkbox = this;
}
//add item creates a new list item with checkbox, trash, and plus
function addItem(){
    var itemName = $("#addInputList").val();
    var isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        var nextList = "<div><input class='cb' type='checkbox' onclick='status()'><h2 class=\"item\" onclick=\"-editText()-\">" + itemName + "</h2><i class='fa fa-trash-o' aria-hidden='true' onclick='deleteItem(this)'></i><i class=\"fa fa-plus\" aria-hidden=\"true\" onclick='newTask(this)'></i>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");

    }
}
//creates a new task with checkbox and trash can where text input was, and input moves down.
function addTask(){
    var newTask = $(".taskInput").val();
    var isEmpty = "" && " " && null;
    if(newTask !== isEmpty){
        var nextTask = "<div class='taskDiv'><input type=\"checkbox\" class=\"cb\" onclick='status()'><h2 class='taskH2'>" + newTask + "</h2><i class=\"fa fa-trash-o\" aria-hidden=\"true\" onclick='deleteItem(this)'></i></div>";
        $(".taskInput").before(nextTask);
        $(".taskInput").val("");
    }
}
// called when clicking on the PLUS symbol.
function newTask(element) {
    var taskInput = "<br><input type=\"text\" class='input taskInput' placeholder=\"Add a task\">";
    $(element).parent().append(taskInput);
    $(element).remove();
    $(".taskInput").focus();
}
//will delete and item when trashcan is clicked
function deleteItem(element){
   // if(checkbox == checked)
    $(element).parent().remove();
}


