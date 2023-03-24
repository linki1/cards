
cardsArr = [];
cardstwo_ten = ["clubs", "spades", "diamonds", "hearts"];
let highCards = ['jack', 'queen', 'king', 'ace'];
let ransk = ['J', 'Q', 'k', 'A'];
let card = '';

for (let i = 2; i < 11; i++) {

    for (let j = 0; j < 4; j++) {
        card = `<div class='divds ' ><p class='textp'>${i}</p><img class="sizeimg" src="images/${cardstwo_ten[j]}.svg" ></div>`
        cardsArr.push(`<div class="cards">${card} ${card}</div>`)

    }

}

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        card = `<div class='divds ' ><p class='textp'>${ransk[j]}</p><img class="sizeimg" src="images/${cardstwo_ten[j]}.svg" ></div>`
        cardsArr.push(`<div class="cards">${card} <img class='imghighrang' src="images/${highCards[i]}.svg"> </img> ${card}</div>`)

    }

}
for (let i = 0; i < 1; i++) {

    for (let j = 0; j < 4; j++) {
        card = `<div class='divds ' ><p class='textp'>${ransk[j]}</p><img class="sizeimg" src="images/${cardstwo_ten[j]}.svg" ></div>`
        cardsArr.push(`<div class="cards">${card} <img class='imghighrang' src="images/${cardstwo_ten[j]}.svg"> </img> ${card}</div>`)

    }

}


document.writeln(cardsArr.join(""));