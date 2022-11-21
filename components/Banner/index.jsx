import { Container } from "../Container";

const TitleFragment = ({ children }) => {
  return (
    <span className={`bg-black text-yellow p-2 rounded-md text-md md:text-2xl uppercase font-bold ring-1 ring-yellow`}>
      {children}
    </span>
  );
};

export const Banner = () => {
  return (
    <>
      <div className="h-[400px] md:h-[600px] relative">
        <img
          src="https://mmmontacargas.com/wp-content/uploads/2021/06/maniobra-con-montacargas-mm-1024x420.jpg"
          alt=""
          className="absolute left-0 right-0 h-full w-full object-cover object-left"
        />
        <div className="absolute right-0 top-0 w-full h-full flex justify-end items-center bg-gradient-to-r from-transparent to-[#0D0D0Daa]">
          <Container>
            <div className="flex flex-col items-end gap-4">
              <TitleFragment>Servicios y alquiler</TitleFragment>
              <TitleFragment>de montacarga,</TitleFragment>
              <TitleFragment>maniobra,</TitleFragment>
              <TitleFragment>camion grúa y más.</TitleFragment>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
