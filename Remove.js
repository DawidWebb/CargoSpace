class Remove {
  constructor() {}

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

    console.log("DEL Dim.", this.dimensions);
    console.log("DEL Ldm", this.calcLdm);
  };
}
