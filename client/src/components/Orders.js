import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {useStateValue} from "../StateProvider";
import "./Orders.css";
import Order from "./Order";

function Orders() {
  const [{basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // go into db, users, get user and their orders, order it in descending order, take a realtime snapshot of it
      // for each document, return an object with id, data
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders__order'>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
