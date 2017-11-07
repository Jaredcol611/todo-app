//next time you do something like this, create an array of objects and simply append things to it for your lists and tasks.


// document.ready
$(function() {
    $("#addInputList").keyup(function(event){
        if (event.keyCode === 13) {
            addItem();
        }
    });
    $(document).on('keyup', '.active', function(event){
        if (event.keyCode === 13) {
            addTask();
        }
    });
    //these two document statements allow for dynamically adding a task to a list via an 'active' class
    $(document).on('focus', '.taskInput', function(){
        $(this).on('focus', function () {
            $(this).addClass('active');
        });
    });
    $(document).on('blur', '.taskInput', function(){
        $(this).on('blur', function () {
            $(this).removeClass('active');
        });
    });
});
// totalItems increments every time addItem or addTask is called, increasing for the element id.
var totalItems = 0;
//checks the status of a checkbox to cross out text for that area
function status(element){
    var addId = element.id.replace("cb_", "");
    var item = document.getElementById('item_' + addId);
    if(element.checked) {
        item.style.textDecoration = "line-through";
        item.style.color = "#509AF5";
    } else {
        item.style.textDecoration = "none";
        item.style.color = "black";
    }
}
//add item creates a new list item with checkbox, trash, and plus
function addItem(){
    totalItems++;
    var itemName = $("#addInputList").val();
    var isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        var nextList = "<div><input class='cb' id='cb_" + totalItems + "' type='checkbox' onclick='status(this)'><h2 class=\"item\" id='item_" + totalItems + "' onclick='editText(this)'>" + itemName + "</h2><i class='fa fa-trash-o' aria-hidden='true' onclick='deleteItem(this)'></i><i class=\"fa fa-plus\" aria-hidden=\"true\" onclick='newTask(this)'></i>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
    }
}
//creates a new task with checkbox and trash can where text input was, and input moves down.
function addTask(){
    totalItems++;
    var newTask = $(".active").val();
    var isEmpty = "" && " " && null;
    if(newTask !== isEmpty){
        var nextTask = "<div class='taskDiv'><input type=\"checkbox\" class=\"cb\" id='cb_" + totalItems + "' onclick='status(this)'><h2 class='taskH2' id='item_" + totalItems + "' onclick='editText(this)'>" + newTask + "</h2><i class=\"fa fa-trash-o\" aria-hidden=\"true\" onclick='deleteItem(this)'></i></div>";
        $(".active").before(nextTask);
        $(".taskInput").val("");
    }
}
// called when clicking on the PLUS symbol.
function newTask(element) {
    var taskInput = "<br><input type=\"text\" class='input taskInput' placeholder=\"Add a task\">";
    $(element).parent().append(taskInput);
    $(element).remove();
}
//will delete and item when trashcan is clicked
function deleteItem(element){
   // if(checkbox == checked)
    $(element).parent().animate({
        opacity: 0,
        left: "+1000"
    }, 700, function(){
        $(element).parent().remove();
    });

}
//onclick replaces element with input and keyup replaces input with element of inputs value
function editText(element) {
    var theId = element.id;
    var theItem = document.getElementById(theId);
    theItem.contentEditable = true;
    $(element).keypress( function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });
}

//     var currentText = element.id;
//     if(element.id === $("[id^='item_']")){
//         $(element).remove();
//         $(element).add("<input class='textEdit'>");
//         $(".textEdit").val(currentText);
//         var textReplace = $('.textEdit').val();
//         $(document).on('keyup', '.textEdit', function(event){
//             if (event.keyCode === 13){
//                 $(element).remove();
//                 $(element).add("<h2 class='.item' onclick='editText()'>" + textReplace + "</h2>")
//             }
//         });
//     }
//     else if(this === $(".taskH2")){
//         $(element).remove();
//         $(element).add("<input class='textEdit'>");
//         $(".textEdit").val(currentText);
//         var textReplace = $('.textEdit').val();
//         $(document).on('keyup', '.textEdit', function(event){
//             if (event.keyCode === 13){
//                 $(element).remove();
//                 $(element).add("<h2 class='.taskH2' onclick='editText()'>" + textReplace + "</h2>")
//             }
//         });
//     }
// }

