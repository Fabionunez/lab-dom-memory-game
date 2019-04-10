var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []; //cards the user have clicked so we can compare them
  this.pairsClicked = 0; // initialized to 0?
  this.pairsGuessed = 0; // initialized to 0?

};

MemoryGame.prototype.shuffleCards = function () {

  var currentIndex = this.cards.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }


};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }

}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  }

  return false;

};