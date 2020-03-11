// https://www.mw-spedition.com/czym-jest-ldm-i-jak-przeliczac-wedlug-niego-wielkosc-towaru/

class Calc extends Data {
  constructor(props) {
    super(props);

    document
      .getElementById("calk")
      .addEventListener("click", this.btnHandling.bind(this));
  }

  btnHandling() {
    // for (let i = 0; i < this.dimensions.lenght; i++) {
    //   this.calcLdm =
    //     (this.dimensions[i].dim1 *
    //       this.dimensions[i].dim2 *
    //       this.dimensions[i].dim4) /
    //     10000 /
    //     2.4;
    // }
    // const i = this.dimensions[{}];
    // const dim1 = this.dimensions[{ dim1 }];
    // const dim2 = this.dimensions[{ dim2 }];
    // const dim4 = this.dimensions[{ dim4 }];

    // const calcLdm = (dim1 * dim2 * dim4) / 10000 / 2.4;

    // this.dimensions.forEach(i => (i = this.calcLdm.push(calcLdm)));

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
