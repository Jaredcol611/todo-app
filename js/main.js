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
    })
});


function addItem(){
    var theLabel = $("#addInputList").val();
    if(theLabel !== "" || " "){
        var nextList = "<button class=\"tablinks\" onclick=\"openTab(event, \'" + theLabel + "\')\">" + theLabel + "</button>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
        newTask();
    }
}


function newTask(){
    var theLabel = $("#addInputlist").val();
    var todoInput = "<div id=\"" + theLabel + "\" class=\"tabcontent\"><input type=\"text\" class=\"input\" placeholder=\"New Task\"></div>";
    $("#todo-container").append(todoInput);
}


function addTask(){
    var theLabel = $
}


function deleteItem(element){
    console.log($(element).parent());
    $(element).parent().remove();
}


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

