document.addEventListener('DOMContentLoaded', function() {
    const notForgiveButton = document.getElementById('not-forgive');
    const forgiveButton = document.getElementById('forgive');
    
    notForgiveButton.addEventListener('click', function() {
        moveButton();
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
});
