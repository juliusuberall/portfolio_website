//Project category filter
function FilterProjects(categoryToFilter, filterButton) {
    //Filter projects
    const projects = document.querySelectorAll('.project_grid_wrapper a[project-category]');
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

//Functions to run on index
RepositionFilterButtons();