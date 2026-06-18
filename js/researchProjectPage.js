//Insert reference links across research page
const divsWithRef = document.querySelectorAll('div[ref]');

divsWithRef.forEach(element => {
    const refIds = element.getAttribute('ref').split(' ')
    refIds.forEach(refId => {
        const aTagRefLink = document.createElement('a');
        aTagRefLink.href = '#' + refId
        const refElement = document.getElementById(refId)
        const olParent = refElement.closest('ol');
        const refNumber = Array.from(olParent.children).indexOf(refElement) +1;
        aTagRefLink.text = ' [' + refNumber + ']'
        aTagRefLink.title = refElement.textContent.trim();
        aTagRefLink.classList.add('content_ref');
        element.appendChild(aTagRefLink)
    })
});

//Toggle visibility of the media_wrapper following a section_wrapper when clicked
document.querySelectorAll('.section_wrapper').forEach(sectionWrapper => {
    const mediaWrapper = sectionWrapper.nextElementSibling;
    if (!mediaWrapper || !mediaWrapper.classList.contains('media_wrapper')) return;

    sectionWrapper.classList.add('collapsible');
    sectionWrapper.addEventListener('click', () => {
        mediaWrapper.classList.toggle('hidden');
        sectionWrapper.classList.toggle('collapsed', mediaWrapper.classList.contains('hidden'));
    });
});