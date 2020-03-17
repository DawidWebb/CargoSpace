class Double {
  constructor() {
    document
      .getElementById("quantity5")
      .addEventListener("change", this.doubleStock);
  }

  doubleStock() {
    if (quantity5.checked === true) {
      return 2;
    } else if (quantity5.checked === false) {
      return 1;
    }
    console.log(this.number);
  }
}
const double = new Double();
