class Add extends Remove {
  constructor(props) {
    super(props);
    this.dimensions = [];
    this.calcLdm = [];
    // this.li = this.li;
    document
      .getElementById("add")
      .addEventListener("click", this.addData.bind(this));

    document.getElementById("clear").addEventListener("click", this.reset);
  }
  addData() {
    if (quantity4.value >= 1) {
      const dimension = {
        id: this.dimensions.length + 1,
        dim1: quantity1.value,
        dim2: quantity2.value,
        dim3: quantity3.value,
        dim4: quantity4.value
      };

      this.dimensions.push(dimension);

      this.li = document.createElement("li");
      this.li.classList.add(this.dimensions.length - 1);
      this.li.innerHTML = `${dimension.dim4} palet,  o wymiarach ${dimension.dim1} * ${dimension.dim2} <button>Usuń</button>`;
      quantity.appendChild(this.li);

      this.remove();
    } else {
      alert("Podaj wymagane wymiary...");
    }

    this.addLdm();
  }
  addLdm = () => {
    this.dimensions.forEach(element => {
      const { id, dim1, dim2, dim3, dim4 } = element;
      const actualLdm = (dim1 * dim2 * dim4) / 10000 / 2.4;

      if (id === this.dimensions.length) {
        this.calcLdm.push(actualLdm);
        console.log(actualLdm);
        console.log("DIM", this.dimensions);
        console.log("CALC", this.calcLdm);
      }
    });
  };
}
