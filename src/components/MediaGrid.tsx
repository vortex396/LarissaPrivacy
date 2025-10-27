import React from 'react';
import { Play, Camera } from 'lucide-react';

interface MediaGridProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onMediaClick: (type: 'video' | 'image', url: string) => void;
}

export function MediaGrid({ activeTab, onTabChange, onMediaClick }: MediaGridProps) {
  const videos = Array.from({ length: 15 }, (_, i) => i + 1);
  const images = [
    'https://s3.chefexpress.site/vortex/imagem1.jpeg',
    'https://s3.chefexpress.site/vortex/imagem2.jpeg',
    'https://s3.chefexpress.site/vortex/imagem3.jpeg',
    'https://s3.chefexpress.site/vortex/imagem1.jpeg'
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-gray-200 p-4">
        <div className="flex space-x-4">
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onTabChange('videos')}
          >
            <Play className="w-5 h-5" />
            <span>Vídeos</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'fotos'
                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onTabChange('fotos')}
          >
            <Camera className="w-5 h-5" />
            <span>Fotos</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'videos' ? (
          <div className="grid grid-cols-2 gap-4">
            {videos.map((num) => (
              <div
                key={num}
                className="relative cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => onMediaClick('video', `https://s3.chefexpress.site/vortex/arquivo${num}.mp4`)}
              >
                <video
                  src={`https://s3.chefexpress.site/vortex/arquivo${num}.mp4`}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-pink-600 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-semibold bg-black/70 px-2 py-1 rounded">
                  {Math.floor(Math.random() * 3) + 1}:{String(Math.floor(Math.random() * 60)).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => onMediaClick('image', img)}
              >
                <img
                  src={img}
                  alt={`Foto ${idx + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                    ❤️ {150 + idx * 50}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
