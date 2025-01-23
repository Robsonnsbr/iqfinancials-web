// Label.tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
  children?: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  if (!value && !children) {
    throw new Error("Label requires either a value or children.");
  }

  return (
    <label
      {...props}
      className={`bg-white/20 h-fit p-2 rounded-md ${className}`}
    >
      {value ?? children}
    </label>
  );
};

export default Label;
