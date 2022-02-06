class GoHomeController {
  constructor() {
    let $ = document.querySelector.bind(document);

    /* get navigation buttons */
    this._goHome = $("#home-btn");
  }

  navigate() {
    this._goHome.addEventListener("click", () => {
      location.href = "../../index.html";
    });
  }
}

const contact = new GoHomeController();

contact.navigate();
