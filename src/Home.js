import React from 'react'
import home__image__1 from "./Images/home__image__1.jpg";
import home__image__2 from "./Images/home__image__2.jpg";
import home__image__3 from "./Images/home__image__3.jpg";
import home__image__4 from "./Images/home__image__4.jpg";
import home__image__5 from "./Images/home__image__5.jpg";
import home__image__6 from "./Images/home__image__6.jpg";
import "./CSS/Home.css"
import Product from './Product';

import image from './Images/image.jpeg'
import kitchen__aid__product from './Images/kitchen__aid__product.jpg'
import samsung__watch from "./Images/samsung__watch.jpeg"
import wireless__speaker from "./Images/wireless__speaker.jpg"
import camping__cart from "./Images/camping__cart.jpg"
import comforter from "./Images/comforter.jpg"
function Home() {
  return (
    <div className='home'>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="rotating_images carousel-inner">
          <div className="carousel-item active">
            <img src={home__image__1} className="home_image d-block w-100" alt="home-slided-content" />
          </div>
          <div className="carousel-item">
            <img src={home__image__2} className="d-block w-100" alt="home-slided-content" />
          </div>
          <div className="carousel-item">
            <img src={home__image__3} className="d-block w-100" alt="home-slided-content" />
          </div>
          <div className="carousel-item">
            <img src={home__image__4} className="d-block w-100" alt="home-slided-content" />
          </div>
          <div className="carousel-item">
            <img src={home__image__5} className="d-block w-100" alt="home-slided-content" />
          </div>
          <div className="carousel-item">
            <img src={home__image__6} className="d-block w-100" alt="home-slided-content" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <div className='home__container img-fluid'>
        <img src={home__image__1} alt='home_image' className='home_image img-fluid'></img>
      </div> */}
        <div className='home__row'>
           <Product
            title="The 7 Keys to Success: Awakening to Your Life Purpose"
            price={9.99}
            rating={4}
            image={image} />
          
          <Product
            title="KitchenAid Fresh Prep Slicer/Shredder Attachment, White"
            price={129.99}
            rating={5}
            image={kitchen__aid__product} />
        </div>
          
        <div className='home__row'>
          <Product
            title="SAMSUNG Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, Black"
            price={369.85}
            rating={3}
            image={samsung__watch} />
          <Product
            title="Floating Bluetooth Speaker,Ypllake Pool Speakers Waterproof Shower Bluetooth Wireless IPX7 with Light Stereo for Outdoor Pool AccessoriesHot Tub"
            price={33.99}
            rating={4}
            image={wireless__speaker} />
          <Product
            title="VIVOSUN Heavy Duty Folding Collapsible Wagon Utility Outdoor Camping Cart with Universal Wheels & Adjustable Handle, Blue"
            price={101.99}
            rating={3}
            image={camping__cart} />
        </div>
        <div className='home__row'>
          <Product
            title="Kotton Culture Reversible Pinch Pleated Down Alternative Comforter Set 600 TC 100% Egyptian Cotton Shell 300 GSM Microfiber Fill, 1 Pintuck Comforter & 2 Pillow Shams (Oversized King, Ivory)"
            price={138.00}
            rating={3}
            image={comforter} />
        </div>
      

    </div>
      

     
  )
}

export default Home;