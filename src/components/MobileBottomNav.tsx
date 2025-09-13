import React from 'react';
import { Button, Space } from 'antd';
import { HomeOutlined, ShoppingOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';

interface MobileBottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab = 'home',
  onTabChange
}) => {
  const tabs = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home' },
    { key: 'shop', icon: <ShoppingOutlined />, label: 'Shop' },
    { key: 'favorites', icon: <HeartOutlined />, label: 'Favorites' },
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-2">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            type="text"
            className={`flex flex-col items-center p-2 ${
              activeTab === tab.key ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => onTabChange?.(tab.key)}
          >
            <div className="text-lg">{tab.icon}</div>
            <span className="text-xs mt-1">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};