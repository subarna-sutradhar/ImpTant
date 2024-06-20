document.addEventListener('DOMContentLoaded', function() {
    const notForgiveButton = document.getElementById('not-forgive');
    const forgiveButton = document.getElementById('forgive');
    const noMessage = document.createElement('div');

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
        alert("Thank you for forgiving!");
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
});
