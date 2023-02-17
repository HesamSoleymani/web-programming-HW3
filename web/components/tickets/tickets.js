const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container{
        }
    </style>
    <div class="container">
      test tickets
    </div>
`;

window.customElements.define(
  "tickets-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
