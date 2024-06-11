import "../css/style.css";
import "../css/responsive.css";
import "../App.css";
import projectLogo from "../img/logo.png";

function foodDetails() {
  return (
    <div>
      <header className="header">
        <a href="index.html" className="logo">
          <img src={projectLogo} alt="logo" />
        </a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          <a href="index.html" style={{ "--i": "0" }} className="home-btn">
            Home
          </a>
          <a href="recipes.html" style={{ "--i": "1" }} className="recipes-btn">
            Recipes
          </a>
          <a
            href="about-us.html"
            style={{ "--i": "2" }}
            className="about-us-btn"
          >
            About Us
          </a>
          <a
            href="contact-us.html"
            style={{ "--i": "3" }}
            className="contact-btn"
          >
            Contact Us
          </a>
          <a href="sign-up.html" style={{ "--i": "4" }} className="login-btn">
            Sign Up
          </a>
        </nav>
      </header>

      <div className="food-details-container container-food-details">
        <h1 id="food-name"></h1>
        <img id="food-image" src="" alt="sample image" />
        <p id="food-description"></p>
        <h2>Ingredients:</h2>
        <ul id="food-ingredients"></ul>
        <h2>Instructions:</h2>
        <p id="food-instructions"></p>
      </div>

      <form>
        <div className="form-search">
          <p>You can discover more recipes and dishes.</p>

          <div className="search">
            <span className="search-icon material-symbols-outlined">
              search
            </span>
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            />
          </div>

          <ul className="search-suggestions"></ul>
        </div>
      </form>

      <div className="bottom-adjust adjust-bottom">
        <section className="bottom-area">
          <div className="more-info">
            <ul className="all">
              <li>
                <a href="legal-notice.html">Legal Notice</a>
              </li>
              <li>
                <a href="privacy-notice.html">Privacy Notice</a>
              </li>
              <li>
                <a href="cookie-notice.html">Cookie Notice</a>
              </li>
            </ul>
          </div>
        </section>

        <footer className="copyright-podz-ni-bordskiee">
          <div className="footer-copyright">
            <p className="copyright">
              © 2024 Podz Ni Bordskiee
              <br />
              Follow us on Facebook <i className="fa-brands fa-facebook"></i>
              <a
                href="https://www.facebook.com/bordzkie.bedz"
                style={{ textDecoration: "none", color: "white" }}
              >
                @PodzNiBordskiee
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default foodDetails;
