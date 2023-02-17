const template = document.createElement("template");
template.innerHTML = `
  <style>
    .footer {
      background: var(--c3);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 30px 0;
    }
  </style>

  <div class="footer">
  برنامه سازی وب - پاییز ۱۴۰۱ 
  </div>
`;

window.customElements.define(
  "footer-component",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
