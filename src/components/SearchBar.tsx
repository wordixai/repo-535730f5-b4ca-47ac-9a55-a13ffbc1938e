import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search products...",
  onSearch,
  onFilter
}) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          prefix={<SearchOutlined />}
          className="flex-1"
          onPressEnter={(e) => onSearch?.(e.currentTarget.value)}
        />
        <Button
          icon={<FilterOutlined />}
          onClick={onFilter}
          className="flex-shrink-0"
        />
      </div>
    </div>
  );
};