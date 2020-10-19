import React, {useState} from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue(useStateValue);
  const [clicked, setClicked] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text'></input>
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__menuIcon' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={clicked ? "header__nav active" : "header__nav"}>
        {/* if there is NO user, only then do we push to login page */}
        <Link to={!user && "/login"}>
          <div
            onClick={(handleAuthentication, closeMenu)}
            className='header__option'
          >
            <span className='header__optionLineOne'>
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to='/orders'>
          <div onClick={closeMenu} className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div onClick={closeMenu} className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {/* Optional chaining: if dont have right value or have error, handles it gracefully */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
