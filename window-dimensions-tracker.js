document.addEventListener("DOMContentLoaded", function () {

    // Create HTML elements and apply styles

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.backgroundColor = 'rgba(255,255,255,.7)';
    container.style.padding = '5px';

    const number = document.createElement('span');
    number.style.color = 'black';
    number.style.fontSize = '14px';


    // Function to update the width, height of the browser window, and body height

    function updateWindowSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        number.textContent = `${width} x ${height}, Body Height: ${bodyHeight}px`;
    }


    // Update the browser window dimensions on page load and when the window is resized

    window.addEventListener('load', updateWindowSize);
    window.addEventListener('resize', updateWindowSize);

    
    // Add elements to the page

    container.appendChild(number);
    document.body.appendChild(container);

});