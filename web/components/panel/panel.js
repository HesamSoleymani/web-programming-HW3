const template = document.createElement("template");
template.innerHTML = `
    test panel
`;

window.customElements.define(
  "panel-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
