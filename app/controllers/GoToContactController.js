class GoToContactController {
  constructor() {
    let $ = document.querySelector.bind(document);

    /* get navigation buttons */
    this._goToContact = $("#contact");
  }

  navigate() {
    this._goToContact.addEventListener("click", () => {
      location.href = "../../pages/contact.html";
    });
  }
}

const contact = new GoToContactController();

contact.navigate();
