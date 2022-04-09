import React from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const CancelButton: React.FC<Props> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className="bg-danger w-full h-11 rounded-md transition hover:bg-opacity-80 mt-5"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CancelButton;
