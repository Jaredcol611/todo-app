/*
function addNewItem(list, itemText) {
    var listItem = document.createElement("input");
    listItem.innerText = itemText;

    list.appendChild(listItem);
}

var newBtn = document.getElementById("addBtn");


newBtn.onclick = function() {
    var itemText =

    if(!itemText || itemText.trim() === ""){
        return false;
    }
    addNewItem(document.getElementbyId("todoList"), itemText);

}; */


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



//add item creats a new list and with newtask() should give the first input in the tabcontent div
function addItem(){
    var theLabel = $("#addInputList").val();
    if(theLabel !== "" || " "){
        var nextList = "<button id=\'" + theLabel + "\' class=\"tablinks\" onclick=\"openTab(event, \'"+ theLabel +"\')\">" + theLabel + "</button>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
        var todoInput = "<div id=\"" + theLabel + "\" class=\"tabcontent\"><input type=\"text\" class=\"input\" placeholder=\"New Task\"></div>";
        $(".todo-container").append(todoInput);

    }
}

//new task is called when add item is created. newTask() creates the input in the tabcontent div
function newTask (){
    console.log("yes");
    var theLabel = $("#addInputList").val();

}

//creates a new task wtih checkbox and trash can where text input was, and input moves down.
function addTask(){
    var theLabel = $("#addInputList").val();
    var newTask = $("#taskInput").val();
    if(newTask !== "" || " "){
        var nextTask = "<div class=\"" + theLabel + "\"><input type=\"checkbox\" class=\"check\" id=\"cb\"><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></div>";
        $("#taskInput").before(nextTask);
        $("#taskInput").val("");
    }
}

//will delete and item when trashcan is clicked
function deleteItem(element){
    console.log($(element).parent());
    $(element).parent().remove();
}

//changes the list item be shown or not after being clicked.
function openTab(event, theLabel) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(theLabel).style.display = "block";
    event.currentTarget.className += " active";
}

