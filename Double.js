class Double extends Add {
  constructor(props) {
    super(props);
    document
      .getElementById("quantity5")
      .addEventListener("change", this.doubleStock);
  }

  doubleStock = () => {
    if (quantity5.checked === true) {
      this.double = 2;
    } else {
      this.double = 1;
    }
  };
}
