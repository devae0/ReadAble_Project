document.addEventListener("DOMContentLoaded", () => {
    /* --- 1. LETTER BULGE LOGIC --- */
    const paragraph = document.querySelector('.dyslexia-friendly-p');
    if (paragraph) {
        const text = paragraph.innerText;
        const words = text.split(' ');
        paragraph.innerHTML = '';

        paragraph.innerHTML = words.map(word => {
            const letters = word.split('').map(char => {
                return `<span>${char}</span>`;
            }).join('');
            return `<span class="word">${letters}</span>`;
        }).join(' ');
    }

    /* --- 2. MODAL POP-UP LOGIC --- */
    const overlay = document.getElementById('modal-overlay');
    const closeBtns = document.querySelectorAll('.close-modal');

    // Function to show specific modal
    function showModal(id) {
        overlay.style.display = 'flex';
        document.getElementById(id).style.display = 'block';
    }

    // Function to hide everything
    function hideModals() {
        overlay.style.display = 'none';
        document.querySelectorAll('.modal-content').forEach(m => m.style.display = 'none');
    }

    // Event Listeners for Nav Buttons
    document.getElementById('btn-features').addEventListener('click', () => showModal('modal-features'));
    document.getElementById('btn-about').addEventListener('click', () => showModal('modal-about'));
    document.getElementById('btn-contact').addEventListener('click', () => showModal('modal-contact'));

    // Close on button click
    closeBtns.forEach(btn => btn.addEventListener('click', hideModals));

    // Close if clicking outside the modal content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) hideModals();
    });
});
