import { useEffect, useState } from 'react';

const FlashCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: (
        <>
          {/* Parte 1: Logo, Título y Descripción */}
          <div className="w-20 h-20 mb-4 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto">
            <img
              src="/logo.svg"
              alt="Logo Lunara"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-center text-2xl font-semibold text-custom-blue font-lunara mb-4 sm:text-lg lg:text-xl xl:text-2xl">
            Funda Zen de Lunara
          </h2>

          <p className="text-center text-sm text-gray-600 mt-2 font-lunara sm:text-xs lg:text-sm xl:text-base">
            Suavidad, frescura, tecnología termorreguladora y aromaterapia para un descanso reparador.
          </p>
        </>
      ),
    },
    {
      content: (
        <>
          {/* Parte 2: Características */}
          <div className="mt-4 space-y-1 text-gray-600 sm:text-xs lg:text-sm xl:text-base text-center">
            <ul className="list-disc space-y-2 mx-auto max-w-md">
              <p>🧘‍♀️ Aromaterapia</p>
              <p>🌡️ Regulación de Temperatura</p>
              <p>🛏️ Materiales de Alta Calidad</p>
            </ul>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          {/* Parte 3: Adquiere tu funda y el precio */}
          <div className="mt-6 space-y-1 text-center">
            <h1 className="font-lunara text-custom-blue text-lg">ADQUIERE TU FUNDA</h1>
            <div className="bg-custom-blue text-white px-4 py-2 rounded-md inline-block">
              <h2 className="font-lunara text-xl">A TAN SOLO: $355</h2>
            </div>
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          {/* Parte 4: Tiendas electrónicas */}
          <div className="top-10 text-center">
            <p className="font-lunara text-custom-blue text-sm sm:text-xs lg:text-sm xl:text-base">
              EN TIENDAS ELECTRÓNICAS COMO:
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <img
              src="/ml-icon.png"
              alt="Tienda 1"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/liverpool-icon.png"
              alt="Tienda 2"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/amazon-icon.png"
              alt="Tienda 3"
              className="w-12 h-12 object-contain"
            />
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          {/* Parte 5: Descuento */}
          <div className="mt-6 text-center sm:mt-4">
            <p className="text-lg text-custom-blue font-lunara sm:text-base lg:text-md xl:text-md">
              ¡Aprovecha 10% de descuento en nuestras fundas!
            </p>
            <p className="text-sm text-gray-500 font-lunara sm:text-xs lg:text-sm xl:text-base">
              Válido solo mes de diciembre
            </p>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative p-6 sm:w-80 md:w-[32rem] lg:w-[40rem] xl:w-[45rem] max-w-full bg-white rounded-lg shadow-xl flex flex-col items-center sm:max-h-auto lg:max-h-[600px] xl:max-h-[700px] max-h-[500px] overflow-hidden transition-transform duration-500 transform hover:scale-100 hover:shadow-2xl">
      {/* Mostrar contenido del slider solo en pantallas pequeñas */}
      <div className="sm:block lg:hidden">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Mostrar toda la información en pantallas grandes */}
      <div className="hidden lg:block w-full text-center">
        {/* En pantallas grandes mostrar todas las partes juntas */}
        {slides[0].content}
        {slides[1].content}
        {slides[2].content}
        {slides[3].content}
        {slides[4].content}
      </div>
    </div>
  );
};

export default FlashCard;
