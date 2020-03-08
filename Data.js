class Data extends Add {
  constructor(props) {
    super(props);
    this.dimensions = this.dimensions;
    this.tolatWidth = 2.4;
    this.totalLenght = 1360;
    this.totalHeight = 275;
    this.totalLdm = 13.6;
    this.doubleStock = false;
    this.calcLdm = [];
    document
      .getElementById("clear")
      .addEventListener("click", this.clearAll.bind(this));
    document.getElementById("free");
    // document
    //   .querySelector("#quantity li button")
    //   .addEventListener("click", this.deleteOne.bind(this));
  }

  clearAll() {
    this.totalLdm = 13.6;
    this.doubleStock = false;
    this.calcLdm = [];
    quantity.innerHTML = `<p>Załadowałeś:</p>`;
    free.innerHTML = `   <p>Pozostało miejsca:</p>`;
  }

  deleteOne() {
    console.log("ok");
  }
}
