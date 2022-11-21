import { Container } from "../Container";
import { Slider } from "../Slider";

export const AboutUs = () => {
  return (
    <>
      <section
        id="aboutUs"
        className="aboutUs-gradient py-10 md:py-32 bg-gradient-to-tl from-gray-400 to-yellow"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-baseline md:items-start justify-center col-auto">
              <h2 className="text-6xl font-bold mb-4 text-yellow">Nosotros</h2>
              <p className="max-w-md text-lg md:text-2xl">
                Somos una empresa con amplia experiencia, especializada en
                brindar el servicio y alquiler de montacargas, camión pluma,
                grúas telescópicas, maniobras de todo tipo montaje y desmontaje
                de equipos pesados y transporte en general a nivel nacional con
                un asesoramiento personalizado, cubriendo las necesidades de
                cada uno de nuestros clientes mediante un trato directo.
                Brindando un servicio de calidad y Seguridad.
              </p>
            </div>
            <Slider
              images={[
                "/machine.jfif",
                "/bill-work.jfif",
                "/work.jfif",
              ]}
            />
          </div>
        </Container>
      </section>
      <style jsx>{`
        .aboutUs-gradient {
          background: rgb(242, 242, 242);
          background: linear-gradient(
            143deg,
            rgba(242, 242, 242, 1) 67%,
            rgba(242, 179, 61, 1) 67%
          );
        }
      `}</style>
    </>
  );
};
