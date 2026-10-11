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

//Extend collapse extended bio text
function CollapseExtendBio(thisButton) {
    const extendedBio = document.getElementById('extended-about-text');
    const expand = thisButton.getAttribute('aria-expanded') !== 'true';
    extendedBio.style.display = expand ? 'inline' : 'none';
    thisButton.setAttribute('aria-expanded', expand);
    thisButton.querySelector('.about-text-toggle-label').textContent = expand ? 'Less' : 'More about me';
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

//Scroll hint arrow at the bottom of the first screen
/**
 * Smoothly scrolls down to the project grid instead of jumping to the anchor.
 */
function ScrollToProjects(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Fades out the scroll hint arrow once the user has scrolled, as it is no longer needed.
 */
function HideScrollHint() {
    const scrollHint = document.getElementById('scroll-hint');
    if (scrollHint != null) scrollHint.classList.add('scroll-hint-hidden');
}
window.addEventListener('scroll', HideScrollHint, { once: true });

//Functions to run on index
RepositionFilterButtons();
//Play / pause the autoplaying portrait videos
//The two portrait videos take turns: each plays twice (with a last-frame hold
//between plays), then the other one takes over, and so on

/**
 * Returns the portrait video that is currently shown (the other one is hidden).
 */
function GetActivePortraitVideo() {
    return document.querySelector('.about-portrait-video:not([hidden])');
}

/**
 * Toggles the active portrait video between playing and paused and swaps
 * the button icon and label accordingly. Pausing also cancels a pending
 * restart while the video is holding its last frame.
 */
function TogglePortraitVideo(toggleButton) {
    const portraitVideo = GetActivePortraitVideo();
    const wrapper = document.getElementById('about-portrait-wrapper');
    const icon = toggleButton.querySelector('ion-icon');
    if (wrapper.userPaused) {
        wrapper.userPaused = false;
        portraitVideo.play(); // restarts from the beginning if the video had ended
        icon.setAttribute('name', 'pause');
        toggleButton.setAttribute('aria-label', 'Pause video');
    }
    else {
        wrapper.userPaused = true;
        clearTimeout(wrapper.restartTimeout);
        portraitVideo.pause();
        icon.setAttribute('name', 'play');
        toggleButton.setAttribute('aria-label', 'Play video');
    }
}

/**
 * Holds the last frame of the active portrait video for a few seconds before
 * playing again from the beginning (used for the initial start and every loop).
 * Once the active video has played twice, the other video is shown and played instead.
 */
function RestartPortraitVideoAfterHold() {
    const holdLastFrameMs = 10000;
    const playsPerPortraitVideo = 2;
    const wrapper = document.getElementById('about-portrait-wrapper');
    wrapper.restartTimeout = setTimeout(() => {
        let portraitVideo = GetActivePortraitVideo();

        //Swap to the other video after enough plays
        if (wrapper.playCount >= playsPerPortraitVideo) {
            const nextVideo = Array.from(document.querySelectorAll('.about-portrait-video'))
                .find(video => video != portraitVideo);
            portraitVideo.hidden = true;
            nextVideo.hidden = false;
            portraitVideo = nextVideo;
            wrapper.playCount = 0;
        }

        portraitVideo.currentTime = 0;
        portraitVideo.play();
    }, holdLastFrameMs);
}

/**
 * Counts a finished play of the active portrait video and starts the hold before the next one.
 */
function OnPortraitVideoEnded() {
    const wrapper = document.getElementById('about-portrait-wrapper');
    wrapper.playCount += 1;
    RestartPortraitVideoAfterHold();
}

/**
 * Shows the last frame of the first portrait video (it is sharper than the first)
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
    const wrapper = document.getElementById('about-portrait-wrapper');
    const portraitVideos = document.querySelectorAll('.about-portrait-video');
    if (wrapper != null && portraitVideos.length > 0) {
        wrapper.playCount = 0;
        const toggleButton = document.getElementById('about-portrait-toggle');
        portraitVideos.forEach(portraitVideo => {
            portraitVideo.addEventListener('ended', OnPortraitVideoEnded);
            portraitVideo.addEventListener('error', () => toggleButton.hidden = true);
        });
        //Only show the play/pause button once the video is actually playable
        portraitVideos[0].addEventListener('playing', () => toggleButton.hidden = false, { once: true });
        //Only start (and download) the videos on desktop, mobile shows the still image
        if (!window.matchMedia("(orientation: portrait)").matches) {
            portraitVideos[0].addEventListener('loadedmetadata', StartPortraitVideoOnLastFrame, { once: true });
            portraitVideos.forEach(portraitVideo => portraitVideo.preload = 'auto'); // buffer during the last-frame hold
        }
    }
}
