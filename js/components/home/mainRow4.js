import { mainRow4Data } from "../../data/mainRow4data.js";

export function mainRow4() {
    let HTML1 = '';
    for (const item of mainRow4Data) {
        HTML1 += `<div class="col-12 m-0 col-lg-4 col-md-6 paddingui hover-darken"><img src="./img/${item.pic}" alt="${item.alt}" class="img-fluid" style="width:100%; height:auto;"></div>`;
    }

    const HTML = `
<div class="container">
    <div class="row row4-padding">
        <div class="col-12 Row4divh1 ">
            <div class="col-12 col-lg-9 col-xl-9 h1kaire">
            <h1 class="Row4h1">Recently completed to our latest projects</h1>
            </div>
            <div class="col-12 col-lg-3 col-xl-3 row4button">
            <button type="button" class="pink baltas ">View All Projects</button>
            </div>
        </div>
        ${HTML1}
    </div>
</div>
`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}


