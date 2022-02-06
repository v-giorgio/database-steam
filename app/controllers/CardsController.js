import CardsView from "../views/CardsView.js";

class CardsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    /* get CardsView */
    this.cardsView = new CardsView();

    /* get all category buttons */
    this._price = $("#price");
    this._ratings = $("#ratings");
    this._age = $("#age");
    this._language = $("#language");
    this._genres = $("#genres");
    this._launchDate = $("#launch-date");
    this._tags = $("#tags");
    this._developer = $("#developer");
    this._playtime = $("#playtime");
    this._description = $("#description");
    this._supp = $("#supp");
    this._downloads = $("#downloads");

    /* get cards section */
    this._cardSection = $("#card-section");

    /* get results title */
    this._resultTitle = $("#results-title");
  }

  findCards() {
    /* get price cards */
    this._price.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByPrice(this._cardSection);
    });

    /* get ratings cards */
    this._ratings.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByRatings(this._cardSection);
    });

    /* get age cards */
    this._age.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByAge(this._cardSection);
    });

    /* get language cards */
    this._language.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByLanguage(this._cardSection);
    });

    /* get genres cards */
    this._genres.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByGenres(this._cardSection);
    });

    /* get date cards */
    this._launchDate.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByDate(this._cardSection);
    });

    /* get tags cards */
    this._tags.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByTags(this._cardSection);
    });

    /* get developer cards */
    this._developer.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByDeveloper(this._cardSection);
    });

    /* get playtime cards */
    this._playtime.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByPlaytime(this._cardSection);
    });

    /* get description cards */
    this._description.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByDescription(this._cardSection);
    });

    /* get supp cards */
    this._supp.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findBySupp(this._cardSection);
    });

    /* get downloads cards */
    this._downloads.addEventListener("click", (event) => {
      event.preventDefault();
      this._resultTitle.classList.remove("invisible");
      this.cardsView.clearSection(this._cardSection);
      this.cardsView.findByDownloads(this._cardSection);
    });
  }
}

const cards = new CardsController();

cards.findCards();
