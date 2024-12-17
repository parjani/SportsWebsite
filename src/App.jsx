import React from 'react';
import './App.scss';
import football from '../src/assets/images/categories/football.jpg'
import basketball from '../src/assets/images/categories/basketball.jpg'
import tennis from '../src/assets/images/categories/tennis.jpg'
import fitness from '../src/assets/images/categories/fitness.jpg'
import contact1 from '../src/assets/images/contactus/FO Shakey feet.gif'
import logo from '../src/assets/images/logo.png'
import bimage from '../src/assets/images/sports background.jpeg'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo}alt="Sangvikar Sports Logo" className="logo-image" />
          Sangvikar Sports
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
            {/* <li>Cart</li> */}
          </ul>
        </nav>
        <div className="search">
          {/* <input type="text" placeholder="Search products..." /> */}
        </div>
      </header>


      {/* Hero Section */}
      <section className="hero">
        {/* <div className="hero-text">
          <h1>Gear Up for Your Game</h1>
          <p>Top-quality sports equipment for every athlete</p>
          <button>Shop Now</button>
        </div> */}
        
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <p>Dive into our curated selection of the most exciting sports categories, showcasing the best athletes, teams, and events from around the world to fuel your passion for the game.</p><br /><br />
        <div className="category-grid">
          <div className="category-card football">
            <p>Football</p><br />
            <img src={football} alt="Football" />
            <button>Explore</button>
          </div>
          <div className="category-card basketball">
            <p>Basketball</p><br />
            <img src={basketball} alt="Basketball" />
            <button>Explore</button>
          </div>
          <div className="category-card tennis">
            <p>Tennis</p><br />
            <img src={tennis} alt="Tennis" />
            <button>Explore</button>
          </div>
          <div className="category-card fitness">
            <p>Fitness</p><br />
            <img src={fitness} alt="Fitness" />
            <button>Explore</button>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="left-section">
          <img
            src={contact1}
            alt="Contact Us"
            className="contact-image"
          />
        </div>
        <div className="right-section">
          <h3>Hurry Up! Contact Us For best deals</h3>
          <p><strong>Address : </strong> 131 Murarji Peth Monalisa Complex, Lucky Chowk Solapur - 413003</p>
          <p><strong>Email : </strong> prashantsangvikar111@gmail.com</p>
          <p><strong>Phone : </strong> 91+ 9881482794</p>
          {/* <button>Get in Touch</button> */}
        </div>
      </section>
      {/* Best Sellers Section */}
      {/* <section className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <h3>Football</h3>
            <p>$50.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <h3>Tennis Racket</h3>
            <p>$70.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <h3>Basketball</h3>
            <p>$60.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Product" />
            <h3>Yoga Mat</h3>
            <p>$30.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section> */}

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2><br />
        <p>We provide high-quality sports gear that enhances your performance.</p><br />
        <button>Learn More</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
