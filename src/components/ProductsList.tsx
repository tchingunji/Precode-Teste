import { FC, useContext } from "react";
import { useNavigate } from "react-router";
import { OrderContext } from "../context/OrderContext";
import Product from "../models/Product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductsList: FC<Props> = ({ products }) => {
  const { addProduct, clearCart } = useContext(OrderContext);
  const navigate = useNavigate();

  const onAddToCart = (product: Product) => {
    addProduct(product);
  };

  const onImmediateBuy = (product: Product) => {
    clearCart();
    addProduct(product);
    navigate("/cart");
  };

  return (
    <div className="py-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          onAddToCart={onAddToCart}
          onImmediateBuy={onImmediateBuy}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsList;
