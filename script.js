document.addEventListener('DOMContentLoaded', function() {
    const notForgiveButton = document.getElementById('not-forgive');
    const forgiveButton = document.getElementById('forgive');
    const noMessage = document.createElement('div');

    // Style for the NO message
    noMessage.style.position = 'absolute';
    noMessage.style.fontSize = '3rem';
    noMessage.style.color = '#444'; /* Dark gray color */
    noMessage.style.fontWeight = 'bold';
    noMessage.style.transition = 'opacity 0.5s';
    noMessage.style.opacity = '0'; // Initially hidden
    document.body.appendChild(noMessage);

    notForgiveButton.addEventListener('click', function() {
        moveButton();
        showNoMessage();
    });

    forgiveButton.addEventListener('click', function() {
        showLoveMessage();
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

    function showLoveMessage() {
        const loveMessage = document.createElement('div');
        loveMessage.innerHTML = '&#x1F337; <br> I Love You';
        loveMessage.style.position = 'absolute';
        loveMessage.style.fontSize = '3rem';
        loveMessage.style.color = '#D2691E'; /* Chocolate brown color */
        loveMessage.style.fontWeight = 'bold';
        loveMessage.style.left = `${window.innerWidth / 2}px`;
        loveMessage.style.top = `${window.innerHeight / 2}px`;
        loveMessage.style.textAlign = 'center';
        loveMessage.style.transition = 'opacity 0.5s';
        loveMessage.style.opacity = '0'; // Initially hidden
        document.body.appendChild(loveMessage);

        setTimeout(() => {
            loveMessage.style.opacity = '1'; // Show love message
            forgiveButton.style.display = 'none'; // Hide Forgive button
            notForgiveButton.style.display = 'none'; // Hide Not Forgive button
        }, 100);

        setTimeout(() => {
            loveMessage.style.opacity = '0'; // Hide love message after a few seconds
            setTimeout(() => {
                loveMessage.remove(); // Remove the element from DOM
            }, 500);
        }, 3000);
    }
});
