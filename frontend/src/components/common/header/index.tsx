import React from "react";
// import ContainerMedium from "../common/container/ContainerMedium";

function Header() {
  return (
    <header
      className=" flex top-0 left-0 w-full header class-header bg-accent"
      id="top-header"
    >
      {/* <ContainerMedium id="container-header"> */}
      <div className="bg-emerald-400 h-full w-full justify-center items-center">
        <h1 className="flex items-center justify-center font-extrabold text-4xl">
          HEADER - fix
        </h1>
      </div>
      {/* </ContainerMedium> */}
    </header>
  );
}

export default Header;
