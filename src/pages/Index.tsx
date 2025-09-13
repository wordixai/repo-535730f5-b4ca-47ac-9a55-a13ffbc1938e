import React, { useState } from 'react';
import { Typography, Row, Col, Divider } from 'antd';
import { MobileHeader } from '@/components/MobileHeader';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { ProductCard } from '@/components/ProductCard';
import { CategorySlider } from '@/components/CategorySlider';
import { SearchBar } from '@/components/SearchBar';

const { Title } = Typography;

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: '1', name: 'Electronics', icon: '📱', color: '#1890ff' },
    { id: '2', name: 'Fashion', icon: '👗', color: '#f5222d' },
    { id: '3', name: 'Home', icon: '🏠', color: '#52c41a' },
    { id: '4', name: 'Sports', icon: '⚽', color: '#fa8c16' },
    { id: '5', name: 'Books', icon: '📚', color: '#722ed1' },
  ];

  const products = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4.5,
      reviewCount: 128,
      isSale: true,
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      rating: 4.8,
      reviewCount: 89,
      isNew: true,
    },
    {
      id: '3',
      name: 'Premium Coffee Maker',
      price: 149.99,
      originalPrice: 179.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      rating: 4.3,
      reviewCount: 67,
      isSale: true,
    },
    {
      id: '4',
      name: 'Ergonomic Office Chair',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400',
      rating: 4.6,
      reviewCount: 94,
    },
  ];

  return (
    <div className="mobile-container bg-gray-50 min-h-screen">
      <MobileHeader
        title="ShopApp"
        notificationCount={3}
        onMenuClick={() => console.log('Menu clicked')}
      />
      
      <div className="pb-20">
        <SearchBar
          onSearch={(value) => console.log('Search:', value)}
          onFilter={() => console.log('Filter clicked')}
        />
        
        <CategorySlider
          categories={categories}
          onCategorySelect={(category) => console.log('Category selected:', category)}
        />
        
        <Divider />
        
        <div className="px-4">
          <Title level={4} className="mb-4">Featured Products</Title>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col span={12} key={product.id}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </div>
        
        <Divider />
        
        <div className="px-4">
          <Title level={4} className="mb-4">Trending Now</Title>
          <Row gutter={[16, 16]}>
            {products.slice(0, 2).map((product) => (
              <Col span={12} key={`trending-${product.id}`}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default Index;