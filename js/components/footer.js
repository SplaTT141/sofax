export function footer() {
  const HTML = `
            <footer class="container">
      <div class="row">
        <div class="footer-top">
          <div class="footer-about">
            <h1>Let's embark on a IT services together!</h1>
            <img class="spinning-star" src="./img/shape1.png" alt="logo" />
          </div>
          <div class="arrow-up">
            <a href="#">&#8594;</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="socials col-md-12 col-xl-4">
            <img src="./img/SofaxLogo.webp" alt="logo" />
            <p>Sofax has many plans for the future to work with great clients and continue to work with agencies.</p>
            <div class="social-links">
              <a href="#" target="_blank">
               <img src="./img/x.png" alt="X">
              </a>
              <a href="#" target="_blank" class="fa fa-facebook"></a>
              <a href="#" target="_blank" class="fa fa-instagram"></a>
              <a href="#" target="_blank" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="company col-12 col-md-3 m-md-0 m-lg-1 col-xl-3 m-xl-0">
            <p>Company</p>
            <ul>
              <li><a href="./about-us-new">About Us</a></li>
              <li><a href="./contact-us-new">Contact US</a></li>
              <li><a href="./contact-us-new">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="utility col-12 col-md-3 col-xl-2">
            <p>Utility pages</p>
            <ul>
              <li><a href="./contact-us-new">Instructions</a></li>
              <li><a href="./contact-us-new">Style guide</a></li>
              <li><a href="#">404 Pages</a></li>
              <li><a href="./contact-us-new">Licenses</a></li>
            </ul>
          </div>
          <div class="subscribe col-12 col-md-4 col-xl-3">
            <p>Subscribe to our newsletter</p>
            <form class="form">
              <input class="white" type="email" placeholder="Enter your email" name="email" id="email" maxlength="50" required />
              <button class="pink" type="submit">Subscribe now</button>
            </form>
          </div>
        </div>
        <div class="copy-right col-12">
          <p>© 2025 Mthemeus All Rights Reserved.</p>
        </div>
      </div>
    </footer>`

  document

    .getElementById('app')

    .insertAdjacentHTML('beforeend', HTML);
}