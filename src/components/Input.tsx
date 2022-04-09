import React from "react";

type Props = {
  value: string;
  onChangeText: (newValue: string) => void;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
};

const Input: React.FC<Props> = ({
  label,
  type,
  value,
  onChangeText,
  required = false,
}) => {
  return (
    <div className="flex flex-col max-w-[400px] text-left gap-2 mb-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        required
        className="text-base h-9 bg-lightSecondary border border-secondary rounded-md outline-none focus:border-primary px-2"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        type={type || "text"}
        id={label.toLowerCase()}
      />
    </div>
  );
};

export default Input;
