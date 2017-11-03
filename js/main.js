


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

//FOUND THE PROBLEM. THERE ARE TWO ID'S TRYING TO BE USED. MAKE ONE OF YOUR ID'S SEPERATE OR == TO STRING.REVERSE TO MAKE ID'S UNIQUE


//add item creates a new list and with newtask() should give the first input in the tabcontent div
function addItem(){
    var itemName = $("#addInputList").val();
    var isEmpty = "" && " " && null;
    if(itemName !== isEmpty){
        var nextList = "<button id=\'" + itemName + "\' class=\"tablinks\" onclick=\"openTab(event, \'"+ itemName +"\')\">" + itemName + "</button>";
        $(".addTab").before(nextList);
        $("#addInputList").val("");
        var todoInput = "<div id=\"" + itemName + "\" class=\"tabcontent\"><input type=\"text\" class=\"input\" placeholder=\"New Task\"></div>";
        $(".todo-container").append(todoInput);
    }
}

//new task is called when add item is created. newTask() creates the input in the tabcontent div
function newTask (){

    var theLabel = $("#addInputList").val();

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
    console.log($(element).parent());
    $(element).parent().remove();
}



//changes the list item be shown or not after being clicked.
function openTab(event, theLabel) {
    // Declare all variables
    var i;
    var tabcontent;
    var tablinks;

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

