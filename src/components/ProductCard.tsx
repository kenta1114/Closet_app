import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-4 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart size={20} />
        </button>
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 px-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          カートに追加
        </button>
      </div>
      <div>
        <h3 className="font-medium mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.description}</p>
        <p className="font-bold">¥{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};