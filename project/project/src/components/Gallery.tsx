import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'facility', name: 'Facility' },
  { id: 'events', name: 'Events' },
  { id: 'awards', name: 'Awards' },
  { id: 'community', name: 'Community' }
];

function ImageItem({ item, index, setSelected }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      className="inline-block group w-full rounded-md relative bg-green-600 cursor-pointer mb-4"
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        className="w-full bg-base-100 shadow-xl cursor-pointer rounded-md"
        alt={`Gallery Image ${index + 1}`}
      />
    </motion.figure>
  );
}

function Modal({ selected, setSelected }) {
  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, setSelected]);

  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer overflow-y-scroll"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-${selected.id}`}
          className="w-full max-w-[1000px] mx-auto my-8 bg-white/10 backdrop-blur-sm rounded-md border border-green-400/20"
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-green-400 transition-colors bg-black/50 hover:bg-black/70 rounded-full"
            onClick={() => setSelected(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div className="p-2 h-[70vh] rounded-md">
            <img
              alt="Selected"
              src={selected.url}
              className="w-full h-full object-contain rounded-md"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery({ images, title = "Gallery", subtitle = "Explore our facility and initiatives through our image gallery" }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <>
      <div className="bg-gradient-to-br from-white via-green-100 to-emerald-100 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-2 relative">
                {title.split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-xl hover:shadow-2xl hover:from-green-500 hover:to-emerald-500'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 border border-green-100 hover:border-green-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="container mx-auto sm:p-4 px-0">
            <div className="columns-2 md:columns-3 2xl:columns-4 space-y-4">
              {filteredImages.map((item, index) => (
                <ImageItem
                  key={item.id}
                  item={item}
                  index={index}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}