import Image from "next/image";
import { logoIQWithName } from "@public/logos/index";

export default function HeroContent() {
  return (
    <div className="flex flex-col space-y-8 text-white font-poppins !text-center text-balance m-auto">
      <h1 className="font-extrabold leading-none uppercase">
        <span className="font-raleway flex items-center justify-center">
          <span className="sr-only">iq financials</span>
          <Image
            alt="logo iq financials"
            src={logoIQWithName}
            width={878}
            height={169}
            style={{ height: "auto", width: "40rem" }}
            className="sm:pt-20"
            priority={process.env.NODE_ENV === "production"}
          />
        </span>
        <span className="text-3xl border-t-2 border-red">
          Dados Econômicos, Financeiros e Contábeis
        </span>
      </h1>
      <h2 className="text-2xl font-bold leading-snug">
        Precisa de ajuda para coletar seus dados econômico-financeiros?
      </h2>
    </div>
  );
}
