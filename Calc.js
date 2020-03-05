// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
    document.getElementById("free");
  }
  checkQuantity = () => {
    // return this.dimensions[{ dim2 }] * this.dimensions[{ dim4 }];
  };

  btnHandling() {
    const dimension = this.dimensions.slice(-1);
    const { id, dim1, dim2, dim3, dim4 } = dimension[0];

    const calc = (this.totalLenght - dim1 * dim4) / 100;
    this.totalLdm - calc;
    console.log(this.calcDimensions);

    this.render(calc);
    this.clear();
  }

  render = calc => {
    free.textContent = `Pozostało wolnych: ${calc} ldm (czyli około ${calc /
      0.4} euro palet)`;
  };
  clear = () => {};
}
const calc = new Calc();
