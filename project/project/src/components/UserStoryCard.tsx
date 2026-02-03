import React, { useState } from 'react';
import { X, Calendar, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

export interface UserStory {
  id: string;
  title: string;
  description: string;
  images: string[];
  author: {
    name: string;
    role: string;
    company?: string;
    location: string;
    avatar: string;
  };
  date: string;
  category: 'Individual' | 'Corporate' | 'Institution';
  stats?: {
    wasteCollected: string;
    impact: string;
  };
}

const ImageGalleryModal = ({ images, isOpen, onClose, title, story }: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
  story: UserStory;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (!isOpen) return null;

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(' ') + '...';
  };

  const showExpandButton = story.description.split(' ').length > 50;
  const displayText = isDescriptionExpanded ? story.description : truncateText(story.description, 50);

  return (
    <div className="fixed inset-0  bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full w-full flex flex-col lg:flex-row bg-gradient-to-br from-green-950 via-green-900 to-green-950 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 bg-green-500 bg-opacity-50 rounded-full p-2"
        >
          <X size={20} />
        </button>
        
        {/* Image Section */}
        <div className="flex-1 lg:flex-[2] flex flex-col">
          <div className="p-4 border-b border-gray-700 lg:hidden">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{currentImageIndex + 1} of {images.length}</p>
          </div>
          
          <div className="relative flex-1 min-h-[300px] lg:min-h-[500px]">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain bg-gradient-to-br from-green-950 via-green-950 to-green-950 "
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                >
                  →
                </button>
              </>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="p-2 sm:p-4 bg-gradient-to-br from-green-950 via-green-950 to-green-950  border-t border-gray-700">
              <div className="flex gap-1 sm:gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-12 h-12 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2 flex-shrink-0 transition-all ${
                      index === currentImageIndex ? 'border-green-400' : 'border-transparent hover:border-green-600'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Description Section - Right Side for Large Screens */}
        <div className="lg:flex-1 lg:max-w-md bg-gray-850 border-t lg:border-t-0 lg:border-l border-gray-700 flex flex-col max-h-full">
          {/* Header */}
          <div className="p-4 lg:p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {story.category}
              </span>
              <div className="hidden lg:block text-gray-400 text-sm">
                {currentImageIndex + 1} of {images.length}
              </div>
            </div>
            <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
            <div className="flex items-center gap-4 text-gray-400 text-sm mt-3">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {story.date}
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {story.author.location}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 scrollbar-hide">
            {/* Description */}
            <div className="space-y-2">
              <p className="text-gray-300 leading-relaxed break-words">{displayText}</p>
              {showExpandButton && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center space-x-1"
                >
                  <span>{isDescriptionExpanded ? 'Show less' : 'Show more'}</span>
                  {isDescriptionExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>

            {/* Stats */}
            {story.stats && (
              <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 rounded-lg p-4 border border-green-700/30">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Waste Collected</p>
                    <p className="text-green-400 font-bold text-lg">{story.stats.wasteCollected}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Environmental Impact</p>
                    <p className="text-green-400 font-bold text-lg">{story.stats.impact}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-green-800/30">
              <img src={story.author.avatar} alt={story.author.name} className="w-12 h-12 rounded-full border-2 border-green-600/50 object-cover" />
              <div>
                <p className="text-white font-semibold">{story.author.name}</p>
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <span>{story.author.role}</span>
                  {story.author.company && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Building size={12} />
                        {story.author.company}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Responsive image collage
const ImageCollage = ({ images, onClick }: { images: string[]; onClick: () => void }) => {
  const imageCount = images.length;

  if (imageCount === 1) {
    return (
      <div className="cursor-pointer group" onClick={onClick}>
        <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-t-xl overflow-hidden">
          <img src={images[0]} alt="Post" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
        </div>
      </div>
    );
  }

  if (imageCount === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 cursor-pointer group" onClick={onClick}>
        {images.slice(0, 2).map((img, idx) => (
          <div key={idx} className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
            <img src={img} alt={`Post ${idx + 1}`} className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
          </div>
        ))}
      </div>
    );
  }

  if (imageCount === 3) {
    return (
      <div className="grid grid-cols-3 gap-1 h-full cursor-pointer group" onClick={onClick}>
        <div className="col-span-2 aspect-w-2 aspect-h-1 bg-gray-800 overflow-hidden">
          <img src={images[0]} alt="Post 1" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
        </div>
        <div className="grid grid-rows-2 gap-1">
          <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
            <img src={images[1]} alt="Post 2" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
          </div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
            <img src={images[2]} alt="Post 3" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1 cursor-pointer group" onClick={onClick}>
      <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
        <img src={images[0]} alt="Post 1" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
      </div>
      <div className="grid grid-rows-2 gap-1">
        <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
          <img src={images[1]} alt="Post 2" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
        </div>
        {imageCount === 4 ? (
          <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
            <img src={images[2]} alt="Post 3" className="w-full h-full object-cover group-hover:opacity-95 transition-opacity" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-1">
            <div className="aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
              <img src={images[2]} alt="Post 3" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-w-1 aspect-h-1 bg-gray-800 overflow-hidden">
              <img src={images[3]} alt="Post 4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-xl font-bold">+{imageCount - 4}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const UserStoryCard = ({ story }: { story: UserStory }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(' ') + '...';
  };

  const showExpandButton = story.description.split(' ').length > 30;
  const displayText = isDescriptionExpanded ? story.description : truncateText(story.description, 30);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-green-900 to-black rounded-xl shadow-2xl overflow-hidden hover:shadow-green-500/10 transition-all duration-300 border border-green-800/30">
        <div className="relative">
          <ImageCollage images={story.images} onClick={() => setIsGalleryOpen(true)} />
          <div className="absolute top-4 left-4">
            <span className="bg-green-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              {story.category}
            </span>
          </div>
          {story.images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              {story.images.length} photos
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-gray-400 text-sm flex-wrap gap-2">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {story.date}
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {story.author.location}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white leading-tight">{story.title}</h3>

          <div className="space-y-2">
            <p className="text-gray-300 leading-relaxed break-words">{displayText}</p>
            {showExpandButton && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center space-x-1"
              >
                <span>{isDescriptionExpanded ? 'Show less' : 'Show more'}</span>
                {isDescriptionExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>

          {story.stats && (
            <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 rounded-lg p-4 border border-green-700/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Waste Collected</p>
                  <p className="text-green-400 font-bold text-lg">{story.stats.wasteCollected}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Environmental Impact</p>
                  <p className="text-green-400 font-bold text-lg">{story.stats.impact}</p>
                </div>
              </div>
            </div>
          )}

          {/* <div className="flex items-center gap-4 pt-4 border-t border-green-800/30">
            <img src={story.author.avatar} alt={story.author.name} className="w-12 h-12 rounded-full border-2 border-green-600/50 object-cover" />
            <div>
              <p className="text-white font-semibold">{story.author.name}</p>
              <div className="text-gray-400 text-sm flex items-center gap-2">
                <span>{story.author.role}</span>
                {story.author.company && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Building size={12} />
                      {story.author.company}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <ImageGalleryModal
        images={story.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title={story.title}
        story={story}
      />
    </>
  );
};

export default UserStoryCard;