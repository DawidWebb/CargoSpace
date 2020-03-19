class App {
  constructor() {
    quantity5.addEventListener("click", this.checkDD);
  }
  checkDD = () => {
    console.log("okok");

    if (quantity3.value > 130 && quantity5.checked === true) {
      alert("Tej wysokości palet nie da się piętrować!");
      quantity5.checked = false;
    }
  };
}
const app = new App();
