import { aboutUsMainData } from "../../data/about-us-MainData.js"

export function aboutUsMain(){
let HTML1=''
for(const item of aboutUsMainData){

    HTML1+=`
    <div class="col-12  col-lg-4 col-xl-4  aboutUsCard">
    <img src="../img/${item.img}" alt="${item.imgAlt}">
    <h1>${item.h1}</h1>
    <p>${item.comment}</p>
    </div>
    `
};

 const HTML=`
 <div class="container">

 <div class="row">
            <div class="forh1andp">
            <div class=" col-12 col-lg-8 col-xl-8  aboutush1">
                <h2 class="AboutUsMainh1">Our brand’s story an exciting journey</h2>
                </div>
            <div class="col-12 col-lg-4 col-xl-4  aboutusp">
                <p class="aboutusMainp">Their journey was not without its challenges. They are faced countless to late nights brainstorming strategies.</p>
                </div>
</div>

                        <div class="col-12 forrotaterelative">
                        <img class="AboutUsMainimg" src="../img/AboutUs-Main.png" alt="Main_picture">
                        <div>
                        <img src="../img/aboutUsMain_rotate.png" alt="rotating pic" class="imagerotate">
                        </div>

 <div class=" ">
 <h2 class="col-xl-9 m-xl-1 col-xxl-8 m-xxl-2  forh2aboutus">Our values are what separate us from others</h2>
 </div>


 </div>
 ${HTML1}
 </div> 

 `

    document
    .getElementById('app')
    .insertAdjacentHTML('beforeend',HTML)
}




