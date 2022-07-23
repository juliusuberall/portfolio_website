//Category #1 switch ON/OFF
//CODING
var c1status = 1;
function Category1Switch() {
    var projectCells = document.getElementsByClassName("category_1");
    if(c1status == 1){
        //SWITCH ON
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
        }
        var button = document.getElementsByClassName("category_1_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "white";
            button[j].style.color = "black";
        }
        var button = document.getElementsByClassName("all_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c1status = 0;
        //SWITCH OFF
        //#2
        var projectCells = document.getElementsByClassName("category_2");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_2_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c2status = 1;
        //#3
        var projectCells = document.getElementsByClassName("category_3");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_3_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c3status = 1;
    }
    else{
        var projectCells = document.getElementsByClassName("category_1");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
            var button = document.getElementsByClassName("category_1_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "black";
                button[j].style.color = "white";
            }
            c1status = 1;
        }
    }
}
//Category #2 switch ON/OFF
//ARCHITECTURE
var c2status = 1;
function Category2Switch() {
    var projectCells = document.getElementsByClassName("category_2");
    if(c2status == 1){
        //SWITCH ON
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
        }
        var button = document.getElementsByClassName("category_2_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "white";
            button[j].style.color = "black";
        }
        var button = document.getElementsByClassName("all_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c2status = 0;
        //SWITCH OFF
        //#3
        var projectCells = document.getElementsByClassName("category_3");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_3_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c3status = 1;
        //#1
        var projectCells = document.getElementsByClassName("category_1");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_1_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c1status = 1;
    }
    else{
        var projectCells = document.getElementsByClassName("category_2");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
            var button = document.getElementsByClassName("category_2_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "black";
                button[j].style.color = "white";
            }
            c2status = 1;
        }
    }
}
//Category #3 switch ON/OFF
//ART
var c3status = 1;
function Category3Switch() {
    var projectCells = document.getElementsByClassName("category_3");
    if(c3status == 1){
        //SWITCH ON
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
        }
        var button = document.getElementsByClassName("category_3_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "white";
            button[j].style.color = "black";
        }
        var button = document.getElementsByClassName("all_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c3status = 0;
        //SWITCH OFF
        //#2
        var projectCells = document.getElementsByClassName("category_2");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_2_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c2status = 1;
        //#1
        var projectCells = document.getElementsByClassName("category_1");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
        }
        var button = document.getElementsByClassName("category_1_button");
        for (var j=0; j<button.length; j++) {
            button[j].style.backgroundColor = "black";
            button[j].style.color = "white";
        }
        c1status = 1;
    }
    else{
        var projectCells = document.getElementsByClassName("category_3");
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "none";
            var button = document.getElementsByClassName("category_3_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "black";
                button[j].style.color = "white";
            }
            c3status = 1;
        }
    }
}
//ALL
function SwitchAllOn(){
    
    //Switch on "all button" again
    var button = document.getElementsByClassName("all_button");
    for (var j=0; j<button.length; j++) {
        button[j].style.backgroundColor = "white";
        button[j].style.color = "black";
    }
    //SWITCH ON ALL 3 catgeories
    var projectCells = document.getElementsByClassName("category_1");
    for (var i=0; i<projectCells.length; i++) {
        projectCells[i].style.display = "unset";
        c1status = 1;
    }
    var button = document.getElementsByClassName("category_1_button");
    for (var j=0; j<button.length; j++) {
        button[j].style.backgroundColor = "black";
        button[j].style.color = "white";
    }
    var projectCells = document.getElementsByClassName("category_2");
    for (var i=0; i<projectCells.length; i++) {
        projectCells[i].style.display = "unset";
        c2status = 1;
    }
    var button = document.getElementsByClassName("category_2_button");
    for (var j=0; j<button.length; j++) {
        button[j].style.backgroundColor = "black";
        button[j].style.color = "white";
    }
    var projectCells = document.getElementsByClassName("category_3");
    for (var i=0; i<projectCells.length; i++) {
        projectCells[i].style.display = "unset";
        c3status = 1;
    }
    var button = document.getElementsByClassName("category_3_button");
    for (var j=0; j<button.length; j++) {
        button[j].style.backgroundColor = "black";
        button[j].style.color = "white";
    }
}