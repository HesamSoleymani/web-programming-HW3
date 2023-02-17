const template = document.createElement("template");
template.innerHTML = `
  <style>
    .header {
      background: var(--c3);
      width: 100%;
      padding: 30px 0;
    }
    .container{
      width:80%;
      margin:auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      height: 44px;
      width:172px;
      position:absolute;
      left:50%;
      transform: translateX(-50%);
    }
    .menu{
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap:32px;
    }
    .active-menu{
      font-weight: bold;
    }
    li{
      cursor:pointer;
    }
    .header-sm{
      display:none;
      text-align:center;
    }
    .logo-sm{
      margin:24px auto;
      position: relative;
    }
    @media (max-width: 576px){
      
    .header-sm{
      display:block;
    }
      .header{
        display:none;
      }
      .menu{
        gap:16px;
        justify-content:center;
        min-width:100%;
        background: var(--c3);
        padding:12px 0;
      }
    }
  </style>

  <div class="header">
    <div class="container">
    <img class="logo" src="../../assets/svgs/logo.svg"/>
      <ul class="menu">
        <li data-page="home">
          خانه
        </li>
        <li data-page="tickets">
          جست‌وجوی بلیط
        </li>
      </ul>
      <ul class="menu">
        <li data-page="login">
          ورود
        </li>
        <li data-page="register">
          ثبت نام
        </li>
      </ul>
    </div>
  </div>
  <div class="header-sm">
  <img class="logo-sm" src="../../assets/svgs/logo.svg"/>
    <ul class="menu">
      <li data-page="home">
        خانه
      </li>
      <li data-page="tickets">
        جست‌وجوی بلیط
      </li>
      <li data-page="login">
        ورود
      </li>
      <li data-page="register">
        ثبت نام
      </li>
    </ul>
  </div>
`;

window.customElements.define(
  "header-component",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["menu"];
    }

    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }

    setActiveMenu() {
      if (this.getAttribute("menu"))
        this.shadowRoot.querySelectorAll("li").forEach((item) => {
          item.dataset.page === this.getAttribute("menu")
            ? item.classList.add("active-menu")
            : item.classList.remove("active-menu");
        });
    }

    connectedCallback() {
      this.shadowRoot.querySelectorAll("li").forEach((item) =>
        item.addEventListener("click", (e) => {
          history.pushState(
            {},
            "",
            `${window.location.origin}?page=${e.target.dataset.page}`
          );
          this.dispatchEvent(
            new CustomEvent("page-changed", {
              bubbles: true,
            })
          );
        })
      );
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "menu") this.setActiveMenu();
    }
  }
);
