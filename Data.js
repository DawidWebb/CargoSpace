class Data extends Add {
  constructor(props) {
    super(props);
    // this.dimensions = this.dimensions;
    this.tolatWidth = 2.4;
    this.totalLenght = 1360;
    this.totalHeight = 275;
    this.totalLdm = 13.6;
    this.doubleStock = false;

    document
      .getElementById("clear")
      .addEventListener("click", this.clearAll.bind(this));
  }

  clearAll() {
    this.totalLdm = 13.6;
    this.doubleStock = false;
    this.calcLdm = [];
    this.dimensions = [];
    quantity.innerHTML = `<p>Załadowałeś:</p>`;
    free.innerHTML = `   <p>Pozostało miejsca:</p>`;
  }
}
