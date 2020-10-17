import React, {useState} from "react";
import {db} from "../firebase";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useStatete([]);

  useEffect(() => {
    db.collection("users");
  }, []);
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;
