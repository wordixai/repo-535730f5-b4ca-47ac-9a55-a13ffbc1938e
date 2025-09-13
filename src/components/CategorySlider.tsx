import React from 'react';
import { Card, Typography } from 'antd';
import { Carousel } from 'antd';

const { Text } = Typography;

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface CategorySliderProps {
  categories: Category[];
  onCategorySelect?: (category: Category) => void;
}

export const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
  onCategorySelect
}) => {
  return (
    <div className="py-4">
      <div className="flex overflow-x-auto gap-4 px-4 pb-2">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="mobile-card flex-shrink-0 w-20 cursor-pointer hover:shadow-md transition-shadow"
            bodyStyle={{ padding: '12px', textAlign: 'center' }}
            onClick={() => onCategorySelect?.(category)}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl"
              style={{ backgroundColor: category.color }}
            >
              {category.icon}
            </div>
            <Text className="text-xs">{category.name}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};