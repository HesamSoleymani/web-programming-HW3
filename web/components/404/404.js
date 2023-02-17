const template = document.createElement("template");
template.innerHTML = `
    <style>
        .container{
            width:100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }
        .title{
            margin: 0;
        }
        .description{
            margin: 0;
        }
    </style>
    <div class="container">
        <h1 class="title">
            ۴۰۴
        </h1>
        <p class="description">
            صفحه مورد نظر پیدا نشد
        </p>
    </div>
`;

window.customElements.define(
  "notfound-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
