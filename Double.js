class Double {
  constructor() {
    document;

    document.getElementById("add").addEventListener("click", this.checkDD);
  }

  checkDD = () => {
    if (quantity5.checked === false) {
      return 1;
    } else if (
      quantity3.value <= 130 &&
      quantity4.value % 2 === 1 &&
      quantity5.checked === true
    ) {
      return 2;
    } else if (
      quantity3.value <= 130 &&
      quantity4.value % 2 === 0 &&
      quantity5.checked === true
    ) {
      return 2;
    }
  };
}

const double = new Double();
