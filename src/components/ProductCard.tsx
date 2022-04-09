import { FC } from "react";
import Product from "../models/Product";
import ProductCardButton from "./ProductCardButton";

type Props = {
  product: Product;
  onImmediateBuy: (product: Product) => void;
  onAddToCart: (product: Product) => void;
};

const ProductCard: FC<Props> = ({ onAddToCart, onImmediateBuy, product }) => {
  const { description, imageLink, price, title } = product;
  return (
    <div className="bg-lightSecondary">
      <img
        className="w-full h-44 object-cover object-top"
        src={imageLink}
        alt={title}
      />
      <div className="flex flex-col gap-2 px-3 py-2 text-sm">
        <p className="text-center text-lg">{title}</p>
        <p className="whitespace-nowrap text-ellipsis w-full overflow-hidden">
          {description}
        </p>
        <p>{price.toFixed(2)} $</p>
      </div>
      <div className="flex gap-1 mt-3">
        <ProductCardButton onClick={() => onImmediateBuy(product)}>
          Comprar
        </ProductCardButton>
        <ProductCardButton onClick={() => onAddToCart(product)}>
          Add no Carrinho
        </ProductCardButton>
      </div>
    </div>
  );
};

export default ProductCard;
