import React, { useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ProductsData } from "../../ProductsData";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {addCart} from "../../slices/cartSlice";

const ProductDetails = () => {
  const [Datas, setData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    const product = ProductsData.find((item) => {
      return item.id.toString() === id;
    });
    setData(product);
  }, [id]);

  const addToCart = ()=>{
    dispatch (addCart(Datas))
  }

  return (
    <div className="ProductDetails">
      <div className="ProductDetails-left">
        <div className="otherImgs">
          <img src={Datas.url} alt="" className="proimg" />
          <img src={Datas.url} alt="" className="proimg" />
          <img src={Datas.url} alt="" className="proimg" />
          <img src={Datas.url} alt="" className="proimg" />
          <img src={Datas.url} alt="" className="proimg" />
        </div>
        <div className="ProductDetail-Img">
          <img src={Datas.url} alt="" />
          <div className="ProductDetail-btns">
            <button className="ProductDetail-btn" onClick={addToCart} >
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="ProductDetail-btn">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="ProductDetails-right">
        <p className="ProductName">{Datas.Product}</p>
        <div className="ratingsreviews">
          <div className="stars">
            {Datas.rating} <AiFillStar />
          </div>
          <div className="ratings">
            {Datas.reviews} Ratings & {Datas.rating} Reviews
          </div>
          
        </div>
        <p className="price">₹{Datas.Sellingprice}</p>
        <p className="packfee">+ ₹69 Secured Packing Fee </p>
        <p className="availableoff">Available offers</p>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Bank Offer </b>5% Cashback on Flipkart Axis Bank CardT&C
        </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More
        </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More
        </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b> EMI starting </b> from ₹832/monthView Plans
        </div>
</div>
        <div className="descriptions">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimgs">
              <img src={Datas.url} alt="" />
              <img src={Datas.url} alt="" />
              <img src={Datas.url} alt="" />
            </div>
          </div>
          <div className="highlights">
            <p className="highlight-title">Highlights</p>
            <ul className="highlight">
              <li className="highlight-item">{Datas.Descripition}</li>
              <li className="highlight-item">{Datas.Display}</li>
              <li className="highlight-item">{Datas.Camera}</li>
              <li className="highlight-item">{Datas.Battery}</li>
              <li className="highlight-item">{Datas.Proccessor}</li>
            </ul>
          </div>
        </div>

        <div className="RatingsAndReviews">
          <p className="RatingsAndReviews-title">Ratings & Reviews</p>
          <div className="RatingsAndReviews-container">
            <div className="RatingsAndReviews-stars">
              <p className="RatingsAndReviews-reviews">
                {Datas.rating} <AiFillStar />
              </p>
              <p className="RatingsAndReviews-ratings">
                {Datas.rating} Ratings & {Datas.reviews} Reviews
              </p>
            </div>
            <ul className="RatingsAndReviews-charts">
              <li>
                <p className="star">5</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">4</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "50%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">3</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "33.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">2</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "29.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">1</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "10%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
