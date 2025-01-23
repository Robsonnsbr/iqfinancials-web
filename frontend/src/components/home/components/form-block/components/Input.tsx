// Input.tsx
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};
const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      required
      className={`min-h-10 min-w-48 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      {...rest}
    />
  );
};

export default Input;
