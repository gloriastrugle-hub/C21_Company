import "./App.css";
import logo from "./assets/logo.jpg";
import header from "./assets/header.jpg";

// Home / About Us
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";

// Coffee
import kafe1 from "./assets/kafe.jpg";
import kafe2 from "./assets/kafe2.jpg";
import makan from "./assets/makan.jpg";
import minum from "./assets/minum.jpg";

// Spa
import spa1 from "./assets/bawah.jpg";
import spa2 from "./assets/refleksi.jpg";
import spa3 from "./assets/roomcouple.jpg";
import spa4 from "./assets/singleroom.jpg";
import spaMenu from "./assets/menuspa.jpg";

// Apartment
import standar1 from "./assets/standar1.jpg";
import standar2 from "./assets/standar2.jpg";
import standar3 from "./assets/standar3.jpg";
import VIP1 from "./assets/VIP1.jpg";
import VIP2 from "./assets/VIP2.jpg";
import VIP3 from "./assets/VIP3.jpg";

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav>
          <img src={logo} alt="C21 Logo" />
          <div className="header-title">
            C21 Apartment, Coffee, and Spa
          </div>
          <ul>
            <li><a href="#welcome">Welcome</a></li>
            <li><a href="#about">Home</a></li>
            <li><a href="#coffee">C21 Coffee</a></li>
            <li><a href="#spa">C21 Spa</a></li>
            <li><a href="#apartment">Apartment</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* WELCOME SECTION */}
      <section id="welcome" className="hero">
        <img src={header} alt="Welcome background" />
        <div className="content">
          <h1>Welcome to C21!</h1>
          <p>Where comfort, coffee, and calm meet in one place.</p>
        </div>
      </section>

      {/* ABOUT US / HOME */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We’re all about creating spaces and experiences that make your day better.
          From cozy apartments to relaxing spa moments, and our coffee spot where
          you can enjoy great drinks and tasty bites, we’ve got a little something
          for everyone. Our team loves bringing comfort, style, and good vibes
          together in everything we do. Come explore C21—where living, relaxing,
          and enjoying delicious coffee and treats all feel just right.
        </p>

        {/* 3 FOTO HOME */}
        <div className="about-gallery">
          <img src={home1} alt="Home 1" />
          <img src={home2} alt="Home 2" />
          <img src={home3} alt="Home 3" />
        </div>
      </section>

      {/* COFFEE SECTION */}
      <section id="coffee" className="coffee">
        <h2>C21 Coffee</h2>

        <div className="gallery">
          <img src={kafe1} alt="C21 Café interior" />
          <img src={kafe2} alt="C21 Café seating area" />
        </div>

        <p>
          Step into our cozy coffee spot — the perfect place to unwind with
          your favorite cup. Whether you're here for a quiet moment or to catch up
          with friends, C21 Coffee brings comfort and flavor together.
        </p>

        <h3>Our Menu</h3>
        <div className="menu">
          <img src={makan} alt="Food menu" />
          <img src={minum} alt="Drink menu" />
        </div>
      </section>

      {/* SPA SECTION */}
      <section id="spa" className="spa">
        <h2>C21 Spa</h2>

        {/* Gallery SPA - Grid / Flex */}
        <div className="spa-gallery">
          <img src={spa1} alt="Spa Bawah" />
          <img src={spa2} alt="Spa Refleksi" />
          <img src={spa3} alt="Spa Room Couple" />
          <img src={spa4} alt="Spa Single Room" />
        </div>

        <p>
          Relax and refresh your mind and body in our luxurious spa. 
          From soothing massages to rejuvenating treatments, 
          C21 Spa is your sanctuary for calm and comfort.
        </p>

        <h3>Our Menu</h3>
        <div className="spa-menu">
          <img src={spaMenu} alt="Spa Menu" />
        </div>
      </section>

      {/* APARTMENT SECTION */}
      <section id="apartment" className="apartment">
        <h2>C21 Apartment</h2>

        <p>
          Experience modern living with a touch of comfort and style. Our apartments
          are designed to provide a relaxing stay with all the essential amenities
          you need for a perfect getaway or long-term stay.
        </p>

        <h3>Standar Room Type</h3>
        <div className="room-gallery">
          <img src={standar1} alt="Standar Room 1" />
          <img src={standar2} alt="Standar Room 2" />
          <img src={standar3} alt="Standar Room 3" />
        </div>

        <h3>VIP Room Type</h3>
        <div className="room-gallery">
          <img src={VIP1} alt="VIP Room 1" />
          <img src={VIP2} alt="VIP Room 2" />
          <img src={VIP3} alt="VIP Room 3" />
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact">
        <h3>Contact Us</h3>
        <div className="footer-links">
          <a
            href="https://wa.me/622310311117"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/c21coffeespa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@c21.spa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiktok
          </a>
          <a
            href="https://share.google/bIy2SBOm2B4ygy7Zo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;