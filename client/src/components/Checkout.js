import React from "react";
import {useStateValue} from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__ad'
        />

        <div>
          {/* asynchronous period, needs to fetch email from firebase so may take some time.. so might get an error when trying to display user email..
          So, put the ? at user?.email.. prevents errors
          */}
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* For each item in basket, create CheckoutProduct, props are just the item contents */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
