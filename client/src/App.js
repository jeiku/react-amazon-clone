import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./components/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HbFluFhQmUf5pYliCYWp2xZ4bvOyIqNSb3EZy4WI24tyMuIPf848f8eG0gVuVKgfNdMqhtX6m2xCsTttVYT4tsE00QkvY6ic2"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // useEffect like a listener, always listening
  useEffect(() => {
    // will only run once if leave [] blank when the app component loads
    // if [user, basket] then it loads whenever those change
    // like an if statement

    // whenever authentication changes, itll give us the user (might be null if user not there)
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        {/* switch based on different cases */}
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
