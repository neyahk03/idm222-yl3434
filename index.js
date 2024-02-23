

const cardList = ['card1', 'card2', 'card3', 'card4'];
const contentList = ['#content-desktop1', '#content-desktop2', '#content-desktop3', '#content-desktop4'];

function makeActive(x) {
    const card = x.id;
    for (let i = 0; i < cardList.length; i++) {
        if (card == cardList[i]) {
            console.log(i);
            const contentHover = document.querySelector(contentList[i]);
            contentHover.classList.add('active');
        }
    }
}

function undo(x) {
    const card = x.id;
    for (let i = 0; i < cardList.length; i++) {
        if (card == cardList[i]) {
            console.log(i);
            const contentHover = document.querySelector(contentList[i]);
            contentHover.classList.remove('active');
        }
    }
}

