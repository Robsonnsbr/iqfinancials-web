import React from "react";

interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = ({ className = "", ...props }: ITextAreaProps) => {
  return (
    <textarea
      required
      className={`px-3 py-2 h-[100px] sm:min-w-[400px] rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      {...props}
    />
  );
};

export default TextArea;
