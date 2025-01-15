import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 bg-blue h-fit w-fit text-white active:text-red active:scale-90 border-2 border-green border-b-teal-400 rounded-md py-1 px-2 shadow-md select-none hover:bg-blue-light ${className}`}
      {...props}
    />
  );
}

export default Button;
