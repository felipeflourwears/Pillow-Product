import Background from "./components/Background";
import Pillow from "./components/Pillow";
import FlashCard from "./components/FlashCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-custom-blue to-custom-gray flex items-center justify-center overflow-auto">
        <Background />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-row items-center sm:space-y-6 lg:space-x-5 max-w-full">
          {/* Aquí se puede aumentar el tamaño del borde */}
          <div className="relative z-30 top-20 sm:top-1 md:top-0 lg:top-0 w-full">
            <Pillow />
          </div>
          <div className="relative z-20 w-full max-w-lg">
            <FlashCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
