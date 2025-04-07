document.addEventListener("DOMContentLoaded", function() {
    const animateBtn = document.getElementById('animateBtn');
    const savePreferenceBtn = document.getElementById('savePreferenceBtn');
    const box = document.getElementById('box');

    // Retrieve user preference from localStorage
    if (localStorage.getItem('animationPreference') === 'true') {
        box.classList.add('animateBox'); // Apply animation if preference is saved
    }

    // Function to trigger animation
    animateBtn.addEventListener('click', function() {
        box.classList.add('animateBox');
    });

    // Function to save the user's preference for animation
    savePreferenceBtn.addEventListener('click', function() {
        const isAnimated = box.classList.contains('animateBox');
        localStorage.setItem('animationPreference', isAnimated);
        alert('Animation preference saved!');
    });
});
