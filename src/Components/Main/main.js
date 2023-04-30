import React from "react";
import "./main.css";
import Bag from "../assests/bags.jpg";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";

const Main= () => {
  return (
    <div className="product-parent">
      <div className="product-container">
        <div className="product-display">
          <div className="product-image">
            <img src={Bag} alt="bag"></img>
          </div>
          <div className="product-description">
            <p className="display-title"> Crown Summit Backpack</p>
            <a href="#" className="review">
              {" "}
              Be the first to review this product
            </a>
            <div className="parent-price">
              <div>
                <p className="price">
                  <FaRupeeSign size={"36"} color="#575757" />
                  38.00
                </p>
              </div>
              <div className="price-tag">
                <div>
                  <p>IN STOCK</p>
                </div>
                <div>
                  <p>SKU# 24-MB03</p>
                </div>
              </div>
            </div>

            <p> Qty</p>
            <p className="quantity">1</p>
            <button className="button-add"> Add to Cart</button>
            <div className="wishlist">
              <div>
                <p>
                  <AiFillHeart />
                  ADD TO WISH LIST
                </p>
              </div>
              <div>
                <p>
                  <BsFillFileBarGraphFill />
                  ADD TO COMPARE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;




{/*import React from "react";
import Image from "../assests/bags.jpg"
import {BiRupee} from 'react-icons/bi';
const Main=()=>{
    return(
        <div className="main-part">
<div className="main-part-container">
    <div className="main-demo"></div>
    <img src={Image} alt="bags" className="picture" />
</div>
<h2 className="heading">Crown Summit Backpack</h2>
<div className="title">
<a href="#" >Be the first to review this product</a>
</div>
<div>
<p className="product"><BiRupee/> 38.00</p>
<p className="demo-product">IN STOCK</p>
<p className="demo-product-details"> SKU#: 24-MB03</p>
</div>
<div className="quantity">
    <p>Qty</p>
    <input type="number" className="num" ></input>
</div>



</div>
 
       

       
       
        

    )
}

export default Main;*/}