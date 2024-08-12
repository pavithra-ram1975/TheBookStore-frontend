import { PRODUCTS } from "../constants";
import ProductCard from "./Productcard";
const Products = (props) => {
  return (
    <div className="products-grid">
        {/* <div className="products-flex"></div> */}
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} item={product} cart={props.cart} setCart={props.setCart} />
      ))}
    </div>
  );
};

export default Products;
