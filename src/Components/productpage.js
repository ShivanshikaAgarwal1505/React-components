import "./productpage.css";
import image from "../alex-haigh-fEt6Wd4t4j0-unsplash-removebg-preview.png";
// design idea- https://in.pinterest.com/pin/618189486326098483/
import React, { useState } from 'react';

function NumberCounter() {
  const [number, setNumber] = useState(1);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(Math.max(number - 1, 1)); // Prevent going below 1
  };

  return (
    <div className="number-container">
        <div className="number">
            {number}
        </div>
        <div className="buttons">
          <button className="arrow-up" onClick={handleIncrement}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path fill="#696969" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </button><br></br>
          <button className="arrow-down" onClick={handleDecrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#696969"
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>
        </div>
    </div>
  );
}

const Product=()=>{
    return (
      <div id="page" class="product">
        <div id="main">
          <h2>original t-shirt </h2>
          <div class="product-sub-text">
            somethings are definetly worthy to buy
          </div>
          <div class="product-price">Rs. 300</div>
          <div class="product-body">
            <h6>benifits</h6>
            <ul class="product-list">
              <li>DRI-fit mesh fabric.</li>
              <li>Details on front.</li>
              <li>Rib crew neck.</li>
            </ul>
          </div>
          <div class="product-footer">
            <div class="product-color">
              <h6>color</h6>
              <div className="color">
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="yellow" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="pink" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="black" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="red" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="blue" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="green" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="brown" class="checkmark"></div>
                </label>
                <label class="container">
                  <input type="checkbox"></input>
                  <div id="violet" class="checkmark"></div>
                </label>
              </div>
            </div>
            <div class="product-size">
              <h6>Size</h6>
              <NumberCounter></NumberCounter>
            </div>
            <div class="product-quantity">
              <h6>Qty</h6>
              <NumberCounter></NumberCounter>
            </div>
          </div>
        </div>
        <div id="side">
          <img src={image} class="img1" />
          <div class="trapezoid"></div>
        </div>
      </div>
    );
}

export default Product;