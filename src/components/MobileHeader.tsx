import React from 'react';
import { Button, Space, Typography, Badge } from 'antd';
import { MenuOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface MobileHeaderProps {
  title: string;
  onMenuClick?: () => void;
  showNotifications?: boolean;
  notificationCount?: number;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  onMenuClick,
  showNotifications = true,
  notificationCount = 0
}) => {
  return (
    <div className="mobile-header p-4 flex items-center justify-between">
      <Space>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={onMenuClick}
          style={{ color: 'white', border: 'none' }}
        />
        <Title level={4} style={{ color: 'white', margin: 0 }}>
          {title}
        </Title>
      </Space>
      
      <Space>
        <Button
          type="text"
          icon={<SearchOutlined />}
          style={{ color: 'white', border: 'none' }}
        />
        {showNotifications && (
          <Badge count={notificationCount} size="small">
            <Button
              type="text"
              icon={<BellOutlined />}
              style={{ color: 'white', border: 'none' }}
            />
          </Badge>
        )}
      </Space>
    </div>
  );
};