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
    const dimension = {
      id: this.dimensions.length,
      dim1: quantity1.value,
      dim2: quantity2.value,
      dim3: quantity3.value,
      dim4: quantity4.value
    };

    this.dimensions.push(dimension);

    if (quantity4.value >= 1) {
      this.li = document.createElement("li");
      this.li.innerHTML = `${quantity4.value} palet,  o wymiarach ${quantity1.value} * ${quantity2.value}  <button>Usuń</button>`;

      this.render();

      quantity.appendChild(this.li);

      this.li.addEventListener("click", this.delete);
    } else {
      alert("Podaj wymagane wymiary...");
    }
  }
  render = () => {
    this.li.textContent = "";
    this.dimensions.forEach((dimension, key) => {
      dimension.id = key;
      quantity.appendChild(dimension);
    });
  };

  delete = e => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    this.dimensions.splice(index, 1);

    this.render();
  };
}
