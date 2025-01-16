//Project category filter
function FilterProjects(categoryToFilter, filterButton) {
    //Filter projects
    const projects = document.querySelectorAll('.grid-container a[project-category]');
    projects.forEach(project => {
        project.style.display = "unset";
        if(categoryToFilter == '') return
        else if(project.getAttribute('project-category') != categoryToFilter){
            project.style.display = "none";
        }
    });
    //Reset all filter button styles to non active
    const siblingFilter = Array.from(filterButton.parentNode.children).filter(p => p != filterButton);
    siblingFilter.forEach( filter => {
        filter.style = "";
    });
    RepositionFilterButtons();
    //Change correct filter button style to active
    filterButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light-light-grey');
    filterButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--black-0-hard');
    filterButton.style.outline = "none";
}

//Extend collapse extended bio text on mobile
function CollapseExtendBio(thisButton) {
    const extendedBio = document.getElementById('extended-about-text');
    if(extendedBio.style.display == "inline") {
        extendedBio.style.display = "none";
        thisButton.textContent = 'read more';
    }
    else {
        extendedBio.style.display = "inline";
        thisButton.textContent = 'show less';
    }
}

//Move all filter buttons to end of grid row desktop
function RepositionFilterButtons() {
    const filterButtons = document.querySelectorAll('.project-overview-wrapper .category-filter-wrapper .filter-button');
    for (let i = 0; i < filterButtons.length; i++) {
        const reversedPos = (filterButtons.length+1)-i;
        filterButtons[i].style.gridColumn = -reversedPos.toString();
        filterButtons[i].style.gridRow = '1';
    }
}

// Switches between thumbnail video and thumbnail image on mouse hover and mouse out when screen horizontal
if (!window.matchMedia("(orientation: portrait)").matches){
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.project-cell').forEach(function(cell) {
            cell.addEventListener('mouseover', function() {
                cell.querySelector('video').style.display = 'block';
                cell.querySelector('img').style.display = 'none';
            });
            cell.addEventListener('mouseout', function() {
                cell.querySelector('video').style.display = 'none';
                cell.querySelector('img').style.display = 'block';
            });
        });
    });
}

//Functions to run on index
RepositionFilterButtons();