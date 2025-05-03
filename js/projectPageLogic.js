// Switch color of items to match dark or bright theme of project page
const classesToSwap = [
".project_headline",
".project_description",
".project_details",
".home_button",
"#partner_link",
"#partner_link_bright_important"]  

function ApplyAppearance(){
    let color = "#000000";
    if (document.body.style.backgroundColor === "rgb(0, 0, 0)"){
        color = "#ffffff";
    }
    classesToSwap.forEach(selector => {
        const elementsByClass = document.querySelectorAll(selector);
        Array.from(elementsByClass).forEach(element => {
            element.style.color = color; 
        });
    });
}

ApplyAppearance();