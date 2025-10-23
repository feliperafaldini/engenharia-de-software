class FormSwitcher {
  constructor(btn1Id, btn2Id, form1Id, form2Id) {
    this.btn1 = document.getElementById(btn1Id);
    this.btn2 = document.getElementById(btn2Id);
    this.form1 = document.getElementById(form1Id);
    this.form2 = document.getElementById(form2Id);

    if (!this.btn1 || !this.btn2 || !this.form1 || !this.form2) {
      console.error("IDs inválidos no FormSwitcher");
      return;
    }

    this.#initEvents();
  }

  #activate(activeBtn, inactiveBtn, activeForm, inactiveForm) {
    activeBtn.classList.add("active");
    inactiveBtn.classList.remove("active");
    activeForm.classList.add("active");
    inactiveForm.classList.remove("active");
  }

  #initEvents() {
    this.btn1.addEventListener("click", () => {
      this.#activate(this.btn1, this.btn2, this.form1, this.form2);
    });

    this.btn2.addEventListener("click", () => {
      this.#activate(this.btn2, this.btn1, this.form2, this.form1);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new FormSwitcher("btnForm1", "btnForm2", "form1", "form2");
});
