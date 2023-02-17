const template = document.createElement("template");
template.innerHTML = `
<style>
.main-container{
  position: relative;
}

.form-container{
  max-width: 450px;
  margin: auto;
  background-color: var(--c2);
  overflow: hidden;
  padding: 50px;
  color: var(--c2);
  border-radius: 3px;
}

.the-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.the-form [type="text"],
.the-form [type="email"],
.the-form [type="password"] {
  padding: 15px;
  font-size: 16px;
  background: var(--c2);
  border: 2px solid var(--c10);
  border-radius: 12px;
  margin-bottom: 15px;
  transition: background 0.3s;
  color: var(--c11);
  font-family: "Vazirmatn";
}

.the-form [type="text"]::placeholder,
.the-form [type="email"]::placeholder,
.the-form [type="password"]::placeholder {
  color: var(--c5);
}

.the-form [type="text"]:hover,
.the-form [type="email"]:hover,
.the-form [type="password"]:hover{
  background: rgba(0, 0, 0, 0.1);
}

.the-form [type="text"]:focus,
.the-form [type="email"]:focus,
.the-form [type="password"]:focus {
  background: var(--c2);
  border-color: var(--c6);
  color: var(--c7);
}

#passport_number:focus{
  direction:ltr;
}

.the-form [type="text"]:focus::placeholder,
.the-form [type="email"]:focus::placeholder,
.the-form [type="password"]:focus::placeholder {
  color: var(--c8);
}

.the-form [type="submit"] {
  background: #18465A;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 18px;
  font-size: 20px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 20px;
  color: var(--c2);
  font-family: "Vazirmatn";
}

.the-form [type="hyper_link"] {
  margin: auto;
  padding: 15px;
  text-decoration: none;
  color: var(--c10);
  font-family: "Vazirmatn";
}
</style>

<div class="main-container">
    <div class="form-container">
        <div class="the-form">
            <input type="text" name="name" id="name" placeholder="نام">

            <input type="text" name="last_name" id="last_name" placeholder="نام خانوادگی">

            <input type="text" name="passport_number" id="passport_number" placeholder="شماره گذرنامه">

            <input type="email" name="email" id="email" placeholder="پست الکترونیکی">

            <input type="password" name="password" id="password" placeholder="رمز عبور">

            <input type="text" name="repeat_password" id="repeat_password" placeholder="تکرار رمز عبور">

            <button type="submit">ثبت‌ نام</button>

            <a type="hyper_link" href="#">وارد شوید</a>
        </div>
    </div>
</div>
`;

window.customElements.define(
  "register-page",
  class extends HTMLElement {
    constructor() {
      super()
        .attachShadow({ mode: "open" })
        .appendChild(template.content.cloneNode(true));
    }
  }
);
