import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  className?: string;
}

const Select = ({ options, className, ...rest }: SelectProps) => {
  return (
    <select
      required
      {...rest}
      autoFocus={false}
      className={`min-h-10 min-w-48 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
    >
      <option value="">Selecione</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
