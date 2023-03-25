import React from "react";
import "./ProductDetailCard.css";
const ProductDetailCard = ({ Datas }) => {
  return (
    <div className="ProductDetailCard">
      <div className="ProductDetailCard-Img">
        <img src = {Datas.url} alt = "" />
      </div>
      <div className="ProductDetailCard-details">
        <p className="ProductDetailCard-name">{Datas.Product}</p>
        <div className="ratingsAndreviews">
          <div className="stars">{Datas.rating} ◈</div>
          <p className="ratings">
            {Datas.rating} Ratings & {Datas.reviews} Reviews
          </p>
        </div>
        <ul className="ProductDetailCard-Productdetails">
          <li className="ProductDetailCard-detail">{Datas.Descripition}</li>
          <li className="ProductDetailCard-detail">{Datas.Display}</li>
          <li className="ProductDetailCard-detail">{Datas.Camera}</li>
          <li className="ProductDetailCard-detail">{Datas.Proccessor}</li>
        </ul>
      </div>

      <div className="ProductDetailCard-PriceandDelivery">
        <div className="pricecontainer">
          <p className="ProductDetailCard-price">{Datas.Sellingprice}</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            height={21}
            alt=""
          />
        </div>
        <p className="freedel">Free delivery</p>
        <p className="discount">
          Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
        </p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
