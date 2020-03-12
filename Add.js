class Add {
  constructor() {
    this.dimensions = [];
    this.calcLdm = [];
    this.li = this.li;
    document
      .getElementById("add")
      .addEventListener("click", this.addData.bind(this));

    document.getElementById("clear").addEventListener("click", this.reset);
  }
  addData() {
    if (quantity4.value >= 1) {
      const dimension = {
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
    this.dimensions.forEach(element => {
      const { dim1, dim2, dim3, dim4 } = element;
      let actualLdm = (dim1 * dim2 * dim4) / 10000 / 2.4;
      this.calcLdm.push(actualLdm);
      console.log(actualLdm);

      console.log(this.calcLdm);
    });
  }
  remove = () => {
    document
      .querySelectorAll("li button")
      .forEach(item => item.addEventListener("click", this.delete));
  };

  delete = e => {
    e.target.parentNode.remove();
    const ids = e.target.parentNode.classList.value;
    this.dimensions.splice(ids, 1);
    this.calcLdm.splice(ids, 1);
    console.log(e.target.parentNode.classList.value);

    console.log("DEL", this.dimensions);
    console.log("DEL", this.calcLdm);
  };
}
