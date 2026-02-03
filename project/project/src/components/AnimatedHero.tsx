import { useEffect, useState } from 'react';
import { Recycle, Leaf, Shield, Globe,TreePine } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1920&q=80",
    title: "Responsible Recycling",
    description: "Professional e-waste management for a sustainable future"
  },
  {
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80",
    title: "Data Security",
    description: "Secure data destruction and certified disposal"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    title: "Corporate Solutions",
    description: "Tailored e-waste management for businesses"
  }
];

const stats = [
  { icon: Recycle, value: 100, suffix: '+', label: 'Devices Recycled' },
  { icon: Leaf, value: 3000, suffix: '+', label: 'Trees Saved' },
  { icon: TreePine, value: 2000, suffix: '+', label: 'Trees Planted' },
  { icon: Shield, value: 100, suffix: '%', label: 'Secure Disposal' },
];

// Custom hook for animated counting
function useCountUp(end, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(end * easeOutQuart));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return count;
}

function AnimatedStat({ stat, index }) {
  const count = useCountUp(stat.value, 2000, index * 200);
  
  return (
    <div
      className="text-center text-white"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      <stat.icon className="h-8 w-8 mx-auto mb-4 text-green-400" />
      <div className="text-4xl font-bold mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-300">{stat.label}</div>
    </div>
  );
}

export default function AnimatedHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] sm:min-h-[700px] md:h-screen">

      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 md:mb-8 px-4">
              <span className={`block transition-all duration-500 ${
                isTransitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}>
                {images[currentImage].title}
              </span>
            </h1>
            <p className={`mt-2 sm:mt-3 max-w-md mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 px-4 md:max-w-3xl transition-all duration-500 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {images[currentImage].description}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-x-6 justify-center items-center">
              <a
                href="#request-pickup"
                className="w-full sm:w-auto rounded-md bg-green-600 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 animate-pulse text-center"
              >
                Schedule Pickup
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto rounded-md bg-white/10 backdrop-blur-sm px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4">
            {stats.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}