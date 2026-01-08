import { mainRow3data } from "../../data/about-us-MainRow3data.js";

export function aboutUsMainRow3 () {
    let HTML1 = ''
    for (let i = 0; i < mainRow3data.length; i++) {
        const item=mainRow3data[i]
        HTML1 += `
        <div class="col-12 col-lg-6 forRow3Cards accordion-item ${i ? '' : 'expand'} ">
            <button class="accordion-title pakeitimui">
                ${item.question}
                <i class="fa fa-chevron-down forChevron" aria-hidden="true"></i>
            </button>
            <p class="accordion-content">${item.answer}</p>
         </div>`
    };
    const HTML = `

        <div class="container containerBackground">
            <div class="row">
            <div class="col-xl-9 m-xl-1 col-xxl-8 m-xxl-2 aboutusrow3h1 forh2aboutus ">
            <h1>If you want to know anything asked us</h1>
            </div>
            <div class="accordion">
            ${HTML1}
            </div>
            </div>
        </div >
    `

    document
    .getElementById('app')
    .insertAdjacentHTML('beforeend', HTML);

    const accordionItemsDOM = document.querySelectorAll('.accordion-item');
let activeIndex = 0;

for (let i = 0; i < accordionItemsDOM.length; i++) {
    const itemDOM = accordionItemsDOM[i];
    itemDOM
        .querySelector('.accordion-title')
        .addEventListener('click', () => {
            if (activeIndex === i) {
                itemDOM.classList.toggle('expand');
            } else {
                accordionItemsDOM[activeIndex].classList.remove('expand');
                activeIndex = i;
                itemDOM.classList.add('expand');
            }
        });
}
}


