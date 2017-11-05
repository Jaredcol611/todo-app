

$(function() {
    $("#addInputList").keyup(function (event) {
        if (event.keyCode === 13) {
            addItem();
        }
    });
    $(document).on('keyup', '.active', function (event) {
        if (event.keyCode === 13) {
            addTask();
        }
    });
    $(document).on('focus', '.taskInput', function () {
        $(this).on('focus', function () {
            $(this).addClass('active');
        });
    });
    $(document).on('blur', '.taskInput', function () {
        $(this).on('blur', function () {
            $(this).removeClass('active');
        });
    });
});

var totalListItems = 1;
var totalTaskItems = 1;
//this changes the ID of the input so it can dynamically add elements.

// var addClass = function(){
//     var focusEventHandler = function(){
//         $("#taskInput").attr("class", "input inputTask")
//     };
//     var blurEventHandler = function(){
//         ("#taskInput").attr("class", "input");
//     };
//     var inputElement = $("#taskInput");
//     inputElement.addEventListener('focus', focusEventHandler, false);
//     inputElement.addEventListener('blur', blurEventHandler, false);
// };
// document.addEventListener('DOMContentLoaded', addClass, false);






//checks the status of a checkbox to cross out text for that area
function status(){
    var checkbox = this;
}
//add item creates a new list item with checkbox, trash, and plus
function addItem(){
    var itemName = $("#addInputList").val();
    var isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        var nextList = "<div><input class='cb' type='checkbox' onclick='status()'><h2 class=\"item\">" + itemName + "</h2><i class='fa fa-trash-o' aria-hidden='true' onclick='deleteItem(this)'></i><i class=\"fa fa-plus\" aria-hidden=\"true\" onclick='newTask(this)'></i>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
    }
}
//creates a new task with checkbox and trash can where text input was, and input moves down.
function addTask(){
    var newTask = $(".active").val();
    var isEmpty = "" && " " && null;
    if(newTask !== isEmpty){
        var nextTask = "<div class='taskDiv'><input type=\"checkbox\" class=\"cb\" onclick='status()'><h2 class='taskH2'>" + newTask + "</h2><i class=\"fa fa-trash-o\" aria-hidden=\"true\" onclick='deleteItem(this)'></i></div>";
        $(".active").before(nextTask);
        $(".taskInput").val("");
    }
}
// called when clicking on the PLUS symbol.
function newTask(element) {
    var taskInput = "<br><input type=\"text\" id='taskInput' class='input taskInput' placeholder=\"Add a task\">";
    $(element).parent().append(taskInput);
    $(element).remove();
}
//will delete and item when trashcan is clicked
function deleteItem(element){
   // if(checkbox == checked)
    $(element).parent().remove();
};


