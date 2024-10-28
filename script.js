const parentDiv = document.querySelector('.container');
const childDiv = document.querySelector('.box');

// Sizes for the parent and child
const parentWidth = parentDiv.clientWidth;
const parentHeight = parentDiv.clientHeight;
const childWidth = childDiv.offsetWidth;
const childHeight = childDiv.offsetHeight;

let topPos = parentHeight / 2 - childHeight / 2;
let leftPos = parentWidth / 2 - childWidth / 2;

// center the child div
childDiv.style.top = `${topPos}px`;
childDiv.style.left = `${leftPos}px`;

document.addEventListener('keydown', (event) => {
    // Determine new positions
    switch(event.key) {
        case 'ArrowUp':
            topPos = Math.max(0, topPos - 30);  // Move up if within bounds
            break;
        case 'ArrowDown':
            topPos = Math.min(parentHeight - childHeight, topPos + 30); // Move down if within bounds
            break;
        case 'ArrowLeft':
            leftPos = Math.max(0, leftPos - 30);  // Move left if within bounds
            break;
        case 'ArrowRight':
            leftPos = Math.min(parentWidth - childWidth, leftPos + 30); // Move right if within bounds
            break;
    }
    childDiv.style.top = `${topPos}px`;
    childDiv.style.left = `${leftPos}px`;
   //  Use requestAnimationFrame for smoother updates
    //  requestAnimationFrame(() => {
    //     childDiv.style.top = `${topPos}px`;
    //     childDiv.style.left = `${leftPos}px`;
    // });
});
