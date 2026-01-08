export function mainMainrow(){

const data=[
{title:'6531+',
desc:'Satisfied Clients'
},
{title:'700+',
desc:'Finished Projects'
},
{title:'120+',
desc:'Skilled Experts'
}];

let HTML1='';

for (const item of data){
    HTML1+=`

    <div class="col-12 col-sm-4 col-lg-2 col-xl-2  col-xxl-2    vaikas">
    <h1>${item.title}</h1>
    <h4>${item.desc}</h4>
    </div>
`
}

const HTML=`<div class="container senelis"> 
<div class="row tevas">

<div class="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6  forh1  ">

<h1>We are increasing business success</h1>

</div>
${HTML1} 

</div>

</div>`


     document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}