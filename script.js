document.addEventListener('DOMContentLoaded', function() {
    const forgiveButton = document.getElementById('forgive');
    const tulipOverlay = document.getElementById('tulip-overlay');

    forgiveButton.addEventListener('click', function() {
        showTulip();
    });

    function showTulip() {
        tulipOverlay.style.display = 'flex'; // Show the tulip overlay
    }
});
