// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'mooth' });
}
// Add event listener to up arrow button
document.querySelector('.up-arrow-btn').addEventListener('click', scrollToTop);
// Add event listener to home button
document.querySelector('.nav-home-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'mooth' });
});
// Add animation to introduction section
document.querySelector('.intro-section').animate([
    { opacity: 0, transform: 'translateY(100px)' },
    { opacity: 1, transform: 'translateY(0px)' }
], {
    duration: 1000,
    easing: 'ease-in-out'
});
// Add animation to name and photo
document.querySelector('.name').animate([
    { opacity: 0, transform: 'translateY(100px)' },
    { opacity: 1, transform: 'translateY(0px)' }
], {
    duration: 1000,
    easing: 'ease-in-out'
});
document.querySelector('.photo').animate([
    { opacity: 0, transform: 'translateY(100px)' },
    { opacity: 1, transform: 'translateY(0px)' }
], {
    duration: 1000,
    easing: 'ease-in-out'
});