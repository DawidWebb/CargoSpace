class Add {
  constructor() {
    this.dimensions = [];

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
      console.log(this.dimensions);

      this.li = document.createElement("li");
      this.li.classList.add(this.dimensions.length);
      let id = this.li.classList.value;
      this.li.innerHTML = `${dimension.dim4} palet,  o wymiarach ${dimension.dim1} * ${dimension.dim2} <button>Usuń</button>`;
      quantity.appendChild(this.li);
      console.log(id);

      this.remove();
    } else {
      alert("Podaj wymagane wymiary...");
    }
  }

  remove = () => {
    document
      .querySelectorAll("li button")
      .forEach(item => item.addEventListener("click", this.delete));
  };

  delete = e => {
    console.log("OK");
    e.target.parentNode.remove();
  };
}
