import React from 'react';
import Products from '../Products/Products';
import "./Home.css";
import home_img from "../Image/home.jpg";
import product1 from "../Image/product1.jpg";
import product2 from "../Image/product2.jpg";
import product3 from "../Image/product3.jpg";
import product4 from "../Image/product4.jpg";
import product5 from "../Image/product5.jpg";
import product6 from "../Image/product6.jpg";

function Home() {
    return (
        <div className='home'>
            {/*Product: id, name, title, price, rating, image */}
            <div className='home_container'>
                <img src= {home_img} className='home_img' alt='banner'/>
                <div className='home_product'>
                    <div className='home_row '>
                        <Products
                            id = "12345"
                            title= "The learn Startup: How Constant Innovation Create Radically Successfully Bussiness Paperback"
                            price= {11.96}
                            rating={5}
                            img = {product1}
                        />
                        <Products
                            id = "12345"
                            title= "Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price= {11.96}
                            rating={5}
                            img = {product2}
                        />
                    </div>
                    <div className='home_row'>
                        <Products
                            id = "12345"
                            title= "Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
                            price= {11.96}
                            rating={5}
                            img = {product3}
                        />
                        <Products
                            id = "12345"
                            title= "Learning React: Functional Web Development with React and Redux Paperback – 1"
                            price= {11.96}
                            rating={5}
                            img = {product4}
                        />
                        <Products
                            id = "12345"
                            title= "Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
                            price= {11.96}
                            rating={5}
                            img = {product5}
                        />
                    </div>
                    <div className='home_row'>
                        <Products
                            id = "12345"
                            title= "Samsung 'LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120 x 1440"
                            price= {11.96}
                            rating={5}
                            img = {product6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
