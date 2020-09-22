// Get DOM Elements
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


// Add Event Listners
// 1. Toggle the Nave
toggle.addEventListener('click', () => 
    document.body.classList.toggle('show-nav')
);


// 2. Show the Modal
open.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

// 3. Close the Modal
close.addEventListener('click', () =>
    modal.classList.remove('show-modal')
);

// 4. Close the modal on click the out side modal
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);

