//Category #1 switch ON/OFF
//CODING
var c1status = 1;
function Category1Switch() {
    var projectCells = document.getElementsByClassName("category_1");
    if(c1status == 1){
        for (var i=0; i<projectCells.length; i++) {
                projectCells[i].style.display = "none";
                var button = document.getElementsByClassName("category_1_button");
                for (var j=0; j<button.length; j++) {
                    button[j].style.backgroundColor = "black";
                    button[j].style.color = "white";
                }
                c1status = 0;
        }
    }
    else{
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
            var button = document.getElementsByClassName("category_1_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "white";
                button[j].style.color = "black";
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
        for (var i=0; i<projectCells.length; i++) {
                projectCells[i].style.display = "none";
                var button = document.getElementsByClassName("category_2_button");
                for (var j=0; j<button.length; j++) {
                    button[j].style.backgroundColor = "black";
                    button[j].style.color = "white";
                }
                c2status = 0;
        }
    }
    else{
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
            var button = document.getElementsByClassName("category_2_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "white";
                button[j].style.color = "black";
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
        for (var i=0; i<projectCells.length; i++) {
                projectCells[i].style.display = "none";
                var button = document.getElementsByClassName("category_3_button");
                for (var j=0; j<button.length; j++) {
                    button[j].style.backgroundColor = "black";
                    button[j].style.color = "white";
                }
                c3status = 0;
        }
    }
    else{
        for (var i=0; i<projectCells.length; i++) {
            projectCells[i].style.display = "unset";
            var button = document.getElementsByClassName("category_3_button");
            for (var j=0; j<button.length; j++) {
                button[j].style.backgroundColor = "white";
                button[j].style.color = "black";
            }
            c3status = 1;
        }
    }
}