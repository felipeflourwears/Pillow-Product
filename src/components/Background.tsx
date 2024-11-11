const Background = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-custom-blue to-custom-gray flex items-center justify-center overflow-hidden">

        {/* Luna */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 rounded-b-full bg-gradient-to-b from-gray-100 to-custom-gray shadow-[0_0_30px_rgba(255,255,255,0.7)]"> 
        </div>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-40 flex items-center justify-center">
            <h2 className="absolute text-center text-white text-2xl font-lunara select-none">Descansa en Equilibrio</h2>
        </div>


        {/* Texto */}
        
        <h3 className="absolute top-5 sm:top-16 right-5 text-white text-xl font-lunara select-none">LUNARA</h3>
    </div>
  );
};

export default Background;
