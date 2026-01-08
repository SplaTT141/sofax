export function aboutUsMainRow1 (){

    const data=[
        {title:'50k',
        desc:'Happy Clients'
        },
        {title:'78k+',
        desc:'Project Completed'
        },
        {title:'100%',
        desc:'Client Satisfaction'
        }];

        let HTML1='';

        for (const item of data){
            HTML1+=`<div class ="start-item">
                      <h3 class ="about-us-stats">${item.title}</h3>
                      <p class = "about-us-stats-desc">${item.desc}</p>
                      </div>
                      `;
        }

    const HTML = `<section>
    <div class="container mainRow1">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="abt-us-left-div">
            <img class="abt-row1-img" src="../img/aboutthumb.png" alt="aboutthumb">
            <img class="shape" src="../img/shape2.png" alt="leftTopShape">
            </div>
        </div>
      
      <div class="col-12 col-lg-6 right-div">
        <div>
        <h2 class="abt-row1-title">We are loyal to innovative brands</h2>
        <p class="abt-row1-desc">We are a one-stop digital agency, taking care of everything from custom web design to meticulous planning with strategies that increase your reach, drive traffic and engagement.
        </p>
        <div>
          <div class="statistika">
            ${HTML1}
          </div>
          <div class="about-us-main-row1-btn-div">
            <button class="about-us-main-row1-btn">explore more</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </section>
`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}