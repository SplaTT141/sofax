
import { maindata } from "../../data/contactUsMainData.js"

export function contactUsMain() {
    let HTML1 = '';
    
    for (const item of maindata) {
        HTML1 += `
        <div class="contact-item">
            <div class="cu-img">
                <img src="${item.imgInf}" alt="${item.altInf}">
            </div>
            <div class="contact-desc">
            <h2>${item.title}</h2> 
            <p>${item.desc}</p>
            </div>
        </div>`;
    }
    
    const HTML = `
    <div class="container cu-container">
        <div class="row">
            <div class="col-12 col-lg-6 cu-kairys">
                ${HTML1}
            </div>
            <div class="col-12 col-lg-6 cu-desinys"> 
            <div class="col-12 ">
                    <h2 >Send us a message</h2>
                    </div>
            <div class=" for-labels-inputs">
                            <div class="col-12 col-lg-6 for-labels-cu">
                        <label class=" for-placeholders">Your name</label>
                        <input class=" cu-labels" type="text" id="name" name="name" placeholder="Your name"></input>
                            </div>
                            <div class="col-12 col-lg-6 for-labels-cu">
                        <label class=" for-placeholders" for="email">Your email</label>
                        <input class=" cu-labels" type="email" id="email" name="email" placeholder="Email Address" required></input>
                            </div>
            </div>
                    <div class="col-12 col-lg-12 cu-desinys-down">
                        <label class=" for-placeholders" for="message">Your message:</label>
                        <textarea class=" cu-labels-text" id="message" name="message" rows="4" cols="50" placeholder="Write your comment"></textarea>
                    </div>
                    <div class="col-12  for-button-cu">
                    <label>
                    <input   type="checkbox" name="option1"> Save my name, email, & website in this browser for the next time I comment.</label>
                    <div>
                    <button class="pink baltas">Post Comment</button>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>`;

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML)

}
