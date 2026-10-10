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
        thisButton.textContent = '. . .';
    }
    else {
        extendedBio.style.display = "inline";
        thisButton.textContent = '. . .';
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
//Play / pause the autoplaying portrait video
/**
 * Toggles the portrait video between playing and paused and swaps
 * the button icon and label accordingly. Pausing also cancels a pending
 * restart while the video is holding its last frame.
 */
function TogglePortraitVideo(toggleButton) {
    const portraitVideo = document.getElementById('about-portrait');
    const icon = toggleButton.querySelector('ion-icon');
    if (portraitVideo.userPaused) {
        portraitVideo.userPaused = false;
        portraitVideo.play(); // restarts from the beginning if the video had ended
        icon.setAttribute('name', 'pause');
        toggleButton.setAttribute('aria-label', 'Pause video');
    }
    else {
        portraitVideo.userPaused = true;
        clearTimeout(portraitVideo.restartTimeout);
        portraitVideo.pause();
        icon.setAttribute('name', 'play');
        toggleButton.setAttribute('aria-label', 'Play video');
    }
}

/**
 * Holds the last frame of the portrait video for a few seconds before
 * playing it from the beginning (used for the initial start and every loop).
 */
function RestartPortraitVideoAfterHold() {
    const holdLastFrameMs = 5000;
    const portraitVideo = document.getElementById('about-portrait');
    portraitVideo.restartTimeout = setTimeout(() => {
        portraitVideo.currentTime = 0;
        portraitVideo.play();
    }, holdLastFrameMs);
}

/**
 * Shows the last frame of the portrait video (it is sharper than the first)
 * and starts the hold-and-play cycle from there.
 */
function StartPortraitVideoOnLastFrame() {
    const portraitVideo = document.getElementById('about-portrait');
    //Seek just before the end so the 'ended' event does not fire
    portraitVideo.currentTime = Math.max(0, portraitVideo.duration - 0.001);
    RestartPortraitVideoAfterHold();
}

//Block scoped because this file is included twice in index.html (head + body end)
{
    const portraitVideo = document.getElementById('about-portrait');
    if (portraitVideo != null) {
        portraitVideo.addEventListener('ended', RestartPortraitVideoAfterHold);
        //Only show the play/pause button once the video is actually playable
        const toggleButton = document.getElementById('about-portrait-toggle');
        portraitVideo.addEventListener('playing', () => toggleButton.hidden = false, { once: true });
        portraitVideo.addEventListener('error', () => toggleButton.hidden = true);
        //Only start (and download) the video on desktop, mobile shows the still image
        if (!window.matchMedia("(orientation: portrait)").matches) {
            portraitVideo.addEventListener('loadedmetadata', StartPortraitVideoOnLastFrame, { once: true });
            portraitVideo.preload = 'auto'; // buffer during the last-frame hold
        }
    }
}
