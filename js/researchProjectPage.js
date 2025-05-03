//Insert reference links across research page
const divsWithRef = document.querySelectorAll('div[ref]');

divsWithRef.forEach(element => {
    const aTagRefLink = document.createElement('a');
    const refId = element.getAttribute('ref')
    aTagRefLink.href = '#' + refId
    const refElement = document.getElementById(refId)
    const olParent= refElement.closest('ol');
    const refNumber = Array.from(olParent.children).indexOf(refElement) +1;
    aTagRefLink.text = ' [' + refNumber + ']'
    aTagRefLink.classList.add('content_ref');
    element.appendChild(aTagRefLink)
});