const template = document.createElement("template");
template.innerHTML = `
  <style>
    .container {
        border-radius:20px;
        background-size:cover;
        background-position:center;
        height: 220px;
        position:relative;
        cursor: pointer;
    }
    .title{
        position: absolute;
        bottom:0;
        width:100%;
        padding: 8px 0;
        text-align:center;
        margin:0;
        border-radius: 0 0 20px 20px;
        color:white;
        background: rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 576px){
        .container{
            height:240px;
        }
    }
  </style>

  <div class="container" id="cover">
    <h5 class="title" id="title">
    </h5>
  </div>
`;

window.customElements.define(
  "post-cover",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.getElementById(
        "cover"
      ).style.backgroundImage = `url("${this.getAttribute("src")}")`;
      this.shadowRoot.getElementById("title").innerHTML =
        this.getAttribute("title");
    }
  }
);
