document.addEventListener('DOMContentLoaded', function() {
    const notForgiveButton = document.getElementById('not-forgive');
    const forgiveButton = document.getElementById('forgive');
    const noMessage = document.createElement('div');

    // Create tulip element
    const tulip = document.createElement('div');
    tulip.className = 'tulip';
    const tulipImg = document.createElement('img');
    tulipImg.src = 'https://www.example.com/path-to-your-tulip-image'; // Replace with your tulip image URL
    tulip.appendChild(tulipImg);
    document.body.appendChild(tulip);

    // Style for the NO message
    noMessage.style.position = 'absolute';
    noMessage.style.fontSize = '3rem';
    noMessage.style.color = '#ff69b4';
    noMessage.style.fontWeight = 'bold';
    noMessage.style.transition = 'opacity 0.5s';
    noMessage.style.opacity = '0'; // Initially hidden
    document.body.appendChild(noMessage);

    notForgiveButton.addEventListener('click', function() {
        moveButton();
        showNoMessage();
    });

    forgiveButton.addEventListener('click', function() {
        showTulip();
    });

    function moveButton() {
        const x = Math.floor(Math.random() * (window.innerWidth - notForgiveButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - notForgiveButton.clientHeight));
        notForgiveButton.style.position = 'absolute';
        notForgiveButton.style.left = `${x}px`;
        notForgiveButton.style.top = `${y}px`;
    }

    function showNoMessage() {
        noMessage.style.left = `${window.innerWidth / 2}px`;
        noMessage.style.top = `${window.innerHeight / 2}px`;
        noMessage.innerText = 'NO';
        noMessage.style.opacity = '1'; // Show NO message
        setTimeout(() => {
            noMessage.style.opacity = '0'; // Hide NO message after a short delay
        }, 1000);
    }

    function showTulip() {
        tulip.style.opacity = '1'; // Show the tulip animation
    }
});
