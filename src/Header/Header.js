import "./Header.css";
import {Link } from "react-router-dom";
function Header() {
  return (
      <div className="header">
        {/* logo on the left img */}
        <div className="left_nav">
          <Link to="/">
              <img className='img_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
          </Link>
        </div>

        {/* Search box */}
        <div className="center_nav">
          <input type="text" className='search_bar'/>
          <button className="search_button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        {/* 3 links */}
        {/* 1st link */}
        <div className="right_nav">
          <Link tp="/login" className="header_link">
            <div className="header_option">
              <span className="option_line1">Hello Qazi</span>
              <span className="option_line2">Sign In</span>
            </div>
          </Link>
        
        {/* 2nd link */}
        <Link tp="/" className="header_link">
            <div className="header_option">
              <span className="option_line1">Returns</span>
              <span  className="option_line2">& Orders</span>
            </div>
          </Link>
        {/* 3rd link */}
        <Link tp="/" className="header_link">
            <div className="header_option">
              <span className="option_line1">Your</span>
              <span className="option_line2">Prime</span>
            </div>
          </Link>
        {/* 4th link */}
        <Link tp="/checkout" className="header_link">
          <div className="header_optionBasket">
            <i class="fa-solid fa-basket-shopping"></i>
            <span>0</span>
          </div>
        </Link>
        </div>

        {/* basket icon with number */}
      </div>
  );
}

export default Header;
