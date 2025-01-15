import React from "react";

type IMainProps = React.HTMLAttributes<HTMLDivElement>;

const Main = ({ children, className, ...props }: IMainProps) => {
  return (
    <main
      id="main"
      className={`min-h-dvh ${className ? className : ""}`}
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
