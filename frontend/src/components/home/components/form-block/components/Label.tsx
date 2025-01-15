// Label.tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ value, children, ...props }) => {
  if (!value && !children) {
    throw new Error("Label requires either a value or children.");
  }

  return <label {...props}>{value ?? children}</label>;
};

export default Label;
