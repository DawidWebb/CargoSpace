// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
  }

  btnHandling() {
    this.leftLdm();
  }

  leftLdm = () => {};

  render = () => {};
}
const calc = new Calc();
