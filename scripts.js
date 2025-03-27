
// Instructions

// Given the page layout. Apply the following scenarios for interactivity.
// 1. When PET button is clicked, icon changes accordingly to corresponding state.
// 2. When PET ALL button is clicked, all PET button icon change into a solid icon.
// 3. When UNPET ALL button is clicked, all PET button icon change into a regular icon.
// 4. When Last button >> is clicked, the last card from the gallery will be highlighted.
// 5. When First button << is clicked, the first card from the gallery will be highlighted.
// 6. When Next button > is clicked, the highlighted card will be the next item from the currently selected.
//     * If the last item is currently selected, then next button is clicked, the highlight card will be moved to the first card from the gallery.
// 7. When Previous button < is clicked, the highlighted card will be the previous item from the currently selected.
//     * If the last item is currently selected, then next button is clicked, the highlight card will be moved to the first card from the gallery.
// 8. When Site Logo "BARK!-ada" from the banner is clicked, an animation will display on the site logo.
//     * Can reference to https://animate.style/
    
// Rules
// 1. Only use .querySelector() and querySelectorAll() for selecting elements.
// 2. Only use methods associated to classList when styling elements.
// 3. Only use addEventListener() for handling events.
// 4. Only use applicable DOM properties in traversing elements.
// 5. There is no expected changes in the HTML document.
// 6. There is no expected changes in the CSS document. You may have to apply the corresponding CSS classes based on the initial layout.

document.addEventListener('DOMContentLoaded', function() {
    const petButtons = document.querySelectorAll('.btn-full');
    const petAllBtn = document.querySelector('#btn-select-all');
    const unpetAllBtn = document.querySelector('#btn-unselect-all');
    const lastBtn = document.querySelector('#btn-select-last');
    const firstBtn = document.querySelector('#btn-select-first');
    const nextBtn = document.querySelector('#btn-select-next');
    const prevBtn = document.querySelector('#btn-select-previous');
    const siteLogo = document.querySelector('.banner-content');
    const cards = document.querySelectorAll('.card');
    
    let currentHighlightedIndex = 0;
    
    highlightCard(currentHighlightedIndex);
    
    petButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });
    
    petAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    });
    
    unpetAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
    });
    
    lastBtn.addEventListener('click', function() {
        currentHighlightedIndex = cards.length - 1;
        highlightCard(currentHighlightedIndex);
    });
    
    firstBtn.addEventListener('click', function() {
        currentHighlightedIndex = 0;
        highlightCard(currentHighlightedIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    
    prevBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex - 1 + cards.length) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    
    siteLogo.addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__heartBeat');
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__heartBeat');
        }, { once: true });
    });
    
    function highlightCard(index) {
        cards.forEach(card => {
            card.classList.remove('card-selected', 'active');
        });   
        cards[index].classList.add('card-selected', 'active');
        currentHighlightedIndex = index;
    }
});