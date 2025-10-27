import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Play, Bookmark, Send } from 'lucide-react';

interface FeedPostProps {
  postId: number;
  type: 'video' | 'image';
  mediaUrl: string;
  timeAgo: string;
  likes: number;
  comments: number;
  caption?: string;
  isLiked: boolean;
  onLike: () => void;
  onMediaClick: () => void;
  onDoubleClick?: (e: React.MouseEvent) => void;
}

export function FeedPost({
  postId,
  type,
  mediaUrl,
  timeAgo,
  likes,
  comments,
  caption,
  isLiked,
  onLike,
  onMediaClick,
  onDoubleClick
}: FeedPostProps) {
  return (
    <article className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src="https://s3.chefexpress.site/vortex/fotodeperfil.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-500"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm text-gray-900">larissasilva_</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-gray-500 text-xs">{timeAgo}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-green-500">● Online</span>
            </div>
          </div>
        </div>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative cursor-pointer group" onClick={onMediaClick}>
        {type === 'video' ? (
          <>
            <video
              src={mediaUrl}
              className="w-full aspect-square object-cover"
              muted
              loop
              playsInline
              onDoubleClick={onDoubleClick}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white fill-current drop-shadow-lg" />
              </div>
            </div>
          </>
        ) : (
          <img
            src={mediaUrl}
            alt="Post"
            className="w-full aspect-square object-cover"
            onDoubleClick={onDoubleClick}
          />
        )}

        {isLiked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart className="w-24 h-24 text-white fill-current drop-shadow-2xl animate-ping" />
          </div>
        )}
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={onLike}
              className="hover:scale-110 transition-transform active:scale-95"
            >
              <Heart
                className={`w-7 h-7 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-800'} transition-colors`}
              />
            </button>
            <button className="hover:scale-110 transition-transform active:scale-95">
              <MessageCircle className="w-7 h-7 text-gray-800" />
            </button>
            <button className="hover:scale-110 transition-transform active:scale-95">
              <Send className="w-7 h-7 text-gray-800" />
            </button>
          </div>
          <button className="hover:scale-110 transition-transform active:scale-95">
            <Bookmark className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="space-y-1">
          <button className="font-semibold text-sm text-gray-900 hover:text-gray-600 transition-colors">
            {likes.toLocaleString('pt-BR')} curtidas
          </button>

          {caption && (
            <div className="text-sm">
              <span className="font-semibold text-gray-900">larissasilva_ </span>
              <span className="text-gray-800">{caption}</span>
            </div>
          )}

          <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Ver todos os {comments} comentários
          </button>

          <div className="flex items-center space-x-2 pt-1">
            <img
              src="https://s3.chefexpress.site/vortex/fotodeperfil.jpg"
              alt="Your profile"
              className="w-6 h-6 rounded-full object-cover"
            />
            <input
              type="text"
              placeholder="Adicione um comentário..."
              className="flex-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
