var oldCards = cards;
var cardsContainer = {};
cardsContainer.cards = [];

for (var i = 0; i < oldCards.length; i++) {
    cardsContainer.cards.push({
        title: oldCards[i].title,
        description: oldCards[i].description,
        color: oldCards[i].color,
        links: []
    });

    for (var j = 0; j < oldCards[i].links.length; j++) {
        cardsContainer.cards[i].links.push([
            oldCards[i].links[j].link,
            oldCards[i].links[j].linkText,
            oldCards[i].links[j].badgeColor,
            oldCards[i].links[j].badgeText,
            oldCards[i].links[j].badgeTextColor == null ? "" : oldCards[i].links[j].badgeTextColor
        ]);
    }
}

console.log(cardsContainer);