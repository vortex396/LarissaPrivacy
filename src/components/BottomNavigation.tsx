import React from 'react';
import { Home, TrendingUp, MessageCircle, Menu, Zap } from 'lucide-react';

export function BottomNavigation() {
  const navItems = [
    { icon: Zap, label: 'Mural', active: true, available: true },
    { icon: Home, label: 'Feed', active: false, available: false },
    { icon: TrendingUp, label: 'Em alta', active: false, available: false },
    { icon: MessageCircle, label: 'Chat', active: false, available: false },
    { icon: Menu, label: 'Menu', active: false, available: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="grid grid-cols-5 max-w-2xl mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`relative flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 ${
                item.active
                  ? 'text-pink-600'
                  : item.available
                  ? 'text-gray-400 hover:text-gray-600'
                  : 'text-gray-300'
              }`}
              disabled={!item.available}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 mb-1 ${item.active ? 'text-pink-600' : ''}`} />
                {!item.available && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-[8px] text-white">🔒</span>
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-medium ${item.active ? 'text-pink-600' : ''}`}>
                {item.label}
              </span>
              {item.active && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-600 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
