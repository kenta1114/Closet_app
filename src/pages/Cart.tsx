import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import { useCartStore } from '../store/useCartStore';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">カート</h1>
        <p className="text-gray-600">カートは空です。</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">カート</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              合計: ¥{total.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">税込</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              カートを空にする
            </button>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              購入手続きへ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};