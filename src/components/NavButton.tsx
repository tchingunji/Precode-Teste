import React from "react";

type Props = {
  onClick?: () => void;
};

const NavButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary text-xs p-2 rounded-md transition hover:bg-opacity-80"
    >
      {children}
    </button>
  );
};

export default NavButton;
