import React from 'react';
import { CartItem } from '../types';

interface OrderSummaryCardProps {
  items: CartItem[];
}

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal >= 10000 ? 0 : 800;
  const tax = Math.floor((subtotal + shippingFee) * 0.1);
  const total = subtotal + shippingFee + tax;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">注文内容</h3>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between py-2 border-b">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">数量: {item.quantity}</p>
          </div>
          <p className="font-medium">¥{(item.price * item.quantity).toLocaleString()}</p>
        </div>
      ))}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-600">小計</p>
          <p>¥{subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">配送料</p>
          <p>{shippingFee === 0 ? '無料' : `¥${shippingFee.toLocaleString()}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">消費税（10%）</p>
          <p>¥{tax.toLocaleString()}</p>
        </div>
        <div className="flex justify-between pt-2 border-t font-semibold">
          <p>合計</p>
          <p>¥{total.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};