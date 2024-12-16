import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const OrderComplete: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ご注文ありがとうございます
        </h1>
        <p className="text-gray-600 mb-8">
          ご注文の確認メールをお送りしました。
          商品の発送準備が整い次第、発送のお知らせメールをお送りいたします。
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          ショッピングを続ける
        </Link>
      </div>
    </div>
  );
};