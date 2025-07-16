import React, { useState, useEffect } from 'react';
import aramiImg from './image/arami.jpg';
import bgCumple from './image/bgcumple.png';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Moon as Balloon, 
  Star, 
  Sparkles, 
  Phone, 
  Camera,
  Gift,
  Music,
  Users,
  Navigation,
  Timer,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  Share2
} from 'lucide-react';

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showMap, setShowMap] = useState(false);

  // Fotos de Arami usando imagen importada
  const photos = [
    {
      url: aramiImg,
      caption: "Arami en brazos 💕"
    }
  ];

  // Cuenta regresiva
  useEffect(() => {
    const targetDate = new Date('2024-09-13T17:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5491234567890";
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia al cumpleaños de Arami 🎂✨");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleShareInvitation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '¡Cumpleaños de Arami!',
          text: 'Estás invitado al cumpleaños de Arami que cumple 2 añitos 🎂',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openGoogleMaps = () => {
    // Coordenadas de ejemplo - reemplazar con la dirección real
    const address = "Casa de los abuelos, Buenos Aires, Argentina";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Globos flotantes */}
        <div className="absolute top-10 left-10 animate-float">
          <Balloon className="w-8 h-8 text-pink-300" />
        </div>
        <div className="absolute top-20 right-16 animate-float-delayed">
          <Balloon className="w-6 h-6 text-purple-300" />
        </div>
        <div className="absolute top-32 left-1/4 animate-float">
          <Balloon className="w-7 h-7 text-blue-300" />
        </div>
        
        {/* Estrellas parpadeantes */}
        <div className="absolute top-16 right-1/4 animate-twinkle">
          <Star className="w-5 h-5 text-yellow-300 fill-current" />
        </div>
        <div className="absolute top-40 left-1/3 animate-twinkle-delayed">
          <Star className="w-4 h-4 text-pink-300 fill-current" />
        </div>
        <div className="absolute top-24 right-1/3 animate-twinkle">
          <Star className="w-6 h-6 text-purple-300 fill-current" />
        </div>
        
        {/* Corazones flotantes */}
        <div className="absolute top-1/4 right-8 animate-float">
          <Heart className="w-5 h-5 text-pink-400 fill-current" />
        </div>
        <div className="absolute top-1/3 left-8 animate-float-delayed">
          <Heart className="w-4 h-4 text-purple-400 fill-current" />
        </div>
        
        {/* Confetti */}
        <div className="absolute top-0 left-1/4 animate-confetti">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute top-0 left-1/2 animate-confetti-delayed">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>
        <div className="absolute top-0 right-1/4 animate-confetti">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
        <div className="absolute top-0 right-1/3 animate-confetti-delayed">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen p-4 space-y-8">
        
        {/* Header con botones de acción */}
        <div className="flex justify-center pt-4">
          <div className="flex space-x-4">
            <button
              onClick={handleShareInvitation}
              className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Share2 className="w-5 h-5 text-purple-500" />
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 text-blue-500" />
            </button>
          </div>
        </div>

        {/* Card principal */}
        <div className="max-w-md mx-auto">
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 p-8 text-center relative"
            style={{
              backgroundImage: `url(${bgCumple})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Header con sparkles */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-pink-400" />
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Título principal */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
              <span className="">
                ¡Estás invitado al
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              <span className="">
                cumpleaños de <span className="text-pink-500 font-extrabold drop-shadow-md text-4xl md:text-5xl">Arami</span>!
              </span>
            </h2>

            {/* Cuenta regresiva */}
            <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Timer className="w-5 h-5 text-pink-500" />
                <span className="text-lg font-semibold text-gray-700">¡Faltan!</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="text-xl font-bold text-pink-600">{timeLeft.days}</div>
                  <div className="text-xs text-gray-600">días</div>
                </div>
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="text-xl font-bold text-purple-600">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-600">horas</div>
                </div>
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="text-xl font-bold text-blue-600">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-600">min</div>
                </div>
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="text-xl font-bold text-yellow-600">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-600">seg</div>
                </div>
              </div>
            </div>

            {/* Información del evento */}
            <div className="space-y-6 mb-8">
              {/* Edad */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4">
                <div className="text-4xl mb-2">🎂</div>
                <p className="text-lg font-semibold text-gray-700">
                  Cumple <span className="text-2xl font-bold text-pink-600">2 añitos</span>
                </p>
              </div>

              {/* Detalles del evento */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 bg-blue-50 rounded-xl p-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Casa de los abuelos</span>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-purple-50 rounded-xl p-3">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 font-medium">Sábado 13 de septiembre</span>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-pink-50 rounded-xl p-3">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700 font-medium">17:00 hs</span>
                </div>
              </div>

              {/* Actividades */}
              <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-4">
                <div className="text-2xl mb-2">🎈</div>
                <p className="text-gray-700 font-medium mb-3">
                  ¡Habrá juegos, dulces y mucha diversión!
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex flex-col items-center">
                    <Music className="w-4 h-4 text-purple-500 mb-1" />
                    <span>Música</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="w-4 h-4 text-blue-500 mb-1" />
                    <span>Juegos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Gift className="w-4 h-4 text-pink-500 mb-1" />
                    <span>Sorpresas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="space-y-4 mb-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">Confirmar asistencia</span>
              </button>

              <button
                onClick={openGoogleMaps}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Ver ubicación en mapa</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Mensaje de despedida */}
            <div className="border-t border-pink-200 pt-6">
              <p className="text-lg text-gray-600 font-medium">
                Con amor, <span className="text-pink-600 font-extrabold drop-shadow-md text-xl md:text-2xl">Arami</span> 💕
              </p>
            </div>
          </div>
        </div>

        {/* Sección de fotos */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 p-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Camera className="w-6 h-6 text-pink-500" />
              <h3 className="text-xl font-bold text-gray-800">Momentos especiales de <span className="text-pink-500 font-extrabold drop-shadow-md text-2xl">Arami</span></h3>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 mb-4">
                <img
                  src={photos[currentPhotoIndex].url}
                  alt={photos[currentPhotoIndex].caption}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Controles de navegación */}
              <button
                onClick={prevPhoto}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Caption */}
              <p className="text-center text-gray-600 font-medium mb-4">
                {photos[currentPhotoIndex].caption}
              </p>
              
              {/* Indicadores */}
              <div className="flex justify-center space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPhotoIndex 
                        ? 'bg-pink-500 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Espaciado final */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}

export default App;