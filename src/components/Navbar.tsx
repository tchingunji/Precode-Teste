import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Profile from "./Profile";
import NavButton from "./NavButton";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrderContext";

type Props = {
  showHomeButton?: boolean;
};

const Navbar: React.FC<Props> = ({ showHomeButton = false }) => {
  const { clientLoggedIn, signOut } = useContext(AuthContext);
  const { selectedProducts } = useContext(OrderContext);

  const navigate = useNavigate();

  const onSignOut = () => signOut();

  return (
    <nav className="bg-lightSecondary py-3 flex">
      <div
        className="flex justify-between items-center  max-w-5xl mx-auto 
      w-4/5"
      >
        <div className="flex gap-5 items-center">
          <Profile name={clientLoggedIn?.name as string} />
          <NavButton onClick={onSignOut}>Sign Out</NavButton>
        </div>
        {!showHomeButton ? (
          <Link to="/cart" className="relative group">
            <AiOutlineShoppingCart
              size={35}
              color="#c7c7c7"
              className="group-hover:fill-primary transition duration-300"
            />
            <span
              className="absolute rounded-full bg-primary w-7 h-7 flex 
          justify-center items-center top-4 right-[-12px]"
            >
              {selectedProducts.length}
            </span>
          </Link>
        ) : (
          <NavButton onClick={() => navigate("/")}>Home</NavButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
