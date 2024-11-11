const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-60" style={{
        backgroundImage: "url('/clouds.png')",
        backgroundSize: "auto 100%", // Ajusta la altura de las nubes
        backgroundPosition: "center bottom" // Posiciona las nubes en la parte inferior
    }}>
        <div className="flex justify-center space-x-4 mt-4">
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather1.png')" }}></div>
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather2.png')" }}></div>
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather3.png')" }}></div>
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather1.png')" }}></div>
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather2.png')" }}></div>
            <div className="w-12 h-16 bg-no-repeat bg-center bg-contain animate-floating" style={{ backgroundImage: "url('/feather3.png')" }}></div>
        </div>
    
    </div>
  )
}

export default Footer