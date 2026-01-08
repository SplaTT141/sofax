
export function herofooter() {


const data = [
    {   
        imgSrc: 'hero-footer1.png', 
        imgAlt: 'Hero-footer_pic1',
        title: 'IT Management',
        desc: 'Processes to the ensure IT supports business goals.'
    },
    {   
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic2',
        title: 'Cloud Services',
        desc: 'Providers and infrastructure maintenance and updates.',
    },
    {   
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic3',
        title: 'Data Security',
        desc: 'Data and ensure compliance with regulatory standards.',
    },

];
let HTML1 = '';
for (const item of data) {
    HTML1 += `
         
            <div class="col-12 col-lg-4  kvadratas ${item.pozition}">

                <div class="kvadrato-pic">
                <img src="./img/${item.imgSrc}" alt="${item.imgAlt}" >
                </div>

                <div class="kvadrato-desine">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                </div>

           </div>`

           
};

 const HTML=`<div class="container permatomas"><div class="row konteineris"> ${HTML1} </div></div>  `

document
.getElementById('app')
.insertAdjacentHTML('beforeend', HTML);
}
