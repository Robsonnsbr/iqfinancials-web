import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function SectionContainer({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`relative flex flex-col justify-center items-center min-h-[43rem] 3xl:min-h-[54rem]  w-full bg-fixed bg-cover ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
