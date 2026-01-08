import { aboutUsMainRow2Data } from "../../data/about-us-main-row2Data.js";

export function aboutUsMainRow2() {

    let memberHTML = ''

    for (const item of aboutUsMainRow2Data) {
        memberHTML += `
                <div class="members col-12 col-md-6 col-lg-3">
                    <div class="member">
                        <img src="${item.imgSrc}" alt="Member pic">
                        <div class="member-info">
                            <h4>${item.name}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>              
                </div>`;
    }

    const HTML = `
    <div class="container">
        <div class="row">
            <div class="team-members">
                <div class="team-about">
                    <h1>Meet the team work behind our succees</h1>
                    <button class="pink">book a free call</button>
                </div>
               ${memberHTML}
            </div>
        </div>
    </div>
    `;

    document

        .getElementById('app')

        .insertAdjacentHTML('beforeend', HTML);

}