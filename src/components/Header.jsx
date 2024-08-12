// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Header = (props) => {
//   console.log("props=>", props);
//   const count = useSelector((state) => state.counter.count);
//   const cart = useSelector((state) => state.cartt.cart);

//   return (
//     <>
//       <div className="products-head">
//         <div className="Logo">
//           <img
//             className="imglogo"
//             src="https://i.pinimg.com/564x/1f/73/4a/1f734a5a61029a35ec364c2e6a74d782.jpg"
//             alt="Logo"
//           />
//         </div>
//         <nav className="products-header">
//           <Link to="/">Blog</Link>
//           <Link to="/">Books</Link>
//           <Link to="/About">About</Link>
//           <Link to="/Cart">Cart: {cart.quantity}</Link>
//           <span>Count: {count}</span>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search"

const Header = (props) => {
  console.log("props=>", props);
  const count = useSelector((state) => state.counter.count);
  const cart = useSelector((state) => state.cartt.cart);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Implement search logic 
  };


  return (
    <>
      <div className="products-head">
        <div className="Logo">
          <img
            className="imglogo"
            src="https://i.pinimg.com/736x/14/cc/6e/14cc6ea85296791a795f344b948ee084.jpg"
            alt="Logo"
          />

{/* <div className="Search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search books..."
        // style={styles.searchInput}
      />
      <button onClick={handleSearch} style={styles.searchButton}>Search</button>
    </div> */}
        </div>
        <Search onSearch={handleSearch}></Search>
        <nav className="products-header">
          <Link to="/Products">Books</Link>
          <Link to="/About">About</Link>
          <Link to="/Cart">Cart: {totalQuantity}</Link>
           <Link to="/">Logout</Link>
          {/* <span>Count: {count}</span> */}
        </nav>
      </div>
    </>
  );
};
export default Header;
