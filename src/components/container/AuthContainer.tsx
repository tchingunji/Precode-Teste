import React from "react";

const AuthContainer: React.FC = ({ children }) => {
  return (
    <div className="bg-darkSecondary h-screen text-white font-sansSerif">
      <section className="max-w-md w-11/12 mx-auto pt-10">{children}</section>
    </div>
  );
};

export default AuthContainer;
