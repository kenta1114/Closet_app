import React from 'react';
import {Minus,Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCartStore } from '../store/useCartStore';

interface CartItemProps{
  item: CartItemType;
}

export const CartItem:React.FC<CartItemProps>=({item})=>{
  const { updateQuantity, removeFromCart } =useCartStore();

  const handleQuantityChange = (delta:number)=>{
    const newQuantity = Math.max(0, item.quantity+delta);
    updateQuantity(item.id, newQuantity);
  };
  
   return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Decrease quantity"
        >
          <Minus size={20} />
        </button>
        <span className="w-8 text-center" aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Increase quantity"
        >
          <Plus size={20} />
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-1 text-red-500 hover:bg-red-50 rounded ml-2"
          aria-label="Remove from cart"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};
