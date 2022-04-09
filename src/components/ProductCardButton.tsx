import { FC } from "react";

type Props = {
  onClick?: () => void;
};

const ProductCardButton: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="w-full text-center bg-primary py-2 hover:opacity-90"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ProductCardButton;
