import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'オーガニックコットンTシャツ',
    price: 3900,
    description: '肌触りの良い100%オーガニックコットン使用',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'トップス',
  },
  {
    id: '2',
    name: 'スリムフィットデニム',
    price: 8900,
    description: 'ストレッチ素材で快適な穿き心地',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80',
    category: 'パンツ',
  },
  {
    id: '3',
    name: 'ウールブレザー',
    price: 29800,
    description: '上質なイタリア製ウール素材使用',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80',
    category: 'アウター',
  },
  {
    id: '4',
    name: 'カシミアニット',
    price: 15800,
    description: '最高級カシミア100%のラグジュアリーニット',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80',
    category: 'トップス',
  },
  {
    id: '5',
    name: 'レザースニーカー',
    price: 12800,
    description: 'イタリアンレザーを使用した高級スニーカー',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80',
    category: 'シューズ',
  },
  {
    id: '6',
    name: 'シルクシャツ',
    price: 18800,
    description: '上質なシルク100%のドレスシャツ',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80',
    category: 'トップス',
  },
];

const CATEGORIES = ['すべて', 'トップス', 'パンツ', 'アウター', 'シューズ'];

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const filteredProducts = selectedCategory === 'すべて'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">新着アイテム</h1>
        <div className="flex gap-4 border-b">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? 'border-b-2 border-black font-bold'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};