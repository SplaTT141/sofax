export function back2TopBtn()
{
  
 const HTML = `
    <button id="b2top" class="backtotop">
      <i class="fa fa-angle-up"></i>
    </button>`;



    
document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

const back2TopBtnDOM = document.querySelector(".backtotop");

     back2TopBtnDOM.addEventListener("click", function()
    {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: "smooth"
            });
    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() 
    {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
            {
                back2TopBtnDOM.style.display = "flex";
            } else
            {
                back2TopBtnDOM.style.display = "none";
            }
    }
   
};