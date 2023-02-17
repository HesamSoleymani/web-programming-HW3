const template = document.createElement("template");
template.innerHTML = `
  <style>
    .container {
        padding: 15px;
        font-size: 14px;
        background: var(--c2);
        border: 2px solid var(--c10);
        border-radius: 12px;
        color: var(--c1);
        font-family: "Vazirmatn";
        display:flex;
    }
    input{
        min-width: 0;
        text-align:center;
        border:none;
        font-family: "Vazirmatn";
    }
    input:focus{
      outline: none;
    }
    .container:focus-within{
      border: 2px solid var(--c1);
    }
    img{
      cursor:pointer;
    }
  </style>

  <div class="container">
    <img id="plus" src="../../assets/svgs/plus.svg"/>
    <input id="ii" type="text" placeholder="تعداد مسافرین"/>
    <img id="minus" src="../../assets/svgs/minus.svg"/>
  </div>
`;

window.customElements.define(
  "count-input",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }

    value = 0;

    format() {
      this.setAttribute("value", this.value);
      this.shadowRoot.querySelector("input").value = `${this.value
        .toString()
        .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} مسافر`;
    }

    unformat() {
      this.setAttribute("value", this.value);
      this.shadowRoot.querySelector("input").value = this.shadowRoot
        .querySelector("input")
        .value.replace(" مسافر", "");
    }

    connectedCallback() {
      const plus = this.shadowRoot.getElementById("plus");
      const minus = this.shadowRoot.getElementById("minus");
      const input = this.shadowRoot.querySelector("input");
      plus.addEventListener("click", () => {
        this.value = this.value + 1;
        this.format();
      });
      minus.addEventListener("click", () => {
        if (this.value <= 1) return;
        this.value = this.value - 1;
        this.format();
      });
      input.addEventListener("change", () => {
        this.value = parseInt(
          input.value.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        );
      });
      input.addEventListener("focus", () => {
        this.unformat();
      });
      input.addEventListener("blur", () => {
        this.format();
      });
    }
  }
);
