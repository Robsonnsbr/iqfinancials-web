import ContentContainer from "@components/common/containers/ContentContainer";
import { testimonials } from "@data/index";

export default function CustomerSuccess() {
  return (
    <>
      <hr className="w-full border-0 h-1 bg-custom-gradient-right" />
      <ContentContainer className="flex flex-col py-12 overflow-hidden 3xl:scale-105">
        <div className="flex flex-wrap text-white marker:text-red">
          {/* Título da seção */}
          <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2 order-first xl:order-none">
            <h2 className="uppercase self-center font-poppins font-extrabold text-3xl text-center w-full text-white">
              Recomendações
            </h2>
          </div>

          {/* Testemunhos */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2"
            >
              <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-light text-gray-300 mb-2">
                  {testimonial.role} - {testimonial.institution}
                </p>
                <p className="text-sm">{testimonial.testimony}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
      <hr className="w-full border-0 h-1 bg-custom-gradient-left" />
    </>
  );
}
