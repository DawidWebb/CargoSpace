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

    const calcLdm = (dim1 * dim2 * dim4) / 10000 / this.tolatWidth;

    this.calcLdm.push(calcLdm);

    this.leftLdm();

    this.render(calc);
  }

  leftLdm = () => {
    if (this.calcLdm.length === 1) {
      const calc = this.totalLdm - this.calcLdm[0];
    } else {
      // const calc = this.totalLdm - this.totalLenght;
    }

    this.render(calc);
  };

  render = calc => {
    free.textContent = `Pozostało wolnych: ${calc} ldm (czyli około ${calc /
      0.4} euro palet)`;
  };
}
const calc = new Calc();
