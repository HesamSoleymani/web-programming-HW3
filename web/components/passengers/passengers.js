const template = document.createElement("template");
template.innerHTML = `
    test passengers
`;

window.customElements.define(
  "passengers-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
