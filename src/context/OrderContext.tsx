import { createContext, FC, useState } from "react";
import Product from "../models/Product";

type OrderContextType = {
  selectedProducts: Product[];
  addProduct: (product: Product) => void;
  clearCart: () => void;
};

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType
);

const OrderProvider: FC = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setSelectedProducts((selectedProducts) => {
      console.log(selectedProducts);
      return [...selectedProducts, product];
    });
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  const value: OrderContextType = {
    selectedProducts,
    addProduct,
    clearCart,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderProvider;
