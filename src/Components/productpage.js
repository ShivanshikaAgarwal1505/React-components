import "./productpage.css";
import image from "../alex-haigh-fEt6Wd4t4j0-unsplash-removebg-preview.png";
// design idea- https://in.pinterest.com/pin/618189486326098483/

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
