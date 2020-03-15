// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
    document.getElementById("freeSpan");
    document.getElementById("freeSpan2");
  }

  btnHandling() {
    const leftLdm = this.totalLdm - this.calcLdm;

    this.leftLdm(leftLdm);
    console.log(leftLdm);
  }

  leftLdm = leftLdm => {
    freeSpan.textContent = `${leftLdm} Ldm `;
    freeSpan2.textContent = `To około ${Math.floor(leftLdm / 0.4)} palet euro`;
  };
}
const calc = new Calc();
