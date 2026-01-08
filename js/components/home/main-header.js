export function mainHeader() {
  

  const data = [
    {
      imgSrc: './img/icon1v8.png',
      title: 'Best Services',
      desc: 'Thorough problemsolving to prevent recurrence.'
    },
    {
      imgSrc: './img/icon2v8.png',
      title: '24/7 Call Support',
      desc: 'Our teams available to 24 hours and 7 days a week.'
    },
  ];

  let HTML1 = ``;

  for (const item of data) {
    HTML1 += `
              <div class="features">
                <div class="feature-column">
                  <div class="feature-image">
                    <img src="${item.imgSrc}" alt="picture">
                  </div>
                  <div class="feature-content">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                  </div>
                </div>`};

  const HTML = `
   <main class="container header-color">
    <div class="row">
      <div class="main-header">
        <div class="main-header-image col-12 col-lg-6">
          <img src="./img/image2v8.png" alt="picture" />
        </div>
        <div class="main-header-text col-12 col-lg-6">
          <div class="text-about">
            <h1>Strive offer intelling business solutions</h1>
            <p>Technologies & data-driven strategies help organizations achieve their goals optimize operations & maintain a competitive edge in the market.</p>
          </div>
          ${HTML1}
        </div>
      </div>
    </div>
  </main>`

  document

    .getElementById('app')

    .insertAdjacentHTML('beforeend', HTML);

}