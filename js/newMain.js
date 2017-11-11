//next time you do something like this, create an array of objects and simply append things to it for your lists and tasks.


// document.ready
$(function() {
    $("#addInputList").keyup(function(event){
        if (event.keyCode === 13){
            addItem();
        }
    });
    $(document).on('keyup', '.active', function(event){
        if (event.keyCode === 13){
            addTask();
        }
    });
    // these two document statements allow for dynamically adding a task to a list via an 'active' class
    $(document).on('focus', '.taskInput', function(){
        $(this).on('focus', function(){
            $(this).addClass('active');
        });
    });
    $(document).on('blur', '.taskInput', function(){
        $(this).on('blur', function(){
            $(this).removeClass('active');
        });
    });
});
// totalItems increments every time addItem or addTask is called, increasing for the element id.
let totalItems = 0;
// checks the status of a checkbox to cross out text for that area
function status(element){
    let addId = element.id.replace("cb_", "");
    let item = document.getElementById('item_' + addId);
    if(element.checked) {
        item.style.textDecoration = "line-through";
        item.style.color = "#1152C5";
    } else {
        item.style.textDecoration = "none";
        item.style.color = "black";
    }
}
//add item creates a new list item with checkbox, trash, and plus. Increments total items and adds it as the id
function addItem(){
    totalItems++;
    let itemName = $("#addInputList").val();
    let isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        let nextList = "<div class='listDiv'><input class='cb' id='cb_" + totalItems + "' type='checkbox' onclick='status(this)'><h2 class=\"item\" id='item_" + totalItems + "' onclick='editText(this)'>" + itemName + "</h2><i class='fa fa-trash-o' aria-hidden='true' onclick='deleteItem(this)'></i><i class=\"fa fa-plus\" aria-hidden=\"true\" onclick='newTask(this)'></i>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
    }
}
//creates a new task with checkbox and trash can where text input was, and input moves down. Increments total items and adds it as the id
function addTask(){
    totalItems++;
    let newTask = $(".active").val();
    let isEmpty = "" && " " && null;
    if(newTask !== isEmpty){
        let nextTask = "<div class='taskDiv'><input type=\"checkbox\" class=\"cb\" id='cb_" + totalItems + "' onclick='status(this)'><h2 class='taskH2' id='item_" + totalItems + "' onclick='editText(this)'>" + newTask + "</h2><i class=\"fa fa-trash-o\" aria-hidden=\"true\" onclick='deleteItem(this)'></i></div>";
        $(".active").before(nextTask);
        $(".taskInput").val("");
    }
}
//called when clicking on the PLUS symbol.
function newTask(element){
    let taskInput = "<br><input type=\"text\" class='input taskInput' placeholder=\"Add a task\">";
    $(element).parent().append(taskInput);
    $(element).remove();
}
//will delete and item when trashcan is clicked
function deleteItem(element){
    $(element).parent().animate({
        opacity: 0,
        left: "+1000"
    }, 700, function(){
        $(element).parent().remove();
    });
}
//onclick replaces element with input and onkeyup replaces input with element of inputs value
function editText(element){
    let theId = element.id;
    let theItem = document.getElementById(theId);
    theItem.contentEditable = true;
    $(element).keypress( function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });
}
//button that removes tasks with marked checkboxes
function removeComplete(){
    $(':checked').parent().animate({
        opacity: 0,
        left: "+1000"
    }, 700, function(){
        $(':checked').parent().remove()
    });
}