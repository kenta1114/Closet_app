import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShippingForm } from '../components/ShippingForm';
import { OrderSummaryCard } from '../components/OrderSummaryCard';
import { useCartStore } from '../store/useCartStore';
import { ShippingDetails } from '../types';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();

  const handleSubmit = (shippingDetails: ShippingDetails) => {
    // ここで注文処理を実行
    console.log('Order placed:', { items, shippingDetails });
    clearCart();
    navigate('/order-complete');
  };

  if (items.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">購入手続き</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">配送情報</h2>
          <ShippingForm onSubmit={handleSubmit} />
        </div>
        <div>
          <OrderSummaryCard items={items} />
        </div>
      </div>
    </div>
  );
};