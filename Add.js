class Add extends Remove {
  constructor(props) {
    super(props);

    this.dimensions = [];
    this.calcLdm = 0;

    document
      .getElementById("add")
      .addEventListener("click", this.addData.bind(this));
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
      this.li.innerHTML = `${dimension.dim4} palet,  o wymiarach ${dimension.dim1} * ${dimension.dim2}`;
      quantity.appendChild(this.li);

      this.remove();
    } else {
      return alert("Podaj wymagane wymiary...");
    }
    console.log(this.dimensions);

    this.addLdm();
  }
  addLdm = () => {
    this.double = new Double();
    let number = this.double.doubleStock();
    this.dimensions.forEach(element => {
      const { id, dim1, dim2, dim3, dim4 } = element;
      const actualLdm = (dim1 * dim2 * dim4) / 10000 / 2.4 / number;
      console.log(actualLdm);

      if (id === this.dimensions.length) {
        this.calcLdm = this.calcLdm + actualLdm;
      }
    });
  };
}
