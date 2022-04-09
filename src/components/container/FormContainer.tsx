import React, { FormEventHandler } from "react";

type Props = {
  onSubmit: FormEventHandler;
};

const FormContainer: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-lightSecondary px-11 py-10 text-center rounded-xl"
    >
      {children}
    </form>
  );
};

export default FormContainer;
