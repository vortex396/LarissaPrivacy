import React from 'react';
import { Grid, Play, Radio, Image, MessageSquare } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const tabs = [
    { id: 'feed', label: 'Feed', icon: Grid },
    { id: 'mídias', label: 'Mídias', icon: Play },
    { id: 'aovivo', label: 'Ao Vivo', icon: Radio },
    { id: 'stories', label: 'Stories', icon: Image },
    { id: 'mensagens', label: 'Chat', icon: MessageSquare }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[57px] z-10">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center justify-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-all duration-200 border-b-2 ${
                isActive
                  ? 'text-pink-600 border-pink-600 bg-pink-50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-pink-600' : 'text-gray-600'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
