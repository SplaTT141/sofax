import { mainRow2Data } from "../../data/main-row2Data.js";

export function mainRow2() {
  let pHTML = '';

  for (const p of mainRow2Data) {
    pHTML += `
        <div class="checkmarks-content">
            <img src="./img/icon5v6.png" alt="logo" />
            <p>${p}</p>
        </div>`;
  }

  const HTML = `
<div class="row">
  <div class="container">
    <div class="row">
      <div class="main-row2">
        <div class="main-row2-image col-12 col-md-8 col-lg-6 col-xl-5 m-xl-1">
          <img src="./img/image3v8.png" alt="logo" />
        </div>
        <div class="main-row2-text col-lg-6">
          <h1>Easy solutions to for your IT problems</h1>
          <p>Here are some comprehensive IT business solutions tailored to enhance efficiency to the security and to productivity in your organization.</p>
            <div class="checkmarks">
                ${pHTML}
            </div>
            <button class="pink baltas">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  document

    .getElementById('app')

    .insertAdjacentHTML('beforeend', HTML);

}
