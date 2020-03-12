// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
  }

  btnHandling() {
    this.dimensions.forEach(element => {
      const { dim1, dim2, dim3, dim4 } = element;
      const actualLdm = (dim1 * dim2 * dim4) / 10000 / 2.4;
      this.calcLdm.push(actualLdm);
      console.log(this.calcLdm);
    });
    this.leftLdm();
  }

  leftLdm = () => {
    const calcLdm = this.totalLdm - this.calcLdm.slice(-1);
    free.textContent = `Pozostało wolnych: ${Math.round(
      calcLdm
    )} ldm (czyli około ${Math.round(calcLdm / 0.4)} euro palet)`;

    this.totalLdm = calcLdm;
    console.log(this.totalLdm);
  };

  render = () => {};
}
const calc = new Calc();
