
    const arrowNext = document.getElementById('next');
    const arrowPrev = document.getElementById('previous');
    const cards = document.querySelectorAll('.card');
    let selecteds = 0;

    function hiddeSelected() {
        const selectedCard = document.querySelector('.selected');
        selectedCard.classList.remove('selected');
    }

    function showSelected (indiceCard) {
        cards[indiceCard].classList.add('selected');
    }

    arrowNext.addEventListener('click', () => {
        if (selecteds === cards.length - 1) return;
    
        hiddeSelected();

        selecteds++;
        showSelected(selecteds);
    });


    arrowPrev.addEventListener('click', () => {
        if (selecteds === 0) return;

       hiddeSelected();

        selecteds--;
        showSelected(selecteds);
    });

