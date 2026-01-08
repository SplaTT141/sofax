export function heroDalis() {
    const HTML = ` <section class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-lg-7 left-div">
                <h1 class=" title"> 
                    <div>Empower your to</div>
                    <div>business journey</div>
                    <div>with IT expertise</div>
                </h1>
                <p class="sub-title">
                 IT expertise is crucial for the growth and sustainability of any business. Here’s how integrating robust IT solutions can empower your business journey:
                </p>
                <div class="col-12 m-3 hero-btn">
                    <button class="explore">Explore More</button>
                    <button class="contact">Contact Us</button>
                </div>
            </div>
             <div class="col-lg-5 right-div">
                <div class="photo-right">
                    <img class="analyst" src="./img/image1v8.png" alt="Analyst" style="width:100%; height:auto;">
                    <img class="number-leads" src="./img/pakeitimui.png" alt="numberOfLeads">
                    <img class="global-statistic" src="./img/shape2v8.png" alt="GlobalStatistic">
                </div>    
             </div>
        </div>
    </section> `;
 
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}