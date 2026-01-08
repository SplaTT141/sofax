import { mainRow5Data } from "../../data/main-row5Data.js";



export function mainRow5() {
    let testiHTML = '';

    for (let i = 0; i < 3; i++) {
        const testimonial = mainRow5Data[i];
        testiHTML += `
            <div class =" col-12 col-md-6 col-lg-6 col-xl-4 mr5testi-card">
                <img class="mr5-pp" src="./img/main-row5/${testimonial.img}" alt="${testimonial.imgAlt}">
                <p class="mr5-comment">${testimonial.comment}</p>
                <div class="mr5-bottomrow">
                    <div class="mr-5info">
                    <p class="mr5-name">${testimonial.name}</p>
                    <p class="mr5-position">${testimonial.position}</p>
                    </div>
                    
                        <div class="mr5-stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                </div>
        </div>`
    }





    const HTML = `
    <div class="container-mr5">
        <div class="mr5-row1">
            <h1 class="col-12 col-lg-8 col-xl-5 mr5-title">See what our customers say about us</h1>
        </div>
        <div class="mr5-row2">
            ${testiHTML}
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}



