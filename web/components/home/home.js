const template = document.createElement("template");
template.innerHTML = `
    <style>
        .search-wrapper{
          position: relative;
        }
        .search{
          width:100%;
          position: absolute;
          bottom: 0;
          right:50%;
          transform: translate(50%,50%);
        }
        img{
          width:100%;
        }
        .blog-posts{
          width:80%;
          margin:120px auto 40px auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap:40px;
          grid-row-gap:30px;
        }
        @media (max-width: 576px){
          .blog-posts{
            width:90%;
            grid-template-columns: 1fr;
          }
        }
    </style>
    <div class="search-wrapper">
      <img src="../../assets/images/sky.jpg" />
      <search-box class="search"></search-box>
    </div>
    <div class="blog-posts">
      <post-cover src="../../assets/images/blogPostsCovers/1.jpg" title="عنوان مطلب ۱"></post-cover>
      <post-cover src="../../assets/images/blogPostsCovers/2.jpg" title="عنوان مطلب ۲"></post-cover>
      <post-cover src="../../assets/images/blogPostsCovers/3.jpg" title="عنوان مطلب ۳"></post-cover>
    </div>
`;

window.customElements.define(
  "home-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
