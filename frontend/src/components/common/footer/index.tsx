"use client";

import React, { HTMLAttributes } from "react";
import ContentContainer from "@components/common/containers/ContentContainer";
import SectionContainer from "../containers/SectionContainer";
import { useRefContext } from "@contexts/refs";

type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer = ({ ...rest }: FooterProps) => {
  const { footerRef } = useRefContext();

  return (
    <footer {...rest} ref={footerRef} className="text-whiteSnow" id="footer">
      <SectionContainer id="footer-section" className="!min-h-fit bg-blue">
        <ContentContainer className="flex flex-col gap-12" id="footer-content">
          <div className="flex flex-wrap gap-6 justify-center items-center text-white sm:py-16 w-full">
            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
              <h2 className="font-semibold text-lg">Sobre Nós</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Quem somos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Nossa missão
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
              <h2 className="font-semibold text-lg">Serviços</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Consultoria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Suporte Técnico
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
              <h2 className="font-semibold text-lg">Redes Sociais</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-10 flex-1  min-w-[200px] max-w-[300px] text-center">
              <h2 className="font-semibold text-lg self-end">Contato</h2>
              <ul>
                <li>
                  <a
                    href="mailto:financialsiq@gmail.com"
                    className="hover:text-accent"
                  >
                    financialsiq@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+554199539-8000" className="hover:text-accent">
                    (41) 99539-8003
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ContentContainer>
        <div className="flex flex-col py-2 gap-2 text-center text-white bg-[#1E2337] w-full text-sm">
          <p>
            &copy;Copyright 2025 <strong>IQ Financials.</strong> Todos os
            direitos reservados.
          </p>
          <p className="text-center text-white ">
            Este site é protegido pelo reCAPTCHA e está sujeito à{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Política de Privacidade
            </a>{" "}
            e aos{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Termos de Serviço
            </a>{" "}
            do Google.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
