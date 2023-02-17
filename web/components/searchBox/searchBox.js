const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import "../../styles/input.css";
    .container{
      width:80%;
      background: var(--c3);
      border: 1px solid rgba(0,0,0,0.2);
      box-shadow: 0px 4px 10px -1px rgba(0,0,0,0.2);
      border-radius: 20px;
      margin:auto;
      position:relative;
      padding:40px 60px;
    }
    form{
      display:flex;
      justify-content:space-between;
      gap:44px;
    }
    .submit{
      position:absolute;
      bottom:0;
      left:32px;
      margin:0;
      padding: 8px 32px;
      background: var(--c4);
      color: var(--c2);
      border-radius: 20px;
      font-size:14px;
      font-weight:bold;
      transform: translateY(50%);
      cursor: pointer;
      font-family: "Vazirmatn";
      border:none;
    }
    .dual-input{
      display:flex;
      gap:6px;
      align-items:center;
      flex: 1 1 0;
    }
    @media (max-width: 576px){
        .container{
            width:90%;
        }
        .submit{
            left: 50%;
            transform: translate(-50%,50%);
        }
    }
  </style>

<div class="container">
    <form>
      <div class="dual-input">
        <input type="text" name="origin" placeholder="مبدا"/>
        به
        <input type="text" name="destination"  placeholder="مقصد"/>
      </div>
      <div class="dual-input">
        <input type="text" name="origin" placeholder="تاریخ رفت"/>
        تا
        <input type="text" name="destination"  placeholder="تاریخ برگشت"/>
      </div>
      <count-input></count-input>
      <button type="submit" class="submit">مشاهده بلیط ها</button>
    </form>
</div>
`;

window.customElements.define(
  "search-box",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
      });
    }
  }
);
