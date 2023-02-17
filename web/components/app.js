const template = document.createElement("template");
template.innerHTML = `
  <style>
    .container{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  </style>
  <div class="container">
      <header-component id="header" menu="login"></header-component>
        <slot name="page"></slot>
      <footer-component></footer-component>
  </div>
`;

const pages = ["home", "tickets", "login", "register", "panel"];

window.customElements.define(
  "app-component",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
      this.changePage();
    }

    changePage() {
      const urlParams = new URLSearchParams(window.location.search);
      const pageName = urlParams.has("page")
        ? pages.includes(urlParams.get("page"))
          ? urlParams.get("page")
          : "notfound"
        : "home";
      this.shadowRoot.getElementById("header").setAttribute("menu", pageName);
      document.getElementById(this.nodeName).innerHTML = `
          <${pageName}-page slot="page" class="page"></${pageName}-page>
  `;
    }

    connectedCallback() {
      this.shadowRoot.addEventListener("page-changed", () => {
        this.changePage();
      });
    }

    disabledCallback() {
      this.shadowRoot.removeEventListener("page-changed");
    }
  }
);
